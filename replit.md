# U Charge Up - Portable Battery Bank Rental Solutions

## Overview

U Charge Up is a full-stack web application for a portable battery bank rental service that provides smart kiosks for charging devices. The application serves as a modern, professional business website matching the Vercel reference design (v0-u-charge-up.vercel.app). The platform targets businesses and consumers with convenient, reliable portable battery bank rental solutions featuring the exact brand blue color from their logo.

## User Preferences

Preferred communication style: Simple, everyday language.
Brand colors: Primary blue from the U Charge Up logo (#00A8CC - bright cyan), replacing the previous orange color scheme.

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
- **API Design**: Vercel serverless functions under `api/` for the site chat (`/api/chat-ask`, `/api/chat-handoff`)

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
1. **API Endpoints** (Vercel serverless functions in `api/`, self-contained, no relative imports):
   - `POST /api/chat-ask` - Answers a typed question in the site chat (Juice) with Claude (`claude-sonnet-5-5`) from an inline fact sheet; returns `{ enabled, reply, action }` where `action` names the button the widget offers. Reports `enabled: false` when `ANTHROPIC_API_KEY` is unset. Per-IP and per-instance rate limits.
   - `POST /api/chat-handoff` - Takes the visitor's details plus the chat transcript and emails them to support@uchargeup.com over Gmail SMTP (nodemailer, `GMAIL_USER` + `GMAIL_APP_PASSWORD`); returns `{ success, reference }`. Card numbers in the transcript or notes are masked before rendering or logging. Honeypot and too-fast bot checks.

2. **Database Schema**:
   - Users table (id, username, password)
   - Contacts table (id, name, email, company, message, created_at)

3. **Storage Layer**:
   - Abstract storage interface for flexibility
   - In-memory storage implementation for development
   - Drizzle ORM integration for PostgreSQL

## Data Flow

1. **Marketing & Advertising Section (Updated July 10, 2025)**:
   - Added comprehensive advertising section for digital kiosk advertising
   - Features 6 key benefits: Digital screens, captive audience, strategic locations, analytics, targeting, visibility
   - Integrated into navigation menu (desktop and mobile)
   - Uses consistent brand blue color scheme
   - Clean, professional layout highlighting advertising opportunities

2. **Chat and Handoff (Updated October 2026)**:
   - The site chat (Juice) runs scripted button flows in the client; typed questions go to `/api/chat-ask`
   - The reply steers anything about a specific charge, refund, lost battery or broken rental to the handoff form
   - The handoff form posts details and transcript to `/api/chat-handoff`, validated with Zod on both sides
   - Email sent via Gmail SMTP (nodemailer) to support@uchargeup.com; without Gmail credentials the function logs the payload and returns an error in production (success only under `NODE_ENV=development`)
   - Success/error feedback to the visitor with a `UCU-` reference

3. **Smart App Download (Updated July 10, 2025)**:
   - Download buttons automatically detect user's device OS
   - iOS devices redirect to App Store (https://apps.apple.com/us/app/u-charge-up/id6504678459)
   - Android devices redirect to Google Play Store (https://play.google.com/store/apps/details?id=com.uchargeup.charge&pcampaignid=web_share)
   - Desktop users default to App Store link
   - Implemented in Hero and CallToAction components

3. **Asset Management**:
   - Static assets served from `attached_assets` directory
   - Images optimized for web delivery
   - Logo and kiosk images referenced throughout application

4. **Development Flow**:
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

### Which remote actually deploys

Production is Vercel project `uchargeup-website` (team `larry-watsons-projects`), serving uchargeup.com. It is connected to **`deploy` → github.com/lwatson-bit/uchargeup-website**, *not* to `origin` → github.com/UChargeUp-Web/U-Charge-Up. Pushing only to `origin` deploys nothing — push `main` to both remotes to ship and keep them in sync.

This is not an oversight that can currently be fixed: the org repo is private, and Vercel's Hobby plan refuses private org-owned repos (`409 ... Upgrade to Pro to continue`). Re-pointing requires either a Pro upgrade or making the org repo public, which is why the personal-account repo is public today. Do not run `vercel git connect` against the org repo — it disconnects the working link *before* it fails, silently breaking auto-deploy until reconnected.

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