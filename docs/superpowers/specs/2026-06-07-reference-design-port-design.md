# NeuralAI Reference Design Port

**Date:** 2026-06-07  
**Status:** Approved  
**Reference source:** `neuralai-hero-section/src/App.tsx`

## Goal

Port the visual design and section structure from the standalone `neuralai-hero-section/` Vite app into the Next.js `app/` codebase, component by component, so the live site matches the reference screenshot.

## Scope

### Sections to remove
- `Services` — not present in reference design
- `Team` — not present as a standalone section
- `Testimonials` — not present in reference design

### Sections to keep and update
`Hero → Products → Neural Lab → About → Blog → Contact → Footer`

---

## Component Changes

### `app/page.tsx`
- Remove `<Services />`, `<Team />`, `<Testimonials />` imports and JSX
- Remove `teamMembers` array (team modal no longer needed)
- Update Portfolio's `onViewDemo` to pass correct product shape with `id`, `badge`, `stats`, `url`
- Update Blog's `onReadArticle` to pass full article `content` (not just `excerpt + "Full article content coming soon."`)
- Update section IDs: Portfolio uses `id="products"` (not `id="portfolio"`)

### `components/ui/hero-section.tsx`
- Nav links: **Home · Products · Neural Lab · About**
- "Neural Lab" link text-terracotta (active highlight)
- Scroll targets: `hero`, `products`, `neural-lab`, `about`, `contact`
- "Contact Us" button scrolls to `#contact`

### `app/components/Portfolio.tsx`
- Remove `next/image` product screenshots
- Replace with inline browser mockup UI per product:
  - **IeltsBuddy**: browser chrome bar → AI feedback card (left 3/5) + band score circle "7.5" (right 2/5)
  - **Digital Sewa**: browser chrome bar → teal header "Find Local Trust." + freelancer row
- Retain stats grid (3 stats per product)
- Retain "Try Interactive Demo" teal button (calls `onViewDemo`)
- Background: `bg-[#FAF8F5]/80`, no gradient blobs or glassmorphism
- Section `id="products"`

### `app/components/About.tsx`
- Story layout: `lg:grid-cols-12` — left 5 cols italic terracotta quote, right 7 cols prose + teal location box
- Location box: left-border-2 teal, `bg-[#FAF8F5]`, "LOCATION" badge chip
- Principles grid: change from `md:grid-cols-2` → `lg:grid-cols-4` (4 columns on desktop)
- Principle cards: orange circle with checkmark icon + bold serif title (replaces current plain check icon layout)
- Background: `bg-white`

### `app/components/Blog.tsx`
- Add state `blogFilter` (default `"ALL"`)
- Add filter tab row: ALL / TEST PREP / CAREERS / STUDY ABROAD — terracotta fill when active
- Card header: replace gradient div with `grid-dots` background + centered category icon (BookOpen = TEST PREP, Briefcase = CAREERS, Globe = STUDY ABROAD)
- Filter articles: `ARTICLES.filter(a => blogFilter === "ALL" || a.category === cat)`
- "See all articles" button: resets filter + scrolls to `#blog`
- Background: `bg-[#FAF8F5]/80`

### `app/components/Contact.tsx`
- Contact info cards: remove `ui-card` rounded style → plain `border border-[#E2DDD5]/80` square panels with `hover:border-terracotta/40`
- Input fields: change from `rounded-full` → `rounded-xl`
- Interest `<select>` options: Software & Apps / Tech Training / IELTS Coaching & Prep / SOP Guidance & Study Abroad
- Send button: full-width, terracotta bg, includes `<Send>` icon from lucide-react
- Success overlay: `AnimatePresence` animated div (absolute inset) matching reference

### `app/components/Footer.tsx`
- Background: `bg-[#18181B]` (dark), text `text-white/95`
- Logo: remove globe SVG → `<div className="w-8 h-8 bg-terracotta ...">N</div>` + "NeuralAI" text
- Newsletter input: dark bg (`bg-white/5 border-white/10`), dark placeholder
- Columns: **Products** (IeltsBuddy, Digital Sewa) + **Company** (About, Blog, Contact) — remove Services column
- Footer bottom bar: dark variant, `border-white/10`

---

## Design Tokens (unchanged)

The existing `globals.css` tokens already match the reference palette closely:
- `--primary: #b0421a` ≈ terracotta (`#A53C1B`)
- `--background: #fdfaf3` ≈ `#FAF8F5`
- `#0F766E` = brand-teal (used directly in both codebases)

No token changes needed — use existing CSS variables where possible, add inline hex values only where the reference uses a specific value not in the token set.

---

## What is NOT changing
- `HeroSection` animations (floating circles, constellation, NeuralCanvas) — already match reference
- `NeuralLab` component — already implemented
- `InteractiveProductDemo`, `InteractiveTeamProfile`, `BlogArticleModal` modal components — kept
- `ScrollReveal` / `StaggerContainer` / `StaggerItem` utilities — kept
- `globals.css` design tokens — kept
- `layout.tsx` — no changes

---

## Success Criteria
1. Page section order matches: Hero → Products → Neural Lab → About → Blog → Contact → Footer
2. No Services, Team, or Testimonials sections rendered
3. Products section shows browser mockup UIs (not image screenshots)
4. About section has italic terracotta quote column + 4-column principles grid
5. Blog has category filter tabs that filter the article grid
6. Footer is dark (`#18181B` background)
7. Contact cards are square-bordered, inputs are `rounded-xl`
