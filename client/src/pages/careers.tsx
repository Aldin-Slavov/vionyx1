// src/pages/Careers.tsx или src/components/Careers.tsx
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext'; // Адаптирайте пътя ако е нужно
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Careers() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    cv: null as File | null, // По-точен тип за файла
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Типизация на event
    const { name, value, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => { // Типизация на event
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('phone', formData.phone);
    if (formData.cv) {
      data.append('cv', formData.cv);
    }

    try {
      // TODO: Заменете URL-а с вашия реален endpoint за обработка на формата
      const response = await fetch('/api/submit-application', {
         method: 'POST',
         body: data,
         // Не добавяйте Content-Type header при изпращане на FormData,
         // браузърът автоматично го задава правилно, включително boundary.
         // headers: {
         //   'Content-Type': 'multipart/form-data', // Премахнато
         // },
      });

      if (response.ok) {
        setSubmitMessage(t('careers.submitSuccess') as string); // Уверяваме TypeScript, че е string
        setFormData({ fullName: '', phone: '', cv: null }); // Нулиране на формата
      } else {
         const errorData = await response.json().catch(() => ({}));
         // Предоставяме резервен текст, ако errorData.message липсва или не е string
         const message = typeof errorData.message === 'string' ? errorData.message : '';
         throw new Error(message || (t('careers.submitError') as string)); // Уверяваме TypeScript, че е string
      }
    } catch (error: unknown) { // Изрично типизиране на error
       console.error("Грешка при изпращане:", error);
       let errorMessage = '';

       // Проверка дали error е инстанция на Error
       if (error instanceof Error) {
         errorMessage = error.message; // Сигурно е, че има .message
       } else if (typeof error === 'string') {
         // Ако по някаква причина е просто стринг
         errorMessage = error;
       } else {
         // За всички останали случаи, използваме преведеното съобщение за грешка
         errorMessage = t('careers.submitError') as string; // Уверяваме TypeScript, че е string
       }

       setSubmitMessage(errorMessage); // errorMessage вече е string
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-vionyx-blue mb-6">{t('careers.title')}</h1>
      <p className="text-gray-700 mb-8">{t('careers.description')}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            {t('careers.fullName')}
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-vionyx-blue focus:border-vionyx-blue"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            {t('careers.phone')}
          </label>
          <input
            type="tel" // Използване на 'tel' за телефонни номера
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-vionyx-blue focus:border-vionyx-blue"
          />
        </div>

        <div>
          <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
            {t('careers.cv')}
          </label>
          <input
            type="file"
            id="cv"
            name="cv"
            accept=".pdf,.doc,.docx" // Ограничаване на типовете файлове
            onChange={handleChange}
            required
            className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-vionyx-blue file:text-white
                      hover:file:bg-blue-700"
          />
          <p className="mt-1 text-xs text-gray-500">{t('careers.cvHint')}</p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-vionyx-blue text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vionyx-blue ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? t('careers.submitting') : t('careers.submit')}
        </button>
      </form>

      {submitMessage && (
        <div className={`mt-4 p-4 rounded-md ${submitMessage.includes(t('careers.submitError') as string) ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {submitMessage}
        </div>
      )}

      {/* Преведен бутон "Обратно към началото" */}
      <div className="mt-8">
        <Link href="/">
          <Button
            variant="outline"
            className="border-vionyx-blue text-vionyx-blue hover:bg-vionyx-blue hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('common.back')} {/* Използване на превода */}
          </Button>
        </Link>
      </div>
    </div>
  );
}