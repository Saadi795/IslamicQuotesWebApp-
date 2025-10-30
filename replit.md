# Islamic Quotes App

## Overview

An Islamic quotes application that displays inspirational quotes from the Quran and Hadith. The app provides a serene, meditation-like experience for users to discover, bookmark, and share Islamic wisdom. Built with a focus on simplicity, spiritual aesthetics, and content consumption.

**Key Purpose**: Deliver daily Islamic inspiration through a beautiful, calming interface that encourages reflection and spiritual growth.

**Core Features**:
- Display curated Islamic quotes with source attribution
- Bookmark favorite quotes for later reference
- Share quotes via native sharing or clipboard
- Mobile-first responsive design

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: React Query (@tanstack/react-query) for server state, React hooks for local state
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion for transitions and micro-interactions

**Design Philosophy**:
- Mobile-first responsive design inspired by meditation apps (Calm, Headspace)
- Islamic art aesthetics with geometric patterns and serene color palette
- Typography: Playfair Display (serif) for quotes, Inter/Poppins (sans-serif) for UI
- Color scheme: Dark Green (#0D3B2A), Sage Green (#8DA399), Off-White (#F5F5F5), Gold accents (#D4AF37)

**Component Structure**:
- `QuoteCard`: Main display component with animated transitions
- `BottomNavigation`: Fixed navigation bar with action buttons
- `BookmarkItem`: Individual bookmark display with management actions
- `EmptyBookmarks`: Empty state for bookmark collection

**Local Storage Strategy**:
- Bookmarks stored in browser localStorage
- Quote data managed in-memory and localStorage
- No user authentication required

### Backend Architecture

**Framework**: Express.js with TypeScript
- **Module System**: ES Modules (type: "module")
- **Build Tool**: esbuild for production bundling
- **Development**: tsx for TypeScript execution

**Current State**: Minimal backend implementation
- Basic Express server setup
- In-memory storage interface defined but not actively used
- Routes defined but not implemented (placeholder for future API endpoints)

**Intended Integration**: 
- Designed to integrate with n8n webhook for quote fetching
- Webhook will process requests and return structured JSON responses
- POST requests with JSON body: `{"action": "get_quote"}`

**Storage Interface** (MemStorage):
- Currently implements user management methods (getUser, getUserByUsername, createUser)
- Not actively used in current implementation
- Prepared for future expansion if backend quote management is needed

### Data Model

**Quote Schema** (Zod validation):
```typescript
{
  id: string
  text: string
  source: string (e.g., "Quran", "Hadith")
  reference: string (e.g., "Surah Ash-Sharh (94:6)")
  timestamp: number
}
```

**Design Decision**: Simple, flat data structure optimized for display and serialization to localStorage. No relational data or complex nesting needed for this use case.

### Build & Development

**Development Workflow**:
- Vite dev server with HMR for fast iteration
- Separate client and server compilation paths
- TypeScript checking without emit (noEmit: true)

**Production Build**:
1. Vite builds client React app → `dist/public`
2. esbuild bundles server code → `dist/index.js`
3. Static file serving in production mode

**Path Aliases**:
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

## External Dependencies

### Third-Party Services

**n8n Webhook** (Planned Integration):
- Purpose: Fetch new Islamic quotes dynamically
- Method: POST requests to webhook URL
- Response: JSON with quote text, source, and reference
- Status: Currently using mock data, webhook integration pending

### UI Component Libraries

**Radix UI**: Headless component primitives
- Dialog, Dropdown, Popover, Toast, Accordion, and 20+ other components
- Provides accessibility and behavior without styling opinions
- Rationale: Production-ready accessible components that integrate seamlessly with Tailwind

**Shadcn/ui**: Pre-styled Radix UI components
- Configured with "new-york" style variant
- Neutral base color scheme
- CSS variables for theming
- Rationale: Accelerates development with beautiful, customizable components

### Animation & Motion

**Framer Motion**: 
- Used for quote card transitions, bottom navigation appearance, and empty states
- Provides smooth, physics-based animations
- Rationale: Industry standard for React animations with excellent performance

### Database (Configured but Not Active)

**Drizzle ORM** with PostgreSQL:
- Configuration: `drizzle.config.ts` points to `@neondatabase/serverless`
- Schema: Defined in `shared/schema.ts` (currently only Quote type)
- Status: Set up for future use but not actively connected
- Migration path: `./migrations`

**Design Decision**: Database prepared for future backend implementation if quotes need to be managed server-side. Current implementation uses localStorage for simplicity and offline capability.

### Styling & Design System

**Tailwind CSS**:
- Custom border radius values (9px, 6px, 3px)
- HSL-based color system with CSS variables
- Custom elevation utilities (hover-elevate, active-elevate-2)
- Responsive breakpoint: 768px (mobile-first)

**PostCSS**: Autoprefixer for browser compatibility

### Development Tools

**Replit-Specific**:
- `@replit/vite-plugin-runtime-error-modal`: Development error overlay
- `@replit/vite-plugin-cartographer`: Development navigation
- `@replit/vite-plugin-dev-banner`: Development mode indicator

**Type Safety**:
- TypeScript with strict mode enabled
- Zod for runtime schema validation
- Drizzle-zod for database schema validation