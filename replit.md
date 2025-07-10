# U Charge Up - Portable Battery Bank Rental Solutions

## Overview

U Charge Up is a full-stack web application for a portable battery bank rental service that provides smart kiosks for charging devices. The application serves as a business website showcasing services, kiosk solutions, and includes a contact management system. The platform targets businesses and consumers with convenient, reliable portable battery bank rental solutions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for brand theming
- **UI Components**: Radix UI components with shadcn/ui design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Animation**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL (using Neon serverless database)
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: Built-in session handling with PostgreSQL storage
- **API Design**: RESTful API endpoints for contact management

### Development Environment
- **Runtime**: Node.js with ESM modules
- **Development**: Hot module replacement via Vite
- **Build Process**: Separate client and server builds using Vite and esbuild
- **Environment**: Optimized for Replit development environment

## Key Components

### Frontend Components
1. **Landing Page Sections**:
   - Hero section with call-to-action
   - How It Works (3-step process)
   - Kiosk Solutions showcase
   - Partners/Locations display
   - Image gallery with modal view
   - Statistics display
   - Contact form with validation

2. **UI System**:
   - Comprehensive design system with 40+ reusable components
   - Brand color scheme (cyan primary, dark blue secondary)
   - Responsive design with mobile-first approach
   - Accessibility features built-in

3. **Forms & Validation**:
   - Contact form with React Hook Form
   - Zod schema validation
   - Error handling and success feedback

### Backend Components
1. **API Endpoints**:
   - `POST /api/contact` - Contact form submission
   - `GET /api/contacts` - Retrieve all contacts (admin)

2. **Database Schema**:
   - Users table (id, username, password)
   - Contacts table (id, name, email, company, message, created_at)

3. **Storage Layer**:
   - Abstract storage interface for flexibility
   - In-memory storage implementation for development
   - Drizzle ORM integration for PostgreSQL

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form
   - Client-side validation with Zod schema
   - Form data sent to `/api/contact` endpoint
   - Server validates and stores in database
   - Success/error feedback to user

2. **Asset Management**:
   - Static assets served from `attached_assets` directory
   - Images optimized for web delivery
   - Logo and kiosk images referenced throughout application

3. **Development Flow**:
   - Vite dev server for frontend with HMR
   - Express server for API endpoints
   - Shared schema types between client and server

## External Dependencies

### Core Dependencies
- **Database**: Neon serverless PostgreSQL
- **UI Framework**: Radix UI primitives
- **Animation**: Framer Motion
- **Form Handling**: React Hook Form with Zod validation
- **HTTP Client**: Native fetch API with TanStack Query

### Development Dependencies
- **TypeScript**: Full type safety across the stack
- **Tailwind CSS**: Utility-first styling
- **PostCSS**: CSS processing
- **ESBuild**: Fast JavaScript bundling

### Replit Integration
- Cartographer plugin for development
- Runtime error overlay
- Environment-specific optimizations

## Deployment Strategy

### Build Process
1. **Client Build**: Vite builds React app to `dist/public`
2. **Server Build**: ESBuild bundles Express server to `dist/index.js`
3. **Asset Handling**: Static assets copied to build directory

### Environment Configuration
- **Development**: `NODE_ENV=development` with hot reloading
- **Production**: `NODE_ENV=production` with optimized builds
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Deployment Commands
- `npm run dev` - Development server with hot reloading
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run db:push` - Database schema deployment

The application follows a modern full-stack architecture with clear separation of concerns, type safety throughout, and optimized for both development experience and production performance.