# replit.md

## Overview

This is a Bulgarian security company website called "Vionyx" built with a modern full-stack architecture. The website has been updated according to Aldin's proposal to reorganize services based on company licenses and add new clients. It showcases prioritized security services, updated client testimonials, and comprehensive pricing information. The application uses React for the frontend, Express.js for the backend, and is configured to use PostgreSQL with Drizzle ORM for data management.

## Recent Changes (January 2025)

✓ Reorganized services by license priorities as requested:
  1. Охрана на мероприятия (Event security)
  2. Охрана на имуществото на физически и юридически лица (Property security)
  3. Сигнално-охранителна дейност (Alarm security services)
  4. Охрана на обекти – недвижими имоти (Real estate security)
  5. Охрана на селскостопанско имущество (Agricultural security)
  6. Стюардинг и контрол билети (Stewarding and ticket control)

✓ Added new clients from Aldin's list:
  - 128 СУ "Алберт Айнщайн"
  - "АРТВЕНТ" ООД
  - НЧ "Светлина 1940"
  - Младежки спортен клуб "Пазарджик спортува"
  - ТЕАТРАЛНО - МУЗИКАЛЕН ПРОДУЦЕНТСКИ ЦЕНТЪР ВАРНА
  - ДЕЛОЙТ БЪЛГАРИЯ ЕООД
  - SB TECHNOLOGIES INC
  - Фондация "Метаарт"
  - Флешбоун ЕООД
  - ИНСТИТУТ ПО ОБРАЗОВАНИЕТО

✓ Created new pricing page (/pricing) with active links for comprehensive service information
✓ Updated navigation to include pricing page
✓ Made client logos clickable with links to pricing page
✓ Updated contact form with new service options
✓ Integrated actual minors declaration document with download functionality
✓ Updated minors declaration page with authentic legal content from provided DOC file

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **UI Library**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom Vionyx brand colors
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom configuration

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **API Style**: RESTful API endpoints
- **Development**: In-memory storage fallback for development

### Project Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express server
├── shared/          # Shared schemas and types
├── migrations/      # Database migrations
└── attached_assets/ # Static assets
```

## Key Components

### Database Schema
- **Services**: Security service offerings with pricing and details
- **Clients**: Client testimonials and company information  
- **Contact Requests**: Form submissions from potential customers
- **Users**: User management (schema defined but not fully implemented)

### API Endpoints
- `GET /api/services` - List all security services
- `GET /api/services/:slug` - Get specific service by slug
- `GET /api/clients` - List all client testimonials
- `POST /api/contact` - Submit contact form

### Pages
- **Home** (`/`) - Main landing page with all sections
- **Service Detail** (`/services/:slug`) - Individual service pages
- **Service Pricing** (`/pricing`) - Comprehensive pricing page with all services
- **Minors Declaration** (`/minors-declaration`) - Child protection policy
- **404 Page** - Not found handling

### UI Components
- Header with navigation and mobile menu
- Hero section with call-to-action
- Services grid with cards
- Client testimonials section
- About section with statistics
- Contact form with validation
- Footer with links and contact info

## Data Flow

1. **Service Data**: Fetched from API endpoints using React Query
2. **Contact Forms**: Validated with Zod schemas, submitted via API
3. **Navigation**: Client-side routing with Wouter
4. **State**: Server state managed by React Query, form state by React Hook Form
5. **Storage**: Development uses in-memory storage, production uses PostgreSQL

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM)
- UI libraries (Radix UI components, Lucide icons)
- Styling (Tailwind CSS, class-variance-authority)
- Forms (React Hook Form, Zod validation)
- HTTP (TanStack Query for data fetching)
- Date handling (date-fns)

### Backend Dependencies
- Express.js server framework
- Database (Drizzle ORM, Neon Database)
- Validation (Zod)
- Session management (connect-pg-simple)
- Development tools (tsx, esbuild)

### Development Tools
- TypeScript for type safety
- Vite for fast development and building
- ESBuild for server bundling
- Replit-specific plugins for development

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: ESBuild bundles server to `dist/index.js`
3. **Database**: Drizzle Kit handles schema migrations

### Environment Variables
- `DATABASE_URL` - PostgreSQL connection string (required)
- `NODE_ENV` - Environment mode (development/production)

### Scripts
- `npm run dev` - Development server with hot reload
- `npm run build` - Build both frontend and backend
- `npm run start` - Production server
- `npm run db:push` - Push schema changes to database

### Hosting Considerations
- Designed for deployment on platforms supporting Node.js
- Uses Replit-specific features for development environment
- Static assets served from build output
- Database requires PostgreSQL-compatible service

The application follows modern web development practices with TypeScript throughout, proper separation of concerns, and a scalable architecture that can easily accommodate additional features like user authentication, admin panels, or expanded service offerings.