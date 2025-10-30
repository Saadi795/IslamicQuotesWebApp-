# Islamic Quotes App - Design Guidelines

## Design Approach
**Reference-Based Approach**: Inspired by meditation and mindfulness apps (Calm, Headspace) combined with Islamic art aesthetics - focusing on serenity, reflection, and spiritual peace.

## Core Design Principles
- Minimalist, calm, and elegant aesthetic that inspires peace and reflection
- Clean layouts with ample whitespace and subtle geometric patterns inspired by Islamic art
- Serene, spiritually focused user experience optimized for content consumption
- Mobile-first responsive design for anywhere access

## Typography

**Primary Font**: Playfair Display (serif)
- Quote text: Use large, elegant serif typography (text-3xl to text-5xl on desktop, text-2xl to text-3xl on mobile)
- Weight: 400-500 for quote body, 600-700 for emphasis

**Secondary Font**: Inter or Poppins (sans-serif)
- Source references, buttons, UI elements: text-sm to text-base
- Navigation and labels: text-xs to text-sm
- Weight: 400 for body, 500-600 for headings

## Color Palette

**Primary Colors**:
- Dark Green: `#0D3B2A` - Primary backgrounds, emphasis elements
- Sage Green: `#8DA399` - Secondary accents, borders, hover states
- Light Off-White: `#F5F5F5` - Main background, card surfaces
- Gold: `#D4AF37` - Premium accents, interactive elements, call-to-action highlights

## Layout System

**Spacing Units**: Use Tailwind spacing primitives of 2, 4, 6, 8, 12, 16, 20, 24 (p-4, m-8, gap-6, etc.)

**Container Structure**:
- Main viewport: Full height on mobile, centered max-w-2xl on desktop
- Card component: Generous padding (p-8 to p-12), rounded corners (rounded-2xl), subtle shadow
- Content margins: mx-4 on mobile, mx-auto with max-width on desktop

**Grid System**:
- Single-column layout for quote display (centered, focused)
- Two-column grid for bookmark list on desktop (grid-cols-1 md:grid-cols-2)

## Component Library

### Main Quote Card
- Prominent centered card with elevated shadow
- Large quote text in Playfair Display, centered alignment
- Source and verse reference below in smaller, refined typography
- Subtle Islamic geometric pattern overlay or border accent
- Padding: p-8 to p-12 for breathing room

### Fixed Bottom Navigation Bar
- Sticky bottom bar (fixed bottom-0) with backdrop blur effect
- Three primary actions arranged horizontally with equal spacing:
  - "New Quote" button (primary action, gold accent)
  - "Bookmark" icon button (heart or bookmark icon)
  - "Share" icon button (share icon)
- Buttons with rounded-full styling, clear touch targets (min 44px)
- Spacing between buttons: gap-4 to gap-6

### Bookmark Section
- Header with "Bookmarks" title and count
- List/grid of saved quotes in compact card format
- Each card showing quote preview (truncated), source, and delete option
- Empty state with encouraging message and decorative icon
- Padding between items: gap-4

### Action Buttons
- Primary CTA: Solid gold background (#D4AF37) with dark text, rounded-full
- Secondary: Outline style with sage green border, transparent background
- Icon buttons: Circular, sage green on light background
- Copy button: Small, subtle, positioned near quote text

## Animations

**Fade-In Effect**: When new quote loads
- Smooth opacity transition from 0 to 1
- Duration: 500-700ms
- Easing: ease-in-out

**Card Interactions**:
- Subtle scale on hover for bookmark cards (scale-105)
- Smooth transitions for all interactive elements (transition-all duration-300)

## Images

**No Hero Image Required**: This application focuses on textual content (quotes) as the hero element itself.

**Decorative Elements**:
- Subtle Islamic geometric pattern as background texture (very low opacity, non-distracting)
- Optional decorative divider elements between sections using traditional Islamic art motifs
- Empty state illustrations for bookmarks section (simple, line-art style icons)

## Accessibility
- Minimum touch target size: 44x44px for all interactive elements
- Clear focus states with visible outlines (ring-2 ring-sage-green)
- Sufficient color contrast ratios (WCAG AA compliant)
- Semantic HTML structure for screen readers
- Keyboard navigation support for all actions

## Responsive Behavior

**Mobile (< 768px)**:
- Full-width quote cards with side padding (px-4)
- Bottom navigation bar spans full width
- Single-column bookmark list
- Font sizes scaled down appropriately

**Desktop (≥ 768px)**:
- Centered layout with max-w-2xl container
- Larger typography for quotes
- Two-column bookmark grid
- More generous spacing throughout

## Additional Features
- Copy to clipboard button with confirmation toast/feedback
- Smooth scroll behavior for navigation between sections
- Loading state with elegant spinner during webhook fetch
- Error state with retry option if webhook fails
- Local storage persistence for bookmarks with visual feedback on save/remove