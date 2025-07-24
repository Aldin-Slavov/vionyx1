import { ArrowLeft, Download } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function MinorsDeclaration() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-vionyx-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="outline" className="mb-8 border-vionyx-blue text-vionyx-blue hover:bg-vionyx-blue hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Обратно към началото
            </Button>
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-vionyx-blue mb-4">Декларация за непълнолетни</h1>
            <p className="text-xl text-gray-600">Нашето ангажиране за защита на правата на децата</p>
          </div>

          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Vionyx се ангажира да спазва всички приложими закони и разпоредби относно работата с непълнолетни лица. Нашата компания поддържа строги политики за защита на децата и младите хора.
                </p>
                
                <h2 className="text-2xl font-semibold text-vionyx-blue mb-4">Основни принципи:</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8">
                  <li>Нулева толерантност към каквато и да е форма на злоупотреба с деца</li>
                  <li>Задължително обучение на персонала за работа с непълнолетни</li>
                  <li>Строги процедури за проверка на служителите</li>
                  <li>Спазване на всички национални и международни стандарти</li>
                  <li>Регулярни одити и проверки на процедурите</li>
                  <li>Прозрачна система за докладване на инциденти</li>
                </ul>

                <h2 className="text-2xl font-semibold text-vionyx-blue mb-4">Процедури за защита:</h2>
                <div className="text-gray-700 mb-8">
                  <p className="mb-4">
                    Всички наши служители преминават задълбочена проверка преди назначаване, включително:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Проверка на криминалните досиета</li>
                    <li>Референции от предишни работодатели</li>
                    <li>Психологическа оценка</li>
                    <li>Специализирано обучение за работа с деца</li>
                  </ul>
                </div>

                <Card className="bg-vionyx-light rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-vionyx-blue mb-3 text-lg">⚠️ Важна информация:</h3>
                  <p className="text-gray-700 mb-4">
                    Ако имате опасения относно поведението на някой от нашите служители или искате да докладвате инцидент, моля свържете се с нас незабавно:
                  </p>
                  <div className="bg-white rounded p-4">
                    <p className="text-gray-700 mb-2">
                      📞 <span className="font-semibold">Телефон за спешни случаи:</span> +359 2 XXX XXXX
                    </p>
                    <p className="text-gray-700 mb-2">
                      ✉️ <span className="font-semibold">Email за докладване:</span> compliance@vionyx.bg
                    </p>
                    <p className="text-gray-700">
                      📋 <span className="font-semibold">Онлайн форма:</span> Достъпна 24/7 на нашия уебсайт
                    </p>
                  </div>
                </Card>

                <h2 className="text-2xl font-semibold text-vionyx-blue mb-4">Обучение и сертификация:</h2>
                <p className="text-gray-700 mb-6">
                  Нашият персонал редовно участва в специализирани курсове за:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                  <li>Разпознаване на признаци за злоупотреба</li>
                  <li>Подходящо взаимодействие с деца</li>
                  <li>Процедури за докладване</li>
                  <li>Правни изисквания и отговорности</li>
                  <li>Кризисна интервенция</li>
                </ul>

                <h2 className="text-2xl font-semibold text-vionyx-blue mb-4">Нашите ангажименти:</h2>
                <div className="bg-white border-l-4 border-vionyx-accent p-6 mb-8">
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Пълна прозрачност в нашите процедури</li>
                    <li>Бърза и ефективна реакция при всяко съобщение</li>
                    <li>Сътрудничество с всички компетентни органи</li>
                    <li>Непрекъснато подобряване на нашите политики</li>
                    <li>Редовни проверки и одити</li>
                  </ul>
                </div>

                <div className="text-center">
                  <Button className="bg-vionyx-accent hover:bg-blue-700 text-white px-8 py-3 text-lg">
                    <Download className="mr-2 h-5 w-5" />
                    Изтеглете пълната декларация (PDF)
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">
                    Последно актуализирано: Декември 2024
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
