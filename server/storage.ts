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
        titleEn: "Event Security",
        slug: "okhrana-na-meropriyatia",
        description: "Професионална охрана на спортни събития, концерти, фестивали и корпоративни мероприятия",
        descriptionEn: "Professional security for sports events, concerts, festivals and corporate events",
        image: "/images/services/security-events.jpg",
        icon: "fas fa-calendar-alt",
        priceFrom: null,
        priceUnit: null,
        priceUnitEn: null,
        fullDescription: null,
        features: ["Охранително обследване","Контрол на достъпа", "Управление на тълпи", "Спешна реакция", "Координация с властите"],
        featuresEn: ["Security inspection","Access control", "Crowd management", "Emergency response", "Authority coordination"],
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Охрана на имуществото на физически и юридически лица",
        titleEn: "Property Security for Individuals and Legal Entities",
        slug: "okhrana-na-imushtestvo",
        description: "Защита на личното и корпоративно имущество с модерни технологии и обучен персонал",
        descriptionEn: "Protection of personal and corporate property with modern technologies and trained personnel",
        image: "/images/services/" + encodeURIComponent("securyty-prop.jpg"),
        icon: "fas fa-shield-alt",
        priceFrom: null,
        priceUnit: null,
        priceUnitEn: null,
        fullDescription: null,
        features: ["Охранително обследване", "Видеонаблюдение", "Контрол на достъпа", "Периметрална защита"],
        featuresEn: ["Security inspection","24/7 security", "Video surveillance", "Access control", "Perimeter protection"],
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Сигнално-охранителна дейност",
        titleEn: "Alarm and Security Systems",
        slug: "signalno-okhranitelna-deynost",
        description: "Инсталиране, поддръжка ,мониторинг на сигнални,алармени устройства и реакция с автопатрул",
        descriptionEn: "Installation, maintenance and monitoring of alarm systems and security devices",
        image: "/images/services/" + encodeURIComponent("сод.jpg"),
        icon: "fas fa-bell",
        priceFrom: null,
        priceUnit: null,
        priceUnitEn: null,
        fullDescription: null,
        features: ["Охранително обследване","Централизиран мониторинг", "Бърза реакция", "Техническа поддръжка", "Интеграция със системи","видео наблюдение"],
        featuresEn: ["Security inspection","Centralized monitoring", "Quick response", "Technical support", "System integration"],
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Охрана на обекти – недвижими имоти",
        titleEn: "Real Estate Security",
        slug: "okhrana-na-obekti-nedvizhimi",
        description: "Специализирана охрана на жилищни и търговски сгради, складове и промишлени обекти",
        descriptionEn: "Specialized security for residential and commercial buildings, warehouses and industrial facilities",
        image: "/images/services/" + encodeURIComponent("охрана–сгради.jpg"),
        icon: "fas fa-building",
        priceFrom: null,
        priceUnit: null,
        priceUnitEn: null,
        fullDescription: null,
        features: ["Охранително обследване","Физическа охрана", "Електронна защита", "Патрулиране", "Отчетност"],
        featuresEn: ["Security inspection","Physical security", "Electronic protection", "Patrolling", "Reporting"],
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Охрана на селскостопанско имущество",
        titleEn: "Agricultural Property Security",
        slug: "okhrana-na-selskostopansko-imushtestvo",
        description: "Защита на земеделски земи, машини, складове и селскостопанска продукция",
        descriptionEn: "Protection of agricultural land, machinery, warehouses and agricultural products",
        image: "/images/services/" + encodeURIComponent("охрана–земеделска.jpg"),
        icon: "fas fa-tractor",
        priceFrom: null,
        priceUnit: null,
        priceUnitEn: null,
        fullDescription: null,
        features: ["Охранително обследване","Периметрична охрана", "Мобилни патрули", "Защита на техника", "Сезонно покритие"],
        featuresEn: ["Security inspection","Perimeter security", "Mobile patrols", "Equipment protection", "Seasonal coverage"],
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Стюардинг и контрол билети",
        titleEn: "Stewarding and Ticket Control",
        slug: "styuarding-kontrol-bileti",
        description: "Професионални стюарди за спортни и културни мероприятия , контрол на билети",
        descriptionEn: "Professional stewards for sports and cultural events with ticket control",
        image: "/images/services/" + encodeURIComponent("стюард.jpg"),
        icon: "fas fa-ticket-alt",
        priceFrom: null,
        priceUnit: null,
        priceUnitEn: null,
        fullDescription: null,
        features: ["Охранително обследване","Контрол билети", "Насочване на публика", "Спешна евакуация", "Обслужване на клиенти"],
        featuresEn: ["Security inspection","Ticket control", "Crowd guidance", "Emergency evacuation", "Customer service"],
        createdAt: new Date(),
      }
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
        nameEn: "128th Secondary School \"Albert Einstein\"",
        logo: null,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "\"АРТВЕНТ\" ООД",
        nameEn: "\"ARTVENT\" Ltd.",
        logo: null,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "НЧ \"Светлина 1940\"",
        nameEn: "Cultural Community Center \"Svetlina 1940\"",
        logo: null,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Младежки спортен клуб \"Пазарджик спортува\"",
        nameEn: "Youth Sports Club \"Pazardzhik Sports\"",
        logo: null,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "ТЕАТРАЛНО - МУЗИКАЛЕН ПРОДУЦЕНТСКИ ЦЕНТЪР ВАРНА",
        nameEn: "Varna Theatre and Music Production Center",
        logo: null,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "ДЕЛОЙТ БЪЛГАРИЯ ЕООД",
        nameEn: "Deloitte Bulgaria Ltd.",
        logo: null,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "SB TECHNOLOGIES INC",
        nameEn: "SB Technologies Inc.",
        logo: null,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Фондация \"Метаарт\"",
        nameEn: "Metaart Foundation",
        logo: null,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Флешбоун ЕООД",
        nameEn: "Flashbone Ltd.",
        logo: null,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "ИНСТИТУТ ПО ОБРАЗОВАНИЕТО",
        nameEn: "Institute of Education",
        logo: null,
        createdAt: new Date(),
      },
      // New clients added
      {
        id: randomUUID(),
        name: "Авто Вагнер България ООД",
        nameEn: "Auto Wagner Bulgaria Ltd.",
        logo: null,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "ЧСУ \"Професор Николай Райнов\"",
        nameEn: "Private High School \"Professor Nikolay Rainov\"",
        logo: null,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Фантастико Груп ООД",
        nameEn: "Fantastico Group Ltd.",
        logo: null,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "БГ ТСЦ Груп ООД",
        nameEn: "BG TSC Group Ltd.",
        logo: null,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "ТДБ Плей ООД",
        nameEn: "TDB Play Ltd.",
        logo: null,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Фондация \"Нашият дом е България\"",
        nameEn: "Our Home Is Bulgaria Foundation",
        logo: null,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Ню Евентик Авентура ООД",
        nameEn: "New Eventic Aventura Ltd.",
        logo: null,
        createdAt: new Date(),
      }
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
      features: insertService.features || null,
      featuresEn: insertService.featuresEn || null
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