import { ApiResponse, PaginatedResponse } from '@/types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

/**
 * Base fetch wrapper with error handling
 */
async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }))
    throw new Error(error.message || `HTTP ${response.status}`)
  }

  return response.json()
}

/**
 * API Client
 */
export const api = {
  // Blog
  blog: {
    getAll: (locale: string, page: number = 1) =>
      fetchAPI<PaginatedResponse<any>>(`/blog?locale=${locale}&page=${page}`),
    getBySlug: (slug: string, locale: string) =>
      fetchAPI<ApiResponse>(`/blog/${slug}?locale=${locale}`),
  },

  // Guides
  guides: {
    getAll: (locale: string, filter?: 'free' | 'paid') =>
      fetchAPI<ApiResponse>(`/guides?locale=${locale}${filter ? `&filter=${filter}` : ''}`),
    getBySlug: (slug: string, locale: string) =>
      fetchAPI<ApiResponse>(`/guides/${slug}?locale=${locale}`),
    unlock: (guideId: string) =>
      fetchAPI<ApiResponse>(`/guides/${guideId}/unlock`, { method: 'POST' }),
  },

  // Quizzes
  quizzes: {
    getAll: (locale: string) =>
      fetchAPI<ApiResponse>(`/quizzes?locale=${locale}`),
    getBySlug: (slug: string, locale: string) =>
      fetchAPI<ApiResponse>(`/quizzes/${slug}?locale=${locale}`),
    submit: (slug: string, answers: any) =>
      fetchAPI<ApiResponse>(`/quizzes/${slug}/submit`, {
        method: 'POST',
        body: JSON.stringify({ answers }),
      }),
  },

  // Districts
  districts: {
    getAll: (locale: string) =>
      fetchAPI<ApiResponse>(`/districts?locale=${locale}`),
    getBySlug: (slug: string, locale: string) =>
      fetchAPI<ApiResponse>(`/districts/${slug}?locale=${locale}`),
  },

  // Auth
  auth: {
    login: (email: string, password: string) =>
      fetchAPI<ApiResponse>('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }),
    register: (data: any) =>
      fetchAPI<ApiResponse>('/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    logout: () =>
      fetchAPI<ApiResponse>('/auth/logout', { method: 'POST' }),
    getProfile: () =>
      fetchAPI<ApiResponse>('/auth/profile'),
  },

  // User
  user: {
    updateProfile: (data: any) =>
      fetchAPI<ApiResponse>('/user/profile', {
        method: 'PUT',
        body: JSON.stringify(data),
      }),
    getDownloads: () =>
      fetchAPI<ApiResponse>('/user/downloads'),
  },
}
