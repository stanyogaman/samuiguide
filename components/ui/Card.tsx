import React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'island'
  hoverable?: boolean
}

export function Card({
  variant = 'default',
  hoverable = false,
  className,
  children,
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-white border border-gray-200 shadow-card',
    glass: 'bg-glass backdrop-blur-lg border border-white/20',
    island: 'bg-white shadow-island border-0',
  }

  return (
    <div
      className={cn(
        'rounded-2xl overflow-hidden transition-all duration-300',
        variants[variant],
        hoverable && 'hover:shadow-card-hover hover:scale-[1.02] cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('px-6 py-5 border-b border-gray-200', className)}
      {...props}
    />
  )
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-6 py-5', className)} {...props} />
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('px-6 py-4 border-t border-gray-200 bg-gray-50', className)}
      {...props}
    />
  )
}
