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

interface RegisterFormProps {
  dictionary: any
  locale: Locale
}

export function RegisterForm({ dictionary, locale }: RegisterFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setIsLoading(true)

    try {
      const response = await api.auth.register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        locale,
      })

      if (response.success) {
        router.push(`/${locale}/profile`)
      } else {
        setError(response.error || 'Registration failed')
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
          {dictionary.auth.registerTitle}
        </h1>
        <p className="text-text-secondary mb-8 text-center">
          Join our community and unlock exclusive content
        </p>

        {error && (
          <Alert variant="error" className="mb-6">
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              name="firstName"
              label={dictionary.auth.firstName}
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="lastName"
              label={dictionary.auth.lastName}
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <Input
            type="email"
            name="email"
            label={dictionary.auth.email}
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />

          <Input
            type="password"
            name="password"
            label={dictionary.auth.password}
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />

          <Input
            type="password"
            name="confirmPassword"
            label={dictionary.auth.confirmPassword}
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            isLoading={isLoading}
          >
            {dictionary.auth.signUp}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-text-secondary">
            {dictionary.auth.hasAccount}{' '}
            <Link
              href={`/${locale}/auth/login`}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              {dictionary.auth.signIn}
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
