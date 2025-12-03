// src/contexts/LanguageContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'bg' | 'en';

// АКТУАЛИЗИРАН ИНТЕРФЕЙС ЗА ПРЕВОДИТЕ
interface Translations {
  nav: {
    home: string;
    services: string;
    pricing: string;
    about: string;
    contact: string;
    minorsDeclaration: string;
  };
  hero: {
    title: string;
    subtitle: string;
    contactUs: string;
    learnMore: string;
  };
  services: {
    title: string;
    subtitle: string;
    learnMore: string;
    eventSecurity: string;
    propertySecurity: string;
    alarmSecurity: string;
    realEstateSecurity: string;
    agriculturalSecurity: string;
    stewarding: string;
  };
  about: {
    title: string;
    subtitle: string;
    experience: string;
    clients: string;
    projects: string;
    team: string;
    whyChooseUs: string;
    professional: string;
    professionalDesc: string;
    reliable: string;
    reliableDesc: string;
    available: string;
    availableDesc: string;
    licensed: string;
    licensedDesc: string;
    aboutVionyx: string;
    description: string; // Кратко описание
    successfulProjects: string;
    trainedGuards: string;
    service247: string;
    // >>>>>>> ДОБАВЕНИ ПОЛЕТА ЗА ПОДРОБНО ПРЕДСТАВЯНЕ <<<<<<<
    fullDescription: string; // Подробно описание на фирмата
    missionTitle: string;
    missionStatement: string;
    whatWeOfferTitle: string;
    whatWeOfferList: string[]; // Списък с услуги
    whyChooseUsTitle: string;
    whyChooseUsList: string[]; // Списък с причини
    ourClientsTitle: string;
    ourClientsList: string[]; // Списък с клиенти
    contactInfo: {
      // Информация за контакт, включена в представянето
      phone: string;
      email: string;
      website: string;
      address: string;
    };
    // >>>>>>> КРАЙ НА ДОБАВЕНИТЕ ПОЛЕТА <<<<<<<
  };
  contact: {
    title: string;
    subtitle: string;
    info: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    mondayFriday: string;
    emergency: string;
    followUs: string;
    requestQuote: string;
    firstName: string;
    lastName: string;
    service: string;
    message: string;
    selectService: string;
    submit: string;
    sending: string;
    success: string;
    successMessage: string;
    error: string;
    errorMessage: string;
    firstNamePlaceholder: string;
    lastNamePlaceholder: string;
    messagePlaceholder: string;
    validation: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      service: string;
      message: string;
    };
  };
  footer: {
    description: string;
    services: string;
    company: string;
    aboutUs: string;
    team: string;
    licenses: string;
    careers: string; // >>>>>>> ДОБАВЕНО <<<<<<<
    contacts: string;
    privacy: string;
    terms: string;
    cookies: string;
    rights: string;
  };
  // >>>>>>> ДОБАВЕН ТИП ЗА КАРИЕРИ <<<<<<<
  careers: {
    title: string;
    description: string;
    fullName: string;
    phone: string;
    cv: string;
    cvHint: string;
    submit: string;
    submitting: string;
    submitSuccess: string;
    submitError: string;
  };
  // >>>>>>> КРАЙ НА ДОБАВЕНИТЕ ТИПОВЕ ЗА КАРИЕРИ <<<<<<<
  common: {
    loading: string;
    error: string;
    retry: string;
    back: string;
    next: string;
    previous: string;
    close: string;
    open: string;
    save: string;
    cancel: string;
    confirm: string;
  };
  serviceDetail: {
    notFound: string;
    notFoundMessage: string;
    backToServices: string;
    backToHome: string;
    detailedDescription: string;
    includedServices: string;
    requestQuote: string;
    priceFrom: string;
    requestConsultation: string;
    callUs: string;
    sendEmail: string;
  };
  servicePricing: {
    title: string;
    subtitle: string;
    note: string;
    from: string;
    includes: string;
    moreServices: string;
    details: string;
    personalizedQuote: string;
    personalizedQuoteDesc: string;
    callUs: string;
    sendEmail: string;
    workingHours: string;
    responseTime: string;
    // >>>>>>> ДОБАВЕНИ ПОЛЕТА ЗА РЕФЕРЕНЦИИ <<<<<<<
    references: {
      bgtsk: string;
      loshomie: string;
      school128: string;
      neweventic: string; // <<< Новият ключ за Ню Ивентик
      // Можете да добавите още, ако има описания
    };
    // >>>>>>> КРАЙ НА ДОБАВЕНИТЕ ПОЛЕТА ЗА РЕФЕРЕНЦИИ <<<<<<<
  };
}

// АКТУАЛИЗИРАН ОБЕКТ С ПРЕВОДИТЕ
const translations: Record<Language, Translations> = {
  bg: {
    nav: {
      home: 'Начало',
      services: 'Услуги',
      pricing: 'Референции', // <<< Променено от 'Цени'
      about: 'За нас',
      contact: 'Контакти',
      minorsDeclaration: 'Декларация за непълнолетни'
    },
    hero: {
      title: 'Професионални охранителни услуги',
      subtitle: 'Доверие, сигурност и качество за вашия бизнес и мероприятия',
      contactUs: 'Свържете се с нас',
      learnMore: 'Научете повече'
    },
    services: {
      title: 'Нашите услуги',
      subtitle: 'Предлагаме широка гама от професионални охранителни услуги, адаптирани към вашите специфични нужди',
      learnMore: 'Научете повече',
      eventSecurity: 'Охрана на мероприятия',
      propertySecurity: 'Охрана на имуществото на физически и юридически лица',
      alarmSecurity: 'Сигнално-охранителна дейност',
      realEstateSecurity: 'Охрана на обекти – недвижими имоти',
      agriculturalSecurity: 'Охрана на селскостопанско имущество',
      stewarding: 'Стюардинг и контрол билети'
    },
    about: {
      title: 'За нас',
      subtitle: 'Vionyx е водеща компания в областта на охранителните услуги с дългогодишен опит и безупречна репутация',
      experience: 'години опит',
      clients: 'доволни клиенти',
      projects: 'успешни проекта',
      team: 'членен екип',
      whyChooseUs: 'Защо да изберете нас?',
      professional: 'Професионализъм',
      professionalDesc: 'Нашият екип се състои от висококвалифицирани специалисти с богат опит в сферата на сигурността',
      reliable: 'Надеждност',
      reliableDesc: 'Осигуряваме 24/7 покритие и бърза реакция при всякакви ситуации',
      available: 'Достъпност',
      availableDesc: 'Винаги сме на разположение за консултации и спешни случаи',
      licensed: 'Лицензирани',
      licensedDesc: 'Притежаваме всички необходими лицензи и сертификати за извършване на охранителна дейност',
      aboutVionyx: 'За Vionyx',
      description: 'Vionyx e водеща охранителна компания с опит в предоставянето на професионални услуги за сигурност. Нашият екип от сертифицирани специалисти осигурява надеждна защита за широк спектър от клиенти.',
      successfulProjects: 'Успешни проекта',
      trainedGuards: 'Обучени охранители',
      service247: 'Денонощно обслужване',
      // >>>>>>> ДОБАВЕНИ ПРЕВОДИ ОТ БЪЛГАРСКИЯ DOCX <<<<<<<
      fullDescription: `Охранителна фирма „ ВИОНИКС “ ЕООД е лицензирана компания, специализирана в предоставянето на висококачествени охранителни услуги на физически и юридически лица. Ние изграждаме дългосрочни партньорства, основани на доверие, професионализъм и резултати в областта на сигурността.\nДружеството е юридическо лице, регистрирано в Агенция по вписванията и по ЗДДС. ЕИК 200 264 824.\n\nУправител и собственик на Компанията\nг-н Серьожа Александров Савов\nСерьожа Савов е с 30-годишен опит в частния бизнес за охрана и сигурност. Преминал е през всичките стъпала в йерархията на частната охранителна дейност:\n- Охранителен работник\n- Оперативен дежурен\n- Началник охранителна дейност\n- Изпълнителен директор\n- Съдружник в дружество за охрана\n- Управител и едноличен собственик на дружество за сигурност и охрана.\nКариерата му е преминала през:\nДирекцията за сигурност и охрана на „Елит Банк“ АД, „Елитком“ АД, „Ин-80“ ЕООД, „Компас секюрити“ ЕООД, „Секюрити СКС“ ООД.\nЗавършил НШЗО „Христо Ботев“ – град Плевен, служил в поделение 72 738-Б-МВР, о.з. с тарши лейтенант.\nОрганизирал и отговарял за охраната на:\nОбекти:\n- Училища и детски градини\n- Административни сгради\n- Увеселителни заведения\n- „Зимен дворец на спорта“\n- ИПК „Родина“\n- Завод за сокове „ВВВ“\n- „Fe dE x“ – България – логистични бази\n- Министерство на труда и социалната политика\n- Институт по образованието\nМероприятия:\n- „Каварна рок фест“, „Фестивал на цветовете“, „Аз обичам 90-те“, „Фестивал Meadows In the Mountains“, „София филм фест“, „София Метъл Фест“, „Спирит ъф Бургас“ и много други.\nРаботил е по сигурността и охраната на групи и изпълнители, като:\n- Дийп Пърпъл, Продиджи, Меноуър, Тестамент, Сабатон, Хелоуин, Туистед Систър, Алис Купър, Слейър, Ин Флеймс, Мотл и Кр ю, Скорпиънс, Блайнд Гардиън, Едгай, Дрийм Тиътър, Таря Турунен, Криейтър, Содом, Дистръкшън, Аксепт, Парадайс Лост, Соната Арктика, Арч Енеми, Юръп, Кошийн, Ейжън Дъб Фондейшън, Крейдъл ъф Филт, Систърс ъф Мърси, Фейт Ноу Мор, Фън Ловин Криминълс, Моби, Корн, Армин ван Бюрен, Заз, Графа, Имаджин Драгънс и много други.\nИзвършвал е оценка на риска, планирал и контролирал охраната и сигурността на много места за провеждане на масови мероприятия, като:\n- Зала „Христо Ботев“, зала „Зимен дворец на спорта“, зала „Универсиада“, зала „Фестивална“, зала „Арена – Армеец“, арена „София“ – Колодрум, стадион „Българска армия“, стадион „Академик“, Централен плаж - Бургас, стадион „Калиакра“ – Каварна, зала „Колодрум“ – Пловдив, стадион „Христо Ботев“ - Пловдив, стадион „Васил Левски“ и много други.`,
      missionTitle: 'Нашата мисия',
      missionStatement: '„Вашата сигурност е нашата мисия“\nНашата мисия е да осигурим спокойствие, безопасност и защита за нашите клиенти чрез модерни технологии, обучен персонал и индивидуален подход към всяка ситуация.',
      whatWeOfferTitle: 'Какво предлагаме',
      whatWeOfferList: [
        'Физическа охрана на обекти на физически и юридически лица – офиси, магазини, жилищни сгради, складове и т.н.',
        'Охрана на мероприятия – концерти, спортни събития, конференции, частни тържества.',
        'Сигнално-охранителна дейност, видеонаблюдение и контрол на достъпа – проектиране, инсталация и поддръжка.',
        'Мониторинг и реакция – денонощно. Бързи мобилни екипи за реакция.',
        'Охрана на обекти – недвижими имоти – питейни и увеселителни заведения.',
        'Охрана на селскостопанско имущество.'
      ],
      whyChooseUsTitle: 'Защо да изберете нас',
      whyChooseUsList: [
        'Лицензирана дейност от МВР – Национален лиценз за извършване на частна охранителна дейност № 3/02-986',
        'Обучен и сертифициран персонал',
        'Денонощна комуникация, поддръжка и контрол',
        'Иновативни системи за сигурност',
        'Гъвкавост и индивидуални решения според нуждите на клиента'
      ],
      ourClientsTitle: 'Нашите клиенти',
      ourClientsList: [
        'Институт по образованието',
        '„Ауто Вагнер България“ ООД',
        '„Частно средно училище „Професор Николай Райнов"',
        '128 СУ "Алберт Айнщайн"',
        '„АРТВЕНТ” ООД',
        'НЧ "Светлина 1940"',
        'Младежки спортен клуб „Пазарджик спортува”',
        'ТЕАТРАЛНО - МУЗИКАЛЕН ПРОДУЦЕНТСКИ ЦЕНТЪР ВАРНА',
        'ДЕЛОЙТ БЪЛГАРИЯ ЕООД',
        'SB TECHNOLOGIES INC',
        'Фондация „Метаарт”',
        '„Флешбоун“ ЕООД',
        '„ФАНТАСТИКО ГРУП“ ООД',
        '„БИ ДЖИ ТИ ЕС СИ ГРУП“ ЕООД',
        '„Ти Ди Би Плей“ ЕООД',
        'Фондация „Нашият дом е България“',
        '“НЮ ИВЕНТИК АВЕНТУРА“ ЕООД',
        'и много други.'
      ],
      contactInfo: {
        phone: '+359 895 66 26 00',
        email: 'savov@vionyx.eu',
        website: 'https://vionyx.eu/',
        address: 'България, София, р-н Искър, ж.к. Дружба, бл. 44, вх. В, ет. 1, ап. 38'
      }
      // >>>>>>> КРАЙ НА ДОБАВЕНИТЕ ПРЕВОДИ (BG) <<<<<<<
    },
    contact: {
      title: 'Свържете се с нас',
      subtitle: 'Готови сме да обсъдим вашите нужди от охрана',
      info: 'Контактна информация',
      address: 'Адрес',
      phone: 'Телефон',
      email: 'Email',
      hours: 'Работно време',
      mondayFriday: 'Понеделник - Петък: 8:00 - 18:00',
      emergency: 'Спешни случаи: 24/7',
      followUs: 'Следвайте ни',
      requestQuote: 'Заявете оферта',
      firstName: 'Име',
      lastName: 'Фамилия',
      service: 'Услуга',
      message: 'Съобщение',
      selectService: 'Изберете услуга',
      submit: 'Изпратете заявката',
      sending: 'Изпращане...',
      success: 'Успех!',
      successMessage: 'Вашата заявка беше изпратена успешно. Ще се свържем с вас скоро.',
      error: 'Грешка',
      errorMessage: 'Възникна грешка при изпращането на заявката. Моля опитайте отново.',
      firstNamePlaceholder: 'Вашето име',
      lastNamePlaceholder: 'Вашата фамилия',
      messagePlaceholder: 'Опишете вашите нужди...',
      validation: {
        firstName: 'Името трябва да съдържа поне 2 символа',
        lastName: 'Фамилията трябва да съдържа поне 2 символа',
        email: 'Невалиден имейл адрес',
        phone: 'Телефонният номер трябва да съдържа поне 10 цифри',
        service: 'Моля изберете услуга',
        message: 'Съобщението трябва да съдържа поне 10 символа'
      }
    },
    footer: {
      description: 'Професионални охранителни услуги с най-високи стандарти за качество и сигурност.',
      services: 'Услуги',
      company: 'Компания',
      aboutUs: 'За нас',
      team: 'Нашият екип',
      licenses: 'Лицензи',
      careers: 'Кариери', // >>>>>>> ДОБАВЕНО <<<<<<<
      contacts: 'Контакти',
      privacy: 'Политика за поверителност',
      terms: 'Условия за ползване',
      cookies: 'Cookies',
      rights: '© 2025 Vionyx. Всички права запазени.'
    },
    // >>>>>>> ДОБАВЕНИ ПРЕВОДИ ЗА КАРИЕРИ (BG) <<<<<<<
    careers: {
      title: 'Кариери',
      description: 'Присъединете се към нашия екип! Изпратете ни вашата кандидатура.',
      fullName: 'Три имена',
      phone: 'Телефон за контакт',
      cv: 'Автобиография (CV)',
      cvHint: 'Прикачете файл в PDF, DOC или DOCX формат.',
      submit: 'Изпрати кандидатура',
      submitting: 'Изпращане...',
      submitSuccess: 'Вашата кандидатура беше изпратена успешно! Ще се свържем с вас скоро.',
      submitError: 'Възникна грешка при изпращането на кандидатурата. Моля, опитайте отново.'
    },
    // >>>>>>> КРАЙ НА ДОБАВЕНИТЕ ПРЕВОДИ ЗА КАРИЕРИ (BG) <<<<<<<
    common: {
      loading: 'Зареждане...',
      error: 'Възникна грешка',
      retry: 'Опитайте отново',
      back: 'Назад',
      next: 'Напред',
      previous: 'Предишен',
      close: 'Затвори',
      open: 'Отвори',
      save: 'Запази',
      cancel: 'Отказ',
      confirm: 'Потвърди'
    },
    serviceDetail: {
      notFound: 'Услугата не е намерена',
      notFoundMessage: 'Заявената услуга не съществува.',
      backToServices: 'Обратно към услугите',
      backToHome: 'Обратно към началото',
      detailedDescription: 'Подробно описание',
      includedServices: 'Включени услуги:',
      requestQuote: 'Заявете оферта',
      priceFrom: 'Цена от:',
      requestConsultation: 'Заявете безплатна консултация',
      callUs: 'Обадете се на:',
      sendEmail: 'Изпратете имейл:'
    },
    servicePricing: {
      title: 'Референции', // <<< Променено от 'Цени и услуги'
      subtitle: 'Професионални референции и препоръки за нашите охранителни услуги',
      note: 'Всички референции са на фирми и организации, с които имаме успешно сътрудничество.',
      from: 'от',
      includes: 'Включва:',
      moreServices: 'още услуги',
      details: 'Подробности',
      personalizedQuote: 'Нужна ви е персонализирана оферта?',
      personalizedQuoteDesc: 'Свържете се с нас за подробна консултация и цена, адаптирана към вашите специфични нужди',
      callUs: 'Обадете се',
      sendEmail: 'Изпратете имейл',
      workingHours: 'Работно време: 8:00 - 18:00',
      responseTime: 'Отговаряме в рамките на 24 часа',
      // >>>>>>> ДОБАВЕНИ ПРЕВОДИ ЗА РЕФЕРЕНЦИИ (BG) <<<<<<<
      references: {
        bgtsk: 'Референция от BGTSC GROUP EOOD.',
        loshomie: 'Референция от Bar Singles (Loshomie Ltd.).',
        school128: 'Референция от 128 СУ "Алберт Айнщайн".',
        // >>>>>>> ДОБАВЕНО <<<<<<<
        neweventic: 'Референция от New Eventic Aventura Ltd.', // <<< Превод на български
        // Добавете още ако е нужно
      },
      // >>>>>>> КРАЙ НА ДОБАВЕНИТЕ ПРЕВОДИ ЗА РЕФЕРЕНЦИИ (BG) <<<<<<<
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      pricing: 'References', // <<< Променено от 'Pricing'
      about: 'About',
      contact: 'Contact',
      minorsDeclaration: 'Minors Declaration'
    },
    hero: {
      title: 'Professional Security Services',
      subtitle: 'Trust, security and quality for your business and events',
      contactUs: 'Contact Us',
      learnMore: 'Learn More'
    },
    services: {
      title: 'Our Services',
      subtitle: 'We offer a wide range of professional security services tailored to your specific needs',
      learnMore: 'Learn more',
      eventSecurity: 'Event Security',
      propertySecurity: 'Property Security for Individuals and Companies',
      alarmSecurity: 'Alarm and Security Services',
      realEstateSecurity: 'Real Estate Security',
      agriculturalSecurity: 'Agricultural Property Security',
      stewarding: 'Stewarding and Ticket Control'
    },
    about: {
      title: 'About Us',
      subtitle: 'Vionyx is a leading company in the field of security services with years of experience and impeccable reputation',
      experience: 'years of experience',
      clients: 'satisfied clients',
      projects: 'successful projects',
      team: 'team members',
      whyChooseUs: 'Why choose us?',
      professional: 'Professionalism',
      professionalDesc: 'Our team consists of highly qualified specialists with extensive experience in the security field',
      reliable: 'Reliability',
      reliableDesc: 'We provide 24/7 coverage and quick response to any situations',
      available: 'Availability',
      availableDesc: 'We are always available for consultations and emergency cases',
      licensed: 'Licensed',
      licensedDesc: 'We possess all necessary licenses and certificates for conducting security activities',
      aboutVionyx: 'About Vionyx',
      description: 'Vionyx is a leading security company with experience in providing professional security services. Our team of certified specialists provides reliable protection for a wide range of clients.',
      successfulProjects: 'Successful Projects',
      trainedGuards: 'Trained Guards',
      service247: '24/7 Service',
      // >>>>>>> ДОБАВЕНИ ПРЕВОДИ ОТ АНГЛИЙСКИЯ DOCX <<<<<<<
      fullDescription: `VIONYX Ltd. is a licensed security company specializing in providing high-quality security services to both individuals and legal entities. We build long-term partnerships based on trust, professionalism, and proven results in the field of security.\nThe company is a legal entity, registered with the Registry Agency and under the VAT Act. Company ID (UIC): 200 264 824.\n\nCompany Owner and Manager\nMr. Seryozha Alexandrov Savov\nSeryozha Savov has over 30 years of experience in the private security business. He has gone through all levels in the private security hierarchy:\n• Security guard\n• Duty operations officer\n• Head of security operations\n• Executive director\n• Partner in a security company\n• Manager and sole owner of a security and safety company\nHis career includes experience at:\n"Elite Bank" AD Security Directorate, " Elitcom " AD, "IN-80" Ltd., "Compass Security" Ltd., "Security SKS" Ltd.\nHe is a graduate of the NCO School "Hristo Botev" – Pleven, and served in Unit 72 738-B – Ministry of Interior, retired as a senior lieutenant.\nHe has organized and managed the security of various:\nSites:\n• Schools and kindergartens\n• Administrative buildings\n• Entertainment venues\n• Winter Sports Palace\n• Rodina Publishing House\n• BBB Juice Factory\n• FedEx Bulgaria – logistics centers\n• Ministry of Labor and Social Policy\n• Institute of Education\nEvents:\n• Kavarna Rock Fest, Festival of Colors, I Love the 90s, Meadows in the Mountains, Sofia Film Fest, Sofia Metal Fest, Spirit of Burgas, and many more\nHe has been responsible for the security of international artists and bands such as:\nDeep Purple, The Prodigy, Manowar, Testament, Sabaton, Helloween, Twisted Sister, Alice Cooper, Slayer, In Flames, Mötley Crüe, Scorpions, Blind Guardian, Edguy, Dream Theater, Tarja Turunen, Kreator, Sodom, Destruction, Accept, Paradise Lost, Sonata Arctica, Arch Enemy, Europe, Kosheen, Asian Dub Foundation, Cradle of Filth, Sisters of Mercy, Faith No More, Fun Lovin’ Criminals, Moby, Korn, Armin van Buuren, Zaz, Grafa, Imagine Dragons, and many more.\nHe has conducted risk assessments, planned and supervised the security of major event venues such as:\n• Hristo Botev Hall\n• Winter Sports Palace\n• Universiada Hall\n• Festivalna Hall\n• Arena Armeec\n• Sofia Arena – Velodrome\n• Bulgarian Army Stadium\n• Akademik Stadium\n• Central Beach – Burgas\n• Kaliakra Stadium – Kavarna\n• Kolodrum Hall – Plovdiv\n• Hristo Botev Stadium – Plovdiv\n• Vasil Levski National Stadium, and many others`,
      missionTitle: 'Our Mission',
      missionStatement: `“Your Security Is Our Mission”\nOur mission is to provide peace of mind, safety, and protection to our clients through advanced technology, trained personnel, and a personalized approach to every situation.`,
      whatWeOfferTitle: 'What We Offer',
      whatWeOfferList: [
        'Physical security for private and corporate properties – offices, shops, residential buildings, warehouses, etc.',
        'Event security – concerts, sports events, conferences, private celebrations',
        'Alarm and surveillance systems, access control – design, installation, and maintenance',
        '24/7 monitoring and rapid response teams',
        'Security for establishments – bars, restaurants, and entertainment venues',
        'Protection of agricultural property'
      ],
      whyChooseUsTitle: 'Why Choose Us',
      whyChooseUsList: [
        'Licensed by the Ministry of Interior – National Private Security License No. 3/02-986',
        'Trained and certified personnel',
        '24/7 communication, support and supervision',
        'Innovative security systems',
        'Flexibility and tailored solutions to fit your needs'
      ],
      ourClientsTitle: 'Our Clients',
      ourClientsList: [
        'Institute of Education',
        'Auto Wagner Bulgaria Ltd.',
        'Private High School Professor Nikolay Rainov',
        '128th Secondary School Albert Einstein',
        'ARTVENT Ltd.',
        'Cultural Community Center Svetlina 1940',
        'Youth Sports Club Pazardzhik Sports',
        'Varna Theatre and Music Production Center',
        'Deloitte Bulgaria Ltd.',
        'SB Technologies Inc.',
        'Metaart Foundation',
        'Flashbone Ltd.',
        'Fantastico Group Ltd.',
        'BG TSC Group Ltd.',
        'TDB Play Ltd.',
        'Our Home Is Bulgaria Foundation',
        'New Eventic Aventura Ltd.',
        '… and many more.'
      ],
      contactInfo: {
        phone: '+359 895 66 26 00',
        email: 'savov@vionyx.eu',
        website: 'https://vionyx.eu/',
        address: 'Bulgaria, Sofia, Iskar District, Druzhba Neighborhood, Block 44, Entrance B, Floor 1, Apt. 38'
      }
      // >>>>>>> КРАЙ НА ДОБАВЕНИТЕ ПРЕВОДИ (EN) <<<<<<<
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are ready to discuss your security needs',
      info: 'Contact Information',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Working Hours',
      mondayFriday: 'Monday - Friday: 8:00 - 18:00',
      emergency: 'Emergency: 24/7',
      followUs: 'Follow Us',
      requestQuote: 'Request Quote',
      firstName: 'First Name',
      lastName: 'Last Name',
      service: 'Service',
      message: 'Message',
      selectService: 'Select service',
      submit: 'Send Request',
      sending: 'Sending...',
      success: 'Success!',
      successMessage: 'Your request has been sent successfully. We will contact you soon.',
      error: 'Error',
      errorMessage: 'An error occurred while sending the request. Please try again.',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      messagePlaceholder: 'Describe your needs...',
      validation: {
        firstName: 'First name must contain at least 2 characters',
        lastName: 'Last name must contain at least 2 characters',
        email: 'Invalid email address',
        phone: 'Phone number must contain at least 10 digits',
        service: 'Please select a service',
        message: 'Message must contain at least 10 characters'
      }
    },
    footer: {
      description: 'Professional security services with the highest standards of quality and security.',
      services: 'Services',
      company: 'Company',
      aboutUs: 'About Us',
      team: 'Our Team',
      licenses: 'Licenses',
      careers: 'Careers', // >>>>>>> ДОБАВЕНО <<<<<<<
      contacts: 'Contacts',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      cookies: 'Cookies',
      rights: '© 2025 Vionyx. All rights reserved.'
    },
    // >>>>>>> ДОБАВЕНИ ПРЕВОДИ ЗА КАРИЕРИ (EN) <<<<<<<
    careers: {
      title: 'Careers',
      description: 'Join our team! Send us your application.',
      fullName: 'Full Name',
      phone: 'Contact Phone',
      cv: 'Curriculum Vitae (CV)',
      cvHint: 'Attach a file in PDF, DOC, or DOCX format.',
      submit: 'Submit Application',
      submitting: 'Submitting...',
      submitSuccess: 'Your application has been sent successfully! We will contact you soon.',
      submitError: 'An error occurred while sending the application. Please try again.'
    },
    // >>>>>>> КРАЙ НА ДОБАВЕНИТЕ ПРЕВОДИ ЗА КАРИЕРИ (EN) <<<<<<<
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      retry: 'Try again',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      close: 'Close',
      open: 'Open',
      save: 'Save',
      cancel: 'Cancel',
      confirm: 'Confirm'
    },
    serviceDetail: {
      notFound: 'Service not found',
      notFoundMessage: 'The requested service does not exist.',
      backToServices: 'Back to services',
      backToHome: 'Back to home',
      detailedDescription: 'Detailed Description',
      includedServices: 'Included Services:',
      requestQuote: 'Request Quote',
      priceFrom: 'Price from:',
      requestConsultation: 'Request Free Consultation',
      callUs: 'Call us at:',
      sendEmail: 'Send email:'
    },
    servicePricing: {
      title: 'References', // <<< Променено от 'Pricing & Services'
      subtitle: 'Professional references and recommendations for our security services',
      note: 'All references are from companies and organizations we have successfully collaborated with.',
      from: 'from',
      includes: 'Includes:',
      moreServices: 'more services',
      details: 'Details',
      personalizedQuote: 'Need a personalized quote?',
      personalizedQuoteDesc: 'Contact us for detailed consultation and pricing adapted to your specific needs',
      callUs: 'Call Us',
      sendEmail: 'Send Email',
      workingHours: 'Working hours: 8:00 - 18:00',
      responseTime: 'We respond within 24 hours',
      // >>>>>>> ДОБАВЕНИ ПРЕВОДИ ЗА РЕФЕРЕНЦИИ (EN) <<<<<<<
      references: {
        bgtsk: 'Reference from BGTSC GROUP EOOD.',
        loshomie: 'Reference from Bar Singles (Loshomie Ltd.).',
        school128: 'Reference from 128 Secondary School "Albert Einstein".',
        // >>>>>>> ДОБАВЕНО <<<<<<<
        neweventic: 'Reference from New Eventic Aventura Ltd.', // <<< Превод на английски
        // Add more if needed
      },
      // >>>>>>> КРАЙ НА ДОБАВЕНИТЕ ПРЕВОДИ ЗА РЕФЕРЕНЦИИ (EN) <<<<<<<
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[]; // Актуализиран тип за връщане
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('bg');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load language from localStorage or browser preference
    const savedLanguage = localStorage.getItem('vionyx-language') as Language;
    const browserLanguage = navigator.language.startsWith('bg') ? 'bg' : 'en';
    const initialLanguage = savedLanguage || browserLanguage;
    setLanguageState(initialLanguage);
    setIsLoading(false);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('vionyx-language', lang);
    // Update document language attribute for accessibility
    document.documentElement.lang = lang;
  };

  // АКТУАЛИЗИРАНА ФУНКЦИЯ t()
  const t = (key: string): string | string[] => {
    try {
      const keys = key.split('.');
      let value: any = translations[language];
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          console.warn(`Translation key not found: ${key} for language: ${language}`);
          return key; // Fallback to key if translation not found
        }
      }
      // Връща стойността, ако е низ или масив, иначе ключа
      return typeof value === 'string' || Array.isArray(value) ? value : key;
    } catch (error) {
      console.error(`Error getting translation for key: ${key}`, error);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
