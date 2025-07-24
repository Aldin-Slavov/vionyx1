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
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-vionyx-blue mb-4">ДЕКЛАРАЦИЯ</h2>
                  <p className="text-lg text-gray-600">
                    Във връзка с чл. 8, ал. 3 и ал. 4 от Закона за закрила на детето
                  </p>
                </div>

                <div className="bg-vionyx-light rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-vionyx-blue mb-4 text-lg">Образец на декларация за масови мероприятия</h3>
                  <div className="bg-white rounded p-6 font-mono text-sm leading-relaxed">
                    <p className="mb-4">
                      Долуподписаният/ ................................................... та<br/>
                      <span className="text-xs text-gray-500">/име, презиме, фамилия/</span>
                    </p>
                    <p className="mb-4">
                      адрес: ................................................................<br/>
                      ЕГН ......................................, тел.…………………………………………
                    </p>
                    
                    <p className="mb-4 font-semibold">Декларирам, че съм:</p>
                    <ul className="list-none mb-4 pl-4">
                      <li>❖ родител,</li>
                      <li>❖ настойник,</li>
                      <li>❖ попечител,</li>
                      <li>❖ друго лице, което полага грижи,</li>
                      <li>❖ придружител - пълнолетно дееспособно лице,</li>
                    </ul>
                    
                    <p className="mb-4">
                      и като такъв нося пълна отговорност за малолетното/непълнолетното лице:<br/>
                      ................................................................<br/>
                      <span className="text-xs text-gray-500">/име, презиме, фамилия/</span><br/>
                      ЕГН: ............................
                    </p>
                    
                    <p className="mb-6">
                      По време на масово мероприятие:<br/>
                      ……………………………………………………………………………………….
                    </p>
                    
                    <p className="mb-6">
                      Съгласен съм личните ми данни да бъдат ползвани за нуждите на настоящата декларация.
                    </p>
                    
                    <div className="flex justify-between items-end">
                      <div>
                        <p>Декларатор: …………..........</p>
                        <p className="text-xs">(подпис)</p>
                      </div>
                      <div className="text-right">
                        <p>гр. ………………..</p>
                        <p>дата ……/ ……/ ........... г.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="bg-blue-50 border-l-4 border-vionyx-blue p-6 mb-6">
                  <h3 className="font-semibold text-vionyx-blue mb-3 text-lg">📋 Кога се използва декларацията:</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• При масови мероприятия с участие на непълнолетни</li>
                    <li>• Когато родителят не може да придружи детето</li>
                    <li>• За деца под 18 години на обществени места след 22:00 ч.</li>
                    <li>• За деца под 14 години на обществени места след 20:00 ч.</li>
                  </ul>
                </Card>

                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-vionyx-blue mb-4">Правна основа - Закон за закрила на детето</h3>
                  <div className="text-sm text-gray-700 space-y-3">
                    <p>
                      <strong>Чл. 8, ал. 3:</strong> Родителите, настойниците, попечителите или другите лица, които полагат грижи за дете, са длъжни да го придружават на обществени места след 20,00 ч., ако детето не е навършило 14-годишна възраст, съответно след 22,00 ч., ако детето е навършило 14-, но не е навършило 18-годишна възраст.
                    </p>
                    <p>
                      <strong>Чл. 8, ал. 4:</strong> Ако родителите, попечителите или другите лица, които полагат грижи за дете, не могат да го придружат, те са длъжни да осигурят пълнолетно дееспособно лице за негов придружител на обществени места след 22,00 ч., ако детето е навършило 14-, но не е навършило 18-годишна възраст.
                    </p>
                  </div>
                </div>

                <Card className="bg-vionyx-light rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-vionyx-blue mb-3 text-lg">⚠️ Важна информация:</h3>
                  <p className="text-gray-700 mb-4">
                    За въпроси относно декларацията или при необходимост от консултация, моля свържете се с нас:
                  </p>
                  <div className="bg-white rounded p-4">
                    <p className="text-gray-700 mb-2">
                      📞 <span className="font-semibold">Телефон:</span> +359 89 566 2600
                    </p>
                    <p className="text-gray-700 mb-2">
                      ✉️ <span className="font-semibold">Email:</span> info@vionyx.bg
                    </p>
                    <p className="text-gray-700">
                      🕐 <span className="font-semibold">Работно време:</span> Понеделник - Петък: 8:00 - 18:00
                    </p>
                  </div>
                </Card>

                <div className="text-center">
                  <a 
                    href="/api/download/minors-declaration" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-vionyx-accent hover:bg-blue-700 text-white px-8 py-3 text-lg">
                      <Download className="mr-2 h-5 w-5" />
                      Изтеглете декларацията (DOC)
                    </Button>
                  </a>
                  <p className="text-sm text-gray-500 mt-2">
                    Последно актуализирано: Януари 2025
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
