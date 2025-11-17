'use client'

import React from 'react'
import { Quiz } from '@/types'
import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Steps } from '@/components/ui/Steps'

interface QuizLayoutProps {
  quiz: Quiz
  currentStep: number
  children: React.ReactNode
  dictionary: any
}

export function QuizLayout({ quiz, currentStep, children, dictionary }: QuizLayoutProps) {
  const progress = ((currentStep + 1) / quiz.questions.length) * 100

  const steps = quiz.questions.map((q, index) => ({
    label: `Q${index + 1}`,
    description: undefined,
  }))

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
          {quiz.title}
        </h1>
        <p className="text-lg text-text-secondary mb-6">
          {quiz.description}
        </p>
        <ProgressBar
          value={currentStep + 1}
          max={quiz.questions.length}
          showLabel
          variant="primary"
        />
      </div>

      {/* Steps */}
      <div className="mb-8 hidden md:block">
        <Steps steps={steps} currentStep={currentStep} />
      </div>

      {/* Content */}
      <Card variant="island" className="p-8">
        {children}
      </Card>
    </div>
  )
}
