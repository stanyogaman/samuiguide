import { Quiz } from '@/types'

/**
 * Quiz configuration data
 * In production, this would be fetched from a CMS or database
 */

export const quizzes: Record<string, Quiz> = {
  'where-to-live': {
    id: 'where-to-live',
    slug: 'where-to-live',
    title: 'Where Should You Live on Samui?',
    description: 'Find the perfect district that matches your lifestyle and preferences',
    coverImage: '/images/quizzes/where-to-live.jpg',
    estimatedTime: 5,
    locale: 'en',
    questions: [
      {
        id: 'q1',
        type: 'single',
        question: 'What best describes your primary reason for moving to Samui?',
        required: true,
        options: [
          {
            id: 'a1',
            label: 'Retirement and relaxation',
            value: 'retirement',
            weight: { retiree: 3, tourist: 1 },
          },
          {
            id: 'a2',
            label: 'Remote work and digital nomad lifestyle',
            value: 'remote-work',
            weight: { 'digital-nomad': 3, expat: 1 },
          },
          {
            id: 'a3',
            label: 'Business opportunities',
            value: 'business',
            weight: { investor: 3, expat: 2 },
          },
          {
            id: 'a4',
            label: 'Vacation and short-term stay',
            value: 'vacation',
            weight: { tourist: 3 },
          },
        ],
      },
      {
        id: 'q2',
        type: 'multiple',
        question: 'Which amenities are most important to you?',
        description: 'Select all that apply',
        required: true,
        options: [
          {
            id: 'b1',
            label: 'High-speed internet and coworking spaces',
            value: 'internet',
            weight: { 'digital-nomad': 2 },
          },
          {
            id: 'b2',
            label: 'Shopping malls and international stores',
            value: 'shopping',
            weight: { expat: 2, tourist: 1 },
          },
          {
            id: 'b3',
            label: 'Quiet beaches and nature',
            value: 'nature',
            weight: { retiree: 2, tourist: 1 },
          },
          {
            id: 'b4',
            label: 'Nightlife and entertainment',
            value: 'nightlife',
            weight: { tourist: 2, 'digital-nomad': 1 },
          },
          {
            id: 'b5',
            label: 'International schools',
            value: 'schools',
            weight: { expat: 3 },
          },
        ],
      },
      {
        id: 'q3',
        type: 'rating',
        question: 'How important is proximity to the airport?',
        min: 1,
        max: 5,
        required: true,
      },
      {
        id: 'q4',
        type: 'single',
        question: 'What\'s your preferred accommodation style?',
        required: true,
        options: [
          {
            id: 'c1',
            label: 'Luxury villa with pool',
            value: 'luxury-villa',
            weight: { investor: 2, retiree: 2 },
          },
          {
            id: 'c2',
            label: 'Modern condo with amenities',
            value: 'condo',
            weight: { 'digital-nomad': 2, expat: 2 },
          },
          {
            id: 'c3',
            label: 'Beachfront resort',
            value: 'resort',
            weight: { tourist: 3 },
          },
          {
            id: 'c4',
            label: 'Traditional Thai house',
            value: 'thai-house',
            weight: { expat: 1, retiree: 1 },
          },
        ],
      },
      {
        id: 'q5',
        type: 'rating',
        question: 'How social are you? (1 = prefer solitude, 5 = very social)',
        min: 1,
        max: 5,
        required: true,
      },
    ],
  },

  'should-you-invest': {
    id: 'should-you-invest',
    slug: 'should-you-invest',
    title: 'Should You Invest in Samui Property?',
    description: 'Discover if property investment in Samui aligns with your goals',
    coverImage: '/images/quizzes/investment.jpg',
    estimatedTime: 7,
    locale: 'en',
    questions: [
      {
        id: 'q1',
        type: 'single',
        question: 'What is your primary investment goal?',
        required: true,
        options: [
          {
            id: 'a1',
            label: 'Long-term capital appreciation',
            value: 'appreciation',
          },
          {
            id: 'a2',
            label: 'Rental income',
            value: 'rental',
          },
          {
            id: 'a3',
            label: 'Personal use + occasional rental',
            value: 'mixed',
          },
          {
            id: 'a4',
            label: 'Retirement home',
            value: 'retirement',
          },
        ],
      },
      {
        id: 'q2',
        type: 'single',
        question: 'What\'s your budget range?',
        required: true,
        options: [
          {
            id: 'b1',
            label: 'Under 5 million THB',
            value: 'under-5m',
          },
          {
            id: 'b2',
            label: '5-10 million THB',
            value: '5-10m',
          },
          {
            id: 'b3',
            label: '10-20 million THB',
            value: '10-20m',
          },
          {
            id: 'b4',
            label: 'Over 20 million THB',
            value: 'over-20m',
          },
        ],
      },
      {
        id: 'q3',
        type: 'rating',
        question: 'How familiar are you with Thai property law?',
        min: 1,
        max: 5,
        required: true,
      },
    ],
  },

  'villa-safety-check': {
    id: 'villa-safety-check',
    slug: 'villa-safety-check',
    title: 'Is This Villa Safe to Rent?',
    description: 'Learn to identify red flags and ensure a safe rental experience',
    coverImage: '/images/quizzes/safety.jpg',
    estimatedTime: 4,
    locale: 'en',
    questions: [
      {
        id: 'q1',
        type: 'single',
        question: 'Does the listing have verified reviews from previous guests?',
        required: true,
        options: [
          {
            id: 'a1',
            label: 'Yes, many verified reviews',
            value: 'yes-verified',
          },
          {
            id: 'a2',
            label: 'Some reviews, but not verified',
            value: 'some-unverified',
          },
          {
            id: 'a3',
            label: 'No reviews',
            value: 'no-reviews',
          },
        ],
      },
      {
        id: 'q2',
        type: 'multiple',
        question: 'Which safety features does the villa have?',
        description: 'Select all that apply',
        required: true,
        options: [
          {
            id: 'b1',
            label: 'Security cameras',
            value: 'cameras',
          },
          {
            id: 'b2',
            label: '24/7 security guard',
            value: 'guard',
          },
          {
            id: 'b3',
            label: 'Gated community',
            value: 'gated',
          },
          {
            id: 'b4',
            label: 'Safe box',
            value: 'safe',
          },
          {
            id: 'b5',
            label: 'First aid kit',
            value: 'first-aid',
          },
        ],
      },
    ],
  },
}

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes[slug]
}

export function getAllQuizzes(): Quiz[] {
  return Object.values(quizzes)
}
