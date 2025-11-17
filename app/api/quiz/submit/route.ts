import { NextRequest, NextResponse } from 'next/server'
import { QuizAnswer, QuizResult, UserSegment } from '@/types'

/**
 * Quiz submission endpoint
 * Calculates user segment based on quiz answers and returns personalized results
 */
export async function POST(request: NextRequest) {
  try {
    const { answers } = await request.json()

    // Calculate segment scores based on answers
    const scores = calculateSegmentScores(answers)
    const segment = determineSegment(scores)

    // Mock result - in production, fetch actual guide and districts from database
    const result: QuizResult = {
      segment,
      score: scores,
      recommendedGuide: {
        id: '1',
        slug: 'ultimate-samui-living-guide',
        title: 'Ultimate Guide to Living in Samui',
        description: 'Everything you need to know about relocating and living in Koh Samui.',
        coverImage: '/images/guides/living-guide.jpg',
        price: 0,
        isPaid: false,
        category: 'living',
        features: ['Visa requirements', 'Healthcare', 'Cost of living', 'Best neighborhoods'],
        locale: 'en',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      recommendedDistricts: [
        {
          id: '1',
          slug: 'chaweng',
          name: 'Chaweng',
          description: 'Vibrant beach town with excellent amenities',
          coverImage: '/images/districts/chaweng.jpg',
          images: [],
          locale: 'en',
          population: 25000,
          averageRent: 15000,
          attractions: ['Chaweng Beach', 'Central Festival'],
          bestFor: ['Nightlife', 'Shopping'],
          coordinates: { lat: 9.5379, lng: 100.0629 },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      description: getSegmentDescription(segment),
    }

    return NextResponse.json({
      success: true,
      data: result,
    })
  } catch (error) {
    console.error('Quiz submission error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process quiz submission',
      },
      { status: 500 }
    )
  }
}

function calculateSegmentScores(answers: QuizAnswer[]): Record<string, number> {
  const scores: Record<string, number> = {
    tourist: 0,
    expat: 0,
    investor: 0,
    'digital-nomad': 0,
    retiree: 0,
  }

  answers.forEach((answer) => {
    // Simple scoring algorithm - in production, use actual quiz weights
    if (typeof answer.value === 'string') {
      // Assign scores based on answer patterns
      if (answer.value.includes('vacation') || answer.value.includes('resort')) {
        scores.tourist += 2
      }
      if (answer.value.includes('remote') || answer.value.includes('internet')) {
        scores['digital-nomad'] += 2
      }
      if (answer.value.includes('invest') || answer.value.includes('business')) {
        scores.investor += 2
      }
      if (answer.value.includes('retirement') || answer.value.includes('retire')) {
        scores.retiree += 2
      }
    }
  })

  return scores
}

function determineSegment(scores: Record<string, number>): UserSegment {
  let maxScore = 0
  let topSegment: UserSegment = 'tourist'

  Object.entries(scores).forEach(([segment, score]) => {
    if (score > maxScore) {
      maxScore = score
      topSegment = segment as UserSegment
    }
  })

  return topSegment
}

function getSegmentDescription(segment: UserSegment): string {
  const descriptions: Record<UserSegment, string> = {
    tourist: 'You\'re a vacation seeker looking to experience the best of Samui\'s beaches, activities, and nightlife.',
    expat: 'You\'re interested in making Samui your long-term home, balancing work, lifestyle, and community.',
    investor: 'You see the potential in Samui\'s property market and are looking for investment opportunities.',
    'digital-nomad': 'You\'re a remote worker seeking the perfect balance of tropical paradise and reliable infrastructure.',
    retiree: 'You\'re planning your retirement in paradise, prioritizing relaxation, healthcare, and quality of life.',
  }

  return descriptions[segment] || descriptions.tourist
}
