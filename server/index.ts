// server/index.ts
import express, { type Request, Response, NextFunction } from "express";
import multer from 'multer'; // >>>>>>> ДОБАВЕНО <<<<<<<
import path from 'path';
import fs from 'fs';
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/downloads', express.static('public/downloads'));

// >>>>>>> ДОБАВЕНО: Конфигурация за Multer, използвайки process.cwd() <<<<<<<
// Уверете се, че папката 'uploads' съществува в главната директория на проекта
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Функция за превод на българските символи в латиница (за по-безопасни имена на файлове)
// Това е опционално, но препоръчително.
const transliterate = (str: string): string => {
  const cyrillicToLatin: Record<string, string> = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'zh', 'з': 'z',
    'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p',
    'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch',
    'ш': 'sh', 'щ': 'sht', 'ъ': 'a', 'ь': 'y', 'ю': 'yu', 'я': 'ya',
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ж': 'Zh', 'З': 'Z',
    'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P',
    'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'Ts', 'Ч': 'Ch',
    'Ш': 'Sh', 'Щ': 'Sht', 'Ъ': 'A', 'Ь': 'Y', 'Ю': 'Yu', 'Я': 'Ya'
  };

  return str.replace(/[^\s\w]/g, char => cyrillicToLatin[char] || char).replace(/\s+/g, '_');
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // Запазва файловете в папка 'uploads'
  },
  filename: function (req, file, cb) {
    // Генерира уникално име за файла, за да се избегнат конфликти
    const timestamp = Date.now();
    const uniqueSuffix = timestamp + '-' + Math.round(Math.random() * 1E9);
    const originalNameWithoutExt = path.parse(file.originalname).name;
    const safeOriginalName = transliterate(originalNameWithoutExt); // Превежда българските букви
    const fileExtension = path.extname(file.originalname);
    // Формат: cv-Три_Имена-TIMESTAMP-UNIQUESUFFIX.ext
    cb(null, `cv-${safeOriginalName}-${timestamp}-${uniqueSuffix}${fileExtension}`);
  }
});

const upload = multer({
  storage: storage,
  // Можете да добавите филтри за файлове (напр. само PDF, DOC, DOCX) тук ако е нужно
  fileFilter: (req, file, cb) => {
    // Примерен филтър
    if (file.mimetype === 'application/pdf' ||
        file.mimetype === 'application/msword' ||
        file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      cb(null, true);
    } else {
      cb(new Error('Непозволен тип файл! Моля, прикачете PDF, DOC или DOCX.'), false);
    }
  },
  limits: {
    fileSize: 10 * 1024 * 1024 // Лимит 10MB
  }
});
// >>>>>>> КРАЙ НА ДОБАВЕНИТЕ РЕДОВЕ ЗА MULTER <<<<<<<

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// >>>>>>> ДОБАВЕНО: Маршрут за обработка на заявката от Careers <<<<<<<
app.post('/api/submit-application', upload.single('cv'), async (req, res) => {
  try {
    // req.file ще съдържа информация за качения файл
    // req.body ще съдържа другите текстови полета (fullName, phone)
    console.log('Получени данни:', req.body);
    console.log('Получен файл:', req.file);

    if (!req.file) {
       return res.status(400).json({ message: 'Моля, прикачете CV файл.' });
    }

    // >>>>>>> ТУК ДОБАВЯТЕ СВОЯТА ЛОГИКА <<<<<<<
    // - Запазване на информацията в база данни
    // - Изпращане на имейл до HR отдела с данните и файла
    // - Преместване на файла на постоянно място

    // Пример: Просто потвърждение
    // Файлът вече е записан в uploads/ и може да бъде намерен с req.file.path
    res.status(200).json({ message: 'Кандидатурата ви беше изпратена успешно!' });
    // >>>>>>> КРАЙ НА ЛОГИКАТА ВИ <<<<<<<

  } catch (error: any) {
    console.error('Грешка при обработка на кандидатурата:', error);
    // Ако грешката е от Multer (напр. грешен тип файл), съобщението ще е по-подробно
    const errorMessage = error.message || 'Възникна грешка при изпращането на кандидатурата. Моля, опитайте отново.';
    res.status(500).json({ message: errorMessage });
  }
});
// >>>>>>> КРАЙ НА ДОБАВЕНИЯ МАРШРУТ <<<<<<<

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    // Не хвърляйте грешката отново тук, това може да спре сървъра
    // throw err;
    console.error(err); // Логваме я вместо това
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
