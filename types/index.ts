import { Locale } from '@/i18n/config'

// Common types
export interface BaseEntity {
  id: string
  createdAt: string
  updatedAt: string
}

// Blog types
export interface BlogPost extends BaseEntity {
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  author: Author
  category: string
  tags: string[]
  readTime: number
  publishedAt: string
  locale: Locale
}

export interface Author {
  id: string
  name: string
  avatar: string
  bio: string
}

// Guide types
export interface Guide extends BaseEntity {
  slug: string
  title: string
  description: string
  coverImage: string
  price: number
  isPaid: boolean
  category: GuideCategory
  relatedQuiz?: string
  downloadUrl?: string
  locale: Locale
  features: string[]
  preview?: string
}

export type GuideCategory = 'living' | 'investing' | 'travel' | 'business' | 'property'

// Quiz types
export interface Quiz {
  id: string
  slug: string
  title: string
  description: string
  coverImage: string
  estimatedTime: number
  questions: QuizQuestion[]
  locale: Locale
}

export interface QuizQuestion {
  id: string
  type: 'single' | 'multiple' | 'rating'
  question: string
  description?: string
  options?: QuizOption[]
  min?: number
  max?: number
  required: boolean
}

export interface QuizOption {
  id: string
  label: string
  value: string
  weight?: Record<string, number> // Segment weights
}

export interface QuizAnswer {
  questionId: string
  value: string | string[] | number
}

export interface QuizResult {
  segment: UserSegment
  score: Record<string, number>
  recommendedGuide: Guide
  recommendedDistricts: District[]
  description: string
}

export type UserSegment = 'tourist' | 'expat' | 'investor' | 'digital-nomad' | 'retiree'

// District types
export interface District extends BaseEntity {
  slug: string
  name: string
  description: string
  coverImage: string
  images: string[]
  locale: Locale
  population?: number
  averageRent?: number
  attractions: string[]
  bestFor: string[]
  coordinates: {
    lat: number
    lng: number
  }
}

// User types
export interface User extends BaseEntity {
  email: string
  firstName: string
  lastName: string
  avatar?: string
  locale: Locale
  segment?: UserSegment
  completedQuizzes: string[]
  unlockedGuides: string[]
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}
