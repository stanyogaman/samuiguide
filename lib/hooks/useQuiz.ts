'use client'

import { useState, useCallback } from 'react'
import { Quiz, QuizAnswer, QuizResult } from '@/types'
import { api } from '@/lib/api'

interface UseQuizReturn {
  currentStep: number
  answers: QuizAnswer[]
  isSubmitting: boolean
  result: QuizResult | null
  goToStep: (step: number) => void
  nextStep: () => void
  previousStep: () => void
  setAnswer: (questionId: string, value: any) => void
  getAnswer: (questionId: string) => any
  submitQuiz: () => Promise<void>
  resetQuiz: () => void
}

export function useQuiz(quiz: Quiz, locale: string): UseQuizReturn {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswer[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<QuizResult | null>(null)

  const goToStep = useCallback((step: number) => {
    if (step >= 0 && step < quiz.questions.length) {
      setCurrentStep(step)
    }
  }, [quiz.questions.length])

  const nextStep = useCallback(() => {
    goToStep(currentStep + 1)
  }, [currentStep, goToStep])

  const previousStep = useCallback(() => {
    goToStep(currentStep - 1)
  }, [currentStep, goToStep])

  const setAnswer = useCallback((questionId: string, value: any) => {
    setAnswers((prev) => {
      const existing = prev.findIndex((a) => a.questionId === questionId)
      if (existing >= 0) {
        const updated = [...prev]
        updated[existing] = { questionId, value }
        return updated
      }
      return [...prev, { questionId, value }]
    })
  }, [])

  const getAnswer = useCallback((questionId: string) => {
    return answers.find((a) => a.questionId === questionId)?.value
  }, [answers])

  const submitQuiz = useCallback(async () => {
    setIsSubmitting(true)
    try {
      const response = await api.quizzes.submit(quiz.slug, answers)
      if (response.success && response.data) {
        setResult(response.data)
      }
    } catch (error) {
      console.error('Failed to submit quiz:', error)
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }, [quiz.slug, answers])

  const resetQuiz = useCallback(() => {
    setCurrentStep(0)
    setAnswers([])
    setResult(null)
  }, [])

  return {
    currentStep,
    answers,
    isSubmitting,
    result,
    goToStep,
    nextStep,
    previousStep,
    setAnswer,
    getAnswer,
    submitQuiz,
    resetQuiz,
  }
}
