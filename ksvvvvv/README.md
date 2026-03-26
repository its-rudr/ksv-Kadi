# KSV University — Official Website

The official website of **Kadi Sarva Vishwavidyalaya (KSV)**, built as a modern, fully responsive React application. It covers academics, admissions, research, alumni, campus life, and more across 21 pages.

---

## Tech Stack

| Category | Technology | Version |
|---|---|---|
| UI Framework | React | 19.2.4 |
| Routing | React Router DOM | 7.13.1 |
| Build Tool | Vite | 8.0.1 |
| Styling | Tailwind CSS | 4.2.2 |
| Animations | Framer Motion | 12.38.0 |
| Icons | Lucide React | 0.577.0 |
| Forms | React Hook Form | 7.72.0 |
| Validation | Zod | 4.3.6 |
| PDF Viewer | React PDF | 10.4.1 |
| Utilities | clsx, tailwind-merge | latest |

---

## Project Structure

```
ksvuniversitywebpage/
├── public/
│   ├── images/          # Hero, campus, alumni, events, research photos
│   ├── icons/           # Cell logos, SDG icons
│   ├── logos/           # KSV logo (SVG + PNG)
│   ├── media/           # Videos for campus tour
│   └── docs/            # Markdown documents
├── src/
│   ├── components/      # 78 feature components
│   │   ├── home/        # HeroSlider, StatsCounter, NewsEvents, AlumniSection, etc.
│   │   ├── layout/      # Header, Footer, TopBar, PageLoader, ApplyNowButton, etc.
│   │   ├── academics/   # ProgrammesFilter, SyllabusSection, NEPSection, FeesBanner
│   │   ├── research/    # ResearchHero, FundedProjects, SupercomputerFacility
│   │   ├── cells/       # CellsGrid, CellsHero
│   │   ├── about/       # Management, PresidentDesk, TrustSection
│   │   ├── contact/     # ContactForm, ContactHero, ContactInfo
│   │   ├── chatbot/     # ChatbotWidget (local NLP-based Q&A)
│   │   └── ...more
│   ├── pages/           # 21 route-level page components (lazy loaded)
│   ├── data/            # Static data: courses.js, siteData.js, chatKnowledge.js
│   ├── hooks/           # useNavbarState (scroll-aware transparency)
│   ├── utils/           # chatbotEngine.js (tokenization + keyword matching)
│   ├── App.jsx          # Router config with React.lazy + Suspense
│   ├── main.jsx         # React entry point
│   └── style.css        # Global styles, Tailwind theme, CSS variables
├── vite.config.js
└── package.json
```

---

## Pages & Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About KSV |
| `/academics` | Academics |
| `/academics/courses` | Course Directory |
| `/admission` | Admissions |
| `/placements` | Placements |
| `/alumni` | Alumni Network |
| `/campuses` | Campuses (Kadi + Gandhinagar) |
| `/sister-concerns` | Sister Institutions |
| `/cells-centers` | Cells & Centres |
| `/research` | Research Overview |
| `/research/funded-projects` | Funded Projects |
| `/research/projects` | Research Projects |
| `/examination` | Examination |
| `/sustainability` | Sustainability & SDG |
| `/journals` | Journals & Publications |
| `/campus-tour` | Virtual Campus Tour |
| `/news-events` | News & Events |
| `/contact` | Contact |
| `/recruitment` | Recruitment |
| `/search` | Search |

---

## Design System

Defined via CSS custom properties in `src/style.css` and consumed by Tailwind v4:

**Brand Colors**
- Primary: `#1A3A6B` (deep blue)
- Secondary: `#C8973A` (gold)
- Dark: `#0D1B2A`
- Light: `#F8F9FC`
- Border: `#DDE3EE`

**Typography**
- Display: *Playfair Display* (headings, hero)
- Heading: *Poppins* (nav, subheadings)
- Body: *Inter* (paragraphs)
- Data: *Space Grotesk* (stats, labels)
- Motto: *Noto Serif Devanagari* (regional script)

**Radius Tokens**
- `sm` → 6px, `md` → 12px, `lg` → 20px, `pill` → 999px

---

## Getting Started

### Prerequisites
- Node.js >= 18
- npm >= 9

### Installation

```bash
git clone https://github.com/pandyaaayush04/ksv.git
cd ksv
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

Output is in the `/dist` folder — ready for static hosting (Vercel, Netlify, GitHub Pages).

---

## Key Features

- **Mega-menu navbar** — scroll-aware transparency, active route detection, mobile accordion
- **Hero Slider** — 7-slide auto-play carousel with animated overlays and CTAs
- **Announcement Ticker** — horizontally scrolling live announcements
- **Chatbot** — floating widget with local knowledge base and NLP-style keyword matching
- **Lazy-loaded pages** — all 21 pages loaded on demand via `React.lazy` + `Suspense`
- **Page transitions** — smooth scale + opacity animations via Framer Motion
- **PDF Viewer** — in-page syllabus and document rendering
- **Apply Now** — fixed vertical CTA button with shimmer animation (Framer Motion)
- **Search overlay** — full-screen search with suggestions and quick links
- **Fully responsive** — mobile-first design across all breakpoints

---
