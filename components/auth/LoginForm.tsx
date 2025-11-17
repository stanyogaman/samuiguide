'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Alert } from '@/components/ui/Alert'
import { api } from '@/lib/api'
import { Locale } from '@/i18n/config'

interface LoginFormProps {
  dictionary: any
  locale: Locale
}

export function LoginForm({ dictionary, locale }: LoginFormProps) {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await api.auth.login(email, password)
      if (response.success) {
        router.push(`/${locale}/profile`)
      } else {
        setError(response.error || 'Login failed')
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card variant="island">
      <CardContent className="p-8">
        <h1 className="text-3xl font-bold text-text-primary mb-2 text-center">
          {dictionary.auth.loginTitle}
        </h1>
        <p className="text-text-secondary mb-8 text-center">
          Access your personalized guides and downloads
        </p>

        {error && (
          <Alert variant="error" className="mb-6">
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="email"
            label={dictionary.auth.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />

          <Input
            type="password"
            label={dictionary.auth.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-text-secondary">Remember me</span>
            </label>
            <Link
              href={`/${locale}/auth/forgot-password`}
              className="text-sm text-primary-600 hover:text-primary-700"
            >
              {dictionary.auth.forgotPassword}
            </Link>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            isLoading={isLoading}
          >
            {dictionary.auth.signIn}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-text-secondary">
            {dictionary.auth.noAccount}{' '}
            <Link
              href={`/${locale}/auth/register`}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              {dictionary.auth.signUp}
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
