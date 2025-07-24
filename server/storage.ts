import { type User, type InsertUser, type Service, type InsertService, type Client, type InsertClient, type ContactRequest, type InsertContactRequest } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getServices(): Promise<Service[]>;
  getService(slug: string): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  
  getClients(): Promise<Client[]>;
  createClient(client: InsertClient): Promise<Client>;
  
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private services: Map<string, Service>;
  private clients: Map<string, Client>;
  private contactRequests: Map<string, ContactRequest>;

  constructor() {
    this.users = new Map();
    this.services = new Map();
    this.clients = new Map();
    this.contactRequests = new Map();
    
    // Initialize with default services
    this.initializeServices();
    this.initializeClients();
  }

  private initializeServices() {
    const defaultServices: Service[] = [
      {
        id: randomUUID(),
        title: "Охрана на мероприятия",
        description: "Професионална охрана за корпоративни събития, конференции, изложения, концерти и спортни мероприятия.",
        icon: "fas fa-calendar-alt",
        image: "https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
        priceFrom: 25,
        priceUnit: "лв./час",
        slug: "okhrana-na-meropriyatia",
        fullDescription: "Нашите лицензирани охранители осигуряват пълна сигурност за всички видове мероприятия. Разполагаме с лиценз за охрана на масови мероприятия и опитен екип за управление на тълпи.",
        features: ["24/7 наблюдение", "Контрол на достъпа", "Управление на тълпи", "Координация със служби", "Дискретна охрана", "Стюардинг услуги"],
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Охрана на имуществото на физически и юридически лица",
        description: "Цялостна охрана на жилищни и бизнес имоти с денонощно наблюдение и контрол на достъпа.",
        icon: "fas fa-shield-alt",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
        priceFrom: 1200,
        priceUnit: "лв./месец",
        slug: "okhrana-na-imushtestvo",
        fullDescription: "Осигуряваме комплексна охрана на частно и корпоративно имущество. Нашите услуги са лицензирани съгласно Закона за частната охранителна дейност и включват физическа охрана и технически средства.",
        features: ["Денонощна физическа охрана", "Видеонаблюдение", "Контрол на достъпа", "Алармени системи", "Патрулиране", "Обходи и проверки"],
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Сигнално-охранителна дейност",
        description: "Професионални системи за сигнализация, мониторинг и бързо реагиране при тревога.",
        icon: "fas fa-bell",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
        priceFrom: 45,
        priceUnit: "лв./месец",
        slug: "signalno-okhranitelna-deynost",
        fullDescription: "Предлагаме лицензирани сигнално-охранителни услуги с модерни системи за наблюдение и бързо реагиране. Всички системи се обслужват от лицензиран персонал.",
        features: ["Алармени системи", "24/7 мониторинг", "Бърза интервенция", "GSM/IP връзка", "Резервно захранване", "Мобилни екипи"],
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Охрана на обекти – недвижими имоти",
        description: "Специализирана охрана на жилищни комплекси, офис сгради, търговски центрове и промишлени обекти.",
        icon: "fas fa-building",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
        priceFrom: 800,
        priceUnit: "лв./месец",
        slug: "okhrana-na-obekti-nedvizhimi",
        fullDescription: "Осигуряваме надеждна охрана на недвижими имоти чрез комбинация от физическа охрана и модерни технологии. Разполагаме със специален лиценз за охрана на недвижими имоти.",
        features: ["Физическа охрана", "CCTV системи", "Периметрова защита", "Проверки на обекта", "Бързо реагиране", "Докладване"],
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Охрана на селскостопанско имущество",
        description: "Специализирана охрана на земеделски земи, складове, машини и селскостопанска продукция.",
        icon: "fas fa-tractor",
        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
        priceFrom: 600,
        priceUnit: "лв./месец",
        slug: "okhrana-na-selskostopansko-imushtestvo",
        fullDescription: "Предлагаме специализирани услуги за охрана на селскостопански обекти и продукция. Нашият екип е обучен за специфичните нужди на земеделския сектор.",
        features: ["Охрана на складове", "Защита на машини", "Периметрова охрана", "Мобилни патрули", "Сезонна охрана", "Наблюдение на реколта"],
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Стюардинг и контрол билети",
        description: "Професионални стюардинг услуги за спортни и културни мероприятия с контрол на билети и управление на публиката.",
        icon: "fas fa-ticket-alt",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
        priceFrom: 20,
        priceUnit: "лв./час",
        slug: "styuarding-kontrol-bileti",
        fullDescription: "Осигуряваме професионални стюарди за спортни мачове, концерти и други масови мероприятия. Нашият персонал е специално обучен за работа с публика и контрол на билети.",
        features: ["Контрол на билети", "Управление на публика", "Информационни услуги", "Координация с организатори", "Обучен персонал", "Униформи и екипировка"],
        createdAt: new Date(),
      },
    ];

    defaultServices.forEach(service => {
      this.services.set(service.slug, service);
    });
  }

  private initializeClients() {
    const defaultClients: Client[] = [
      {
        id: randomUUID(),
        name: "128 СУ \"Алберт Айнщайн\"",
        logo: null,
        testimonial: "Vionyx осигурява надеждна охрана за нашето училище. Професионален екип, който гарантира безопасност на учениците и персонала.",
        contactPerson: "Мария Димитрова",
        position: "Директор",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "\"АРТВЕНТ\" ООД",
        logo: null,
        testimonial: "Отлична организация на охраната за нашите културни събития. Дискретни, професионални и винаги навременни.",
        contactPerson: "Петър Георгиев",
        position: "Изпълнителен директор",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "НЧ \"Светлина 1940\"",
        logo: null,
        testimonial: "Благодарение на Vionyx нашите мероприятия са във безопасни ръце. Препоръчваме ги с пълно доверие.",
        contactPerson: "Анна Стойкова",
        position: "Председател",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Младежки спортен клуб \"Пазарджик спортува\"",
        logo: null,
        testimonial: "Превъзходна охрана на спортните ни събития. Екипът на Vionyx е професионален и отзивчив към нашите нужди.",
        contactPerson: "Георги Петров",
        position: "Ръководител",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "ТЕАТРАЛНО - МУЗИКАЛЕН ПРОДУЦЕНТСКИ ЦЕНТЪР ВАРНА",
        logo: null,
        testimonial: "Работим с Vionyx за охрана на театралните и музикалните ни постановки. Отличо качество на услугите.",
        contactPerson: "Елена Василева",
        position: "Художествен директор",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "ДЕЛОЙТ БЪЛГАРИЯ ЕООД",
        logo: null,
        testimonial: "Vionyx предоставя висококачествени корпоративни охранителни услуги. Професионализъм на най-високо ниво.",
        contactPerson: "Стефан Михайлов",
        position: "Управляващ партньор",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "SB TECHNOLOGIES INC",
        logo: null,
        testimonial: "Надеждният партньор за нашите технологични обекти. Модерни решения и отлично изпълнение.",
        contactPerson: "Александър Иванов",
        position: "Генерален мениджър",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Фондация \"Метаарт\"",
        logo: null,
        testimonial: "Благодарни сме на Vionyx за професионалната охрана на нашите изложби и културни събития.",
        contactPerson: "Мария Тодорова",
        position: "Изпълнителен директор",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Флешбоун ЕООД",
        logo: null,
        testimonial: "Отлична сигурност и дискретна охрана за нашите бизнес обекти. Препоръчваме Vionyx безрезервно.",
        contactPerson: "Николай Русев",
        position: "Собственик",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "ИНСТИТУТ ПО ОБРАЗОВАНИЕТО",
        logo: null,
        testimonial: "Vionyx осигурява сигурна среда за нашите образователни дейности. Професионален и отговорен екип.",
        contactPerson: "Проф. Виолета Николова",
        position: "Директор",
        createdAt: new Date(),
      },
    ];

    defaultClients.forEach(client => {
      this.clients.set(client.id, client);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async getService(slug: string): Promise<Service | undefined> {
    return this.services.get(slug);
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = randomUUID();
    const service: Service = { 
      ...insertService, 
      id, 
      createdAt: new Date(),
      fullDescription: insertService.fullDescription || null,
      features: insertService.features || null
    };
    this.services.set(service.slug, service);
    return service;
  }

  async getClients(): Promise<Client[]> {
    return Array.from(this.clients.values());
  }

  async createClient(insertClient: InsertClient): Promise<Client> {
    const id = randomUUID();
    const client: Client = { 
      ...insertClient, 
      id, 
      createdAt: new Date(),
      logo: insertClient.logo || null,
      testimonial: insertClient.testimonial || null,
      contactPerson: insertClient.contactPerson || null,
      position: insertClient.position || null
    };
    this.clients.set(id, client);
    return client;
  }

  async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = randomUUID();
    const request: ContactRequest = { 
      ...insertRequest, 
      id, 
      createdAt: new Date() 
    };
    this.contactRequests.set(id, request);
    return request;
  }
}

export const storage = new MemStorage();
