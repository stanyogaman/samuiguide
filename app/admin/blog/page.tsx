import React from 'react'
import Link from 'next/link'
import { AdminLayout } from '@/components/layout/AdminLayout'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

// Mock blog data
const mockArticles = [
  {
    id: '1',
    title: 'Best Beaches in Koh Samui',
    slug: 'best-beaches-samui',
    status: 'published',
    author: 'Sarah Johnson',
    publishedAt: '2024-01-15',
    views: 1234,
  },
  {
    id: '2',
    title: 'Digital Nomad Life in Samui',
    slug: 'digital-nomad-samui',
    status: 'published',
    author: 'Mike Chen',
    publishedAt: '2024-01-10',
    views: 892,
  },
  {
    id: '3',
    title: 'Property Investment Guide 2024',
    slug: 'property-investment-2024',
    status: 'draft',
    author: 'Sarah Johnson',
    publishedAt: null,
    views: 0,
  },
]

export default function AdminBlogPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-text-primary">Blog Articles</h1>
            <p className="text-text-secondary mt-1">Manage your blog content</p>
          </div>
          <Link href="/admin/blog/new">
            <Button variant="primary">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Article
            </Button>
          </Link>
        </div>

        {/* Articles Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Title</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Author</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Views</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Date</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-text-primary">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {mockArticles.map((article) => (
                    <tr key={article.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <p className="font-medium text-text-primary">{article.title}</p>
                        <p className="text-sm text-text-secondary">/{article.slug}</p>
                      </td>
                      <td className="px-6 py-4 text-text-secondary">{article.author}</td>
                      <td className="px-6 py-4">
                        <Badge variant={article.status === 'published' ? 'success' : 'warning'}>
                          {article.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-text-secondary">{article.views.toLocaleString()}</td>
                      <td className="px-6 py-4 text-text-secondary">
                        {article.publishedAt || 'Draft'}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link href={`/admin/blog/${article.id}/edit`}>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                              <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                          </Link>
                          <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
