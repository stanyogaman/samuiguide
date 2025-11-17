# Samui Insider Guide

A comprehensive, multilingual marketing website for Koh Samui featuring guides, quizzes, blog posts, and district information.

## 🏗️ Architecture Overview

### Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Internationalization**: URL-based routing (/en, /de, /fr, /ru)
- **Architecture**: React Server Components + Client Components

### Core Features
- ✅ Multilingual support (EN, DE, FR, RU)
- ✅ Interactive quizzes with personalized results
- ✅ Blog system with rich content
- ✅ Comprehensive guide library (free & paid)
- ✅ District explorer with detailed information
- ✅ User authentication and profiles
- ✅ Admin dashboard
- ✅ Responsive design with tropical island theme

## 📁 Project Structure

```
samuiguide/
├── app/                          # Next.js App Router
│   ├── [lang]/                   # Localized routes
│   │   ├── page.tsx             # Home page
│   │   ├── blog/                # Blog routes
│   │   ├── guides/              # Guide routes
│   │   ├── quizzes/             # Quiz routes
│   │   ├── districts/           # District routes
│   │   ├── auth/                # Authentication pages
│   │   └── profile/             # User profile
│   ├── api/                     # API routes
│   │   └── quiz/submit/         # Quiz submission endpoint
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
│
├── components/                   # React components
│   ├── ui/                      # Base UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Tabs.tsx
│   │   ├── Steps.tsx
│   │   └── ...
│   ├── layout/                  # Layout components
│   │   ├── SiteHeader.tsx
│   │   ├── SiteFooter.tsx
│   │   ├── MainLayout.tsx
│   │   ├── AuthLayout.tsx
│   │   └── AdminLayout.tsx
│   ├── home/                    # Home page components
│   │   ├── HeroBanner.tsx
│   │   ├── MapWidget.tsx
│   │   ├── FeaturedGuides.tsx
│   │   ├── PopularQuizzes.tsx
│   │   └── LatestArticles.tsx
│   ├── blog/                    # Blog components
│   │   ├── ArticleCard.tsx
│   │   ├── ArticleList.tsx
│   │   └── ArticleContent.tsx
│   ├── guides/                  # Guide components
│   │   ├── GuideCard.tsx
│   │   ├── GuideGrid.tsx
│   │   └── GuideDetails.tsx
│   ├── quiz/                    # Quiz components
│   │   ├── QuizLayout.tsx
│   │   ├── QuizQuestion.tsx
│   │   ├── QuizResult.tsx
│   │   ├── QuizCTA.tsx
│   │   └── QuizProgress.tsx
│   ├── districts/               # District components
│   │   ├── DistrictCard.tsx
│   │   └── DistrictHeader.tsx
│   └── auth/                    # Auth components
│       ├── LoginForm.tsx
│       └── RegisterForm.tsx
│
├── i18n/                        # Internationalization
│   ├── config.ts               # i18n configuration
│   ├── dictionaries.ts         # Dictionary loader
│   └── locales/                # Translation files
│       ├── en.json
│       ├── de.json
│       ├── fr.json
│       └── ru.json
│
├── lib/                         # Utilities and helpers
│   ├── utils.ts                # Utility functions
│   ├── api.ts                  # API client
│   ├── hooks/                  # Custom React hooks
│   │   ├── useTranslation.ts
│   │   └── useQuiz.ts
│   └── data/                   # Static data
│       └── quizzes.ts          # Quiz configurations
│
├── types/                       # TypeScript types
│   └── index.ts
│
└── Configuration files
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.js
    ├── next.config.js
    └── postcss.config.js
```

## 🎨 Design System

### Colors
- **Primary** (Tropical Turquoise): `#00bfbf`
- **Secondary** (Warm Sand Beige): `#c9ab7e`
- **Accent** (Coral): `#ff5a47`
- **Background**: `#fafaf8`
- **Text Primary**: `#1a1a1a`
- **Text Secondary**: `#6b7280`

### Components
All UI components are built with:
- Consistent padding/spacing scale
- Island-themed rounded corners (xl, 2xl, 3xl)
- Soft shadows with "island" aesthetic
- Smooth transitions and hover effects
- Full accessibility support

## 🌐 Internationalization (i18n)

### URL Structure
- English: `/en/*`
- German: `/de/*`
- French: `/fr/*`
- Russian: `/ru/*`

