'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AdminLayout } from '@/components/layout/AdminLayout'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Alert } from '@/components/ui/Alert'

export default function NewArticlePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'travel',
    tags: '',
    coverImage: '',
    status: 'draft',
    locale: 'en',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Auto-generate slug from title
      ...(name === 'title' ? { slug: value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') } : {}),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      // In production, this would call an API endpoint
      const response = await fetch('/api/admin/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess(true)
        setTimeout(() => {
          router.push('/admin/blog')
        }, 1500)
      } else {
        setError('Failed to create article')
      }
    } catch (err) {
      setError('An error occurred while creating the article')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-text-primary">New Article</h1>
            <p className="text-text-secondary mt-1">Create a new blog post</p>
          </div>
          <Button variant="ghost" onClick={() => router.back()}>
            Cancel
          </Button>
        </div>

        {error && (
          <Alert variant="error">{error}</Alert>
        )}

        {success && (
          <Alert variant="success">Article created successfully! Redirecting...</Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-text-primary">Basic Information</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Enter article title"
              />

              <Input
                label="Slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                required
                placeholder="article-url-slug"
                helperText="URL-friendly version of the title"
              />

              <Textarea
                label="Excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                required
                placeholder="Brief description of the article"
                rows={3}
              />

              <Input
                label="Cover Image URL"
                name="coverImage"
                value={formData.coverImage}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />
            </CardContent>
          </Card>

          {/* Content */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-text-primary">Content</h2>
            </CardHeader>
            <CardContent>
              <Textarea
                label="Article Content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                placeholder="Write your article content here. You can use HTML tags for formatting."
                rows={15}
                className="font-mono text-sm"
              />
              <p className="text-sm text-text-secondary mt-2">
                Supports HTML tags: &lt;h2&gt;, &lt;h3&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;a&gt;
              </p>
            </CardContent>
          </Card>

          {/* Metadata */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-text-primary">Metadata</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  label="Category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  options={[
                    { value: 'travel', label: 'Travel Tips' },
                    { value: 'living', label: 'Living in Samui' },
                    { value: 'food', label: 'Food & Dining' },
                    { value: 'activities', label: 'Activities' },
                    { value: 'investment', label: 'Investment' },
                    { value: 'culture', label: 'Culture' },
                  ]}
                />

                <Select
                  label="Language"
                  name="locale"
                  value={formData.locale}
                  onChange={handleChange}
                  options={[
                    { value: 'en', label: 'English' },
                    { value: 'de', label: 'Deutsch' },
                    { value: 'fr', label: 'Français' },
                    { value: 'ru', label: 'Русский' },
                  ]}
                />
              </div>

              <Input
                label="Tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="beaches, travel, tips (comma separated)"
                helperText="Separate tags with commas"
              />

              <Select
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                options={[
                  { value: 'draft', label: 'Draft' },
                  { value: 'published', label: 'Published' },
                ]}
              />
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4">
            <Button type="button" variant="ghost" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="secondary"
              onClick={() => setFormData((prev) => ({ ...prev, status: 'draft' }))}
            >
              Save as Draft
            </Button>
            <Button
              type="submit"
              variant="primary"
              isLoading={isLoading}
              onClick={() => setFormData((prev) => ({ ...prev, status: 'published' }))}
            >
              Publish Article
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  )
}
