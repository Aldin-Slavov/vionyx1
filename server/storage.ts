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
        title: "Охрана на събития",
        description: "Професионална охрана за корпоративни събития, конференции, изложения и частни мероприятия.",
        icon: "fas fa-calendar-alt",
        image: "https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
        priceFrom: 25,
        priceUnit: "лв./час",
        slug: "okhrana-na-sabitiya",
        fullDescription: "Нашите професионални охранители осигуряват пълна сигурност за всички видове събития. Предлагаме дискретна и ефективна охрана, която не нарушава атмосферата на мероприятието.",
        features: ["24/7 наблюдение", "Контрол на достъпа", "Управление на тълпи", "Координация със служби", "Дискретна охрана"],
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Корпоративна охрана",
        description: "Цялостна охрана на офиси, заводи и бизнес сгради с 24/7 наблюдение и контрол на достъпа.",
        icon: "fas fa-building",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
        priceFrom: 1200,
        priceUnit: "лв./месец",
        slug: "korporativna-okhrana",
        fullDescription: "Осигуряваме комплексна корпоративна охрана за бизнес сгради, офиси и промишлени обекти. Нашите услуги включват физическа охрана, видеонаблюдение и системи за контрол на достъпа.",
        features: ["Денонощна охрана", "Видеонаблюдение", "Контрол на достъпа", "Алармени системи", "Патрулиране"],
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Лична охрана",
        description: "Персонална защита за ръководители, VIP лица и техните семейства от обучени професионалисти.",
        icon: "fas fa-user-shield",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
        priceFrom: 40,
        priceUnit: "лв./час",
        slug: "lichna-okhrana",
        fullDescription: "Предлагаме персонална защита от висококвалифицирани бодигарди за VIP лица, ръководители и техните семейства. Всички наши специалисти са с военен или полицейски опит.",
        features: ["Лични бодигарди", "Анализ на риска", "Планиране на маршрути", "Защита на семейството", "Дискретна охрана"],
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Охрана на обекти",
        description: "Физическа охрана и видеонаблюдение на складове, магазини и други търговски обекти.",
        icon: "fas fa-video",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
        priceFrom: 800,
        priceUnit: "лв./месец",
        slug: "okhrana-na-obekti",
        fullDescription: "Осигуряваме надеждна охрана на търговски и промишлени обекти чрез комбинация от физическа охрана и модерни технологии за наблюдение.",
        features: ["Физическа охрана", "CCTV системи", "Алармени системи", "Проверки на обекта", "Бързо реагиране"],
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Консултантски услуги",
        description: "Експертни анализи на сигурността, рискови оценки и разработване на охранителни стратегии.",
        icon: "fas fa-clipboard-list",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
        priceFrom: 150,
        priceUnit: "лв./час",
        slug: "konsultantski-uslugi",
        fullDescription: "Нашите експерти по сигурност предлагат професионални консултации за оптимизиране на охранителните системи и процедури във вашата организация.",
        features: ["Анализ на риска", "Оценка на сигурността", "Стратегическо планиране", "Обучение на персонал", "Технически консултации"],
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Транспортна охрана",
        description: "Защита на ценни товари, документи и парични средства по време на транспортиране.",
        icon: "fas fa-truck",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
        priceFrom: 3,
        priceUnit: "лв./км",
        slug: "transportna-okhrana",
        fullDescription: "Осигуряваме безопасен транспорт на ценни товари, документи и парични средства с бронирани превозни средства и обучени охранители.",
        features: ["Бронирани возила", "Обучени охранители", "GPS проследяване", "Застраховка", "Бързо реагиране"],
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
        name: "Sofia Events",
        logo: null,
        testimonial: "Отличен професионализъм и надеждност. Препоръчвam Vionyx за всички видове охранителни услуги.",
        contactPerson: "Мария Койчева",
        position: "Мениджър събития",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "TechCorp",
        logo: null,
        testimonial: "Работим с Vionyx вече 3 години. Винаги навременни, професионални и дискретни.",
        contactPerson: "Иван Петров",
        position: "Изпълнителен директор",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Retail Chain",
        logo: null,
        testimonial: "Благодарение на тяхната охрана, нашите обекти са напълно защитени 24/7. Отлично качество на услугата.",
        contactPerson: "Анна Димитрова",
        position: "Собственик",
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
      createdAt: new Date() 
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
      createdAt: new Date() 
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