### Usage

**Server Components:**
```tsx
import { getDictionary } from '@/i18n/dictionaries'

export default async function Page({ params }) {
  const dictionary = await getDictionary(params.lang)
  return <h1>{dictionary.home.hero.title}</h1>
}
```

**Client Components:**
```tsx
import { useTranslation } from '@/lib/hooks/useTranslation'

export function Component({ dictionary }) {
  const { t } = useTranslation(dictionary)
  return <h1>{t('home.hero.title')}</h1>
}
```

## 🎯 Quiz System

### Quiz Flow
1. User selects a quiz
2. Answers multi-step questions (single/multiple choice, ratings)
3. Results are calculated based on weighted answers
4. User receives:
   - Personalized segment (tourist/expat/investor/digital-nomad/retiree)
   - Recommended guide
   - Recommended districts
   - CTA buttons for WhatsApp/Telegram contact

### Quiz Configuration
Quizzes are defined in `lib/data/quizzes.ts`:

```typescript
{
  id: 'where-to-live',
  title: 'Where Should You Live on Samui?',
  questions: [
    {
      id: 'q1',
      type: 'single',
      question: 'What describes your primary reason?',
      options: [
        {
          id: 'a1',
          label: 'Retirement',
          value: 'retirement',
          weight: { retiree: 3, tourist: 1 }
        }
      ]
    }
  ]
}
```

### Creating New Quizzes
1. Add quiz config to `lib/data/quizzes.ts`
2. Define questions with appropriate types and weights
3. Quiz component automatically handles rendering and flow

## 📄 Pages

### Public Pages
- `/[lang]` - Home page with hero, featured guides, quizzes, blog
- `/[lang]/blog` - Blog index
- `/[lang]/blog/[slug]` - Individual article
- `/[lang]/guides` - Guides index with filtering
- `/[lang]/guides/[slug]` - Guide details with purchase/unlock options
- `/[lang]/quizzes` - Quiz index
- `/[lang]/quizzes/[slug]` - Interactive quiz
- `/[lang]/districts` - District explorer
- `/[lang]/districts/[slug]` - District details
- `/[lang]/about` - About page
- `/[lang]/contact` - Contact page

### Auth Pages
- `/[lang]/auth/login` - User login
- `/[lang]/auth/register` - User registration
- `/[lang]/profile` - User profile and downloads

### Admin Pages
- `/admin` - Dashboard
- `/admin/blog` - Manage blog posts
- `/admin/guides` - Manage guides
- `/admin/quizzes` - Manage quizzes
- `/admin/districts` - Manage districts
- `/admin/users` - Manage users

## 🔌 API Endpoints

### Quiz Submission
```
POST /api/quiz/submit
Body: { answers: QuizAnswer[] }
Response: { success: boolean, data: QuizResult }
```

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:3000` (redirects to `/en`)

### Build
```bash
npm run build
npm start
```

### Type Checking
```bash
npm run type-check
```

## 📱 Responsive Design

All components are fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Styling Conventions

### Tailwind Utilities
```tsx
// Card containers
<div className="bg-white rounded-2xl shadow-card p-6" />

// Tropical gradient backgrounds
<div className="bg-tropical-gradient" />

// Island-style shadows
<div className="shadow-island" />

// Glass morphism
<div className="bg-glass backdrop-blur-lg" />
```

### Custom Classes
Defined in `tailwind.config.js`:
- `bg-tropical-gradient`
- `bg-sunset-gradient`
- `bg-sand-gradient`
- `shadow-island`
- `shadow-card`
- `shadow-card-hover`

## 🔐 Authentication

User authentication flow:
1. Register/Login via forms
2. JWT token stored (implementation needed)
3. Protected routes check authentication
4. User profile stores completed quizzes and unlocked guides

## 🎯 Next Steps

### Backend Integration
- Connect to actual API endpoints
- Implement proper authentication with JWT
- Set up database for content management
- Add payment processing for paid guides

### Content Management
- Integrate CMS (e.g., Strapi, Sanity)
- Add rich text editor for blog posts
- Implement media upload system

### Features to Add
- Search functionality
- User comments on blog posts
- Guide bookmarking
- Email notifications
- Social sharing
- Analytics integration

## 📝 License

This project is proprietary.
