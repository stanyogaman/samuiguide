'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { QuizLayout } from '@/components/quiz/QuizLayout'
import { QuizQuestion } from '@/components/quiz/QuizQuestion'
import { QuizResult } from '@/components/quiz/QuizResult'
import { useQuiz } from '@/lib/hooks/useQuiz'
import { getQuizBySlug } from '@/lib/data/quizzes'
import { Locale } from '@/i18n/config'

export default function QuizPage() {
  const params = useParams()
  const locale = params?.lang as Locale
  const slug = params?.slug as string

  // Mock dictionary - in production, load this properly
  const dictionary = {
    quiz: {
      previous: 'Previous',
      next: 'Next',
      submit: 'Submit',
      results: {
        title: 'Your Results',
        yourSegment: 'Your Profile',
        recommended: 'Recommended for You',
        downloadGuide: 'Download Free Guide',
        buyGuide: 'Get Full Guide',
        contactUs: 'Contact Us',
        whatsapp: 'Chat on WhatsApp',
        telegram: 'Message on Telegram',
      },
    },
  }

  const quiz = getQuizBySlug(slug)

  if (!quiz) {
    return <div>Quiz not found</div>
  }

  const {
    currentStep,
    answers,
    isSubmitting,
    result,
    nextStep,
    previousStep,
    setAnswer,
    getAnswer,
    submitQuiz,
  } = useQuiz(quiz, locale)

  const currentQuestion = quiz.questions[currentStep]
  const isLastQuestion = currentStep === quiz.questions.length - 1

  const handleNext = async () => {
    if (isLastQuestion) {
      await submitQuiz()
    } else {
      nextStep()
    }
  }

  if (result) {
    return <QuizResult result={result} dictionary={dictionary} locale={locale} />
  }

  return (
    <QuizLayout quiz={quiz} currentStep={currentStep} dictionary={dictionary}>
      <QuizQuestion
        question={currentQuestion}
        value={getAnswer(currentQuestion.id)}
        onChange={(value) => setAnswer(currentQuestion.id, value)}
      />

      <div className="flex items-center justify-between mt-8">
        <Button
          variant="ghost"
          onClick={previousStep}
          disabled={currentStep === 0}
        >
          {dictionary.quiz.previous}
        </Button>

        <Button
          variant="primary"
          onClick={handleNext}
          isLoading={isSubmitting}
        >
          {isLastQuestion ? dictionary.quiz.submit : dictionary.quiz.next}
        </Button>
      </div>
    </QuizLayout>
  )
}
