import React from 'react'
import { ProgressBar } from '@/components/ui/ProgressBar'

interface QuizProgressProps {
  currentStep: number
  totalSteps: number
  dictionary: any
}

export function QuizProgress({ currentStep, totalSteps, dictionary }: QuizProgressProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-text-primary">
          {dictionary.quiz.progress
            .replace('{{current}}', String(currentStep + 1))
            .replace('{{total}}', String(totalSteps))}
        </span>
        <span className="text-sm text-text-secondary">
          {Math.round(((currentStep + 1) / totalSteps) * 100)}%
        </span>
      </div>
      <ProgressBar
        value={currentStep + 1}
        max={totalSteps}
        variant="primary"
      />
    </div>
  )
}
