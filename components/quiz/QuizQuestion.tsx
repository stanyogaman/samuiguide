'use client'

import React from 'react'
import { QuizQuestion as QuizQuestionType } from '@/types'
import { cn } from '@/lib/utils'

interface QuizQuestionProps {
  question: QuizQuestionType
  value: any
  onChange: (value: any) => void
}

export function QuizQuestion({ question, value, onChange }: QuizQuestionProps) {
  const handleSingleChoice = (optionValue: string) => {
    onChange(optionValue)
  }

  const handleMultipleChoice = (optionValue: string) => {
    const currentValues = Array.isArray(value) ? value : []
    if (currentValues.includes(optionValue)) {
      onChange(currentValues.filter((v) => v !== optionValue))
    } else {
      onChange([...currentValues, optionValue])
    }
  }

  const handleRating = (rating: number) => {
    onChange(rating)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-text-primary mb-2">
        {question.question}
        {question.required && <span className="text-accent-500 ml-2">*</span>}
      </h2>
      {question.description && (
        <p className="text-text-secondary mb-6">{question.description}</p>
      )}

      <div className="space-y-3">
        {question.type === 'single' && question.options && (
          <>
            {question.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSingleChoice(option.value)}
                className={cn(
                  'w-full p-4 rounded-xl border-2 text-left transition-all duration-200',
                  value === option.value
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                      value === option.value
                        ? 'border-primary-500 bg-primary-500'
                        : 'border-gray-300'
                    )}
                  >
                    {value === option.value && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-text-primary font-medium">
                    {option.label}
                  </span>
                </div>
              </button>
            ))}
          </>
        )}

        {question.type === 'multiple' && question.options && (
          <>
            {question.options.map((option) => {
              const isSelected = Array.isArray(value) && value.includes(option.value)
              return (
                <button
                  key={option.id}
                  onClick={() => handleMultipleChoice(option.value)}
                  className={cn(
                    'w-full p-4 rounded-xl border-2 text-left transition-all duration-200',
                    isSelected
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        'w-5 h-5 rounded border-2 flex items-center justify-center',
                        isSelected
                          ? 'border-primary-500 bg-primary-500'
                          : 'border-gray-300'
                      )}
                    >
                      {isSelected && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className="text-text-primary font-medium">
                      {option.label}
                    </span>
                  </div>
                </button>
              )
            })}
          </>
        )}

        {question.type === 'rating' && (
          <div className="flex items-center justify-center gap-4 py-8">
            {Array.from({ length: (question.max || 5) - (question.min || 1) + 1 }, (_, i) => {
              const rating = (question.min || 1) + i
              const isSelected = value === rating
              return (
                <button
                  key={rating}
                  onClick={() => handleRating(rating)}
                  className={cn(
                    'w-14 h-14 rounded-full font-bold text-lg transition-all duration-200',
                    isSelected
                      ? 'bg-primary-500 text-white scale-110 shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  )}
                >
                  {rating}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
