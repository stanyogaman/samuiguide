import React from 'react'
import { AdminLayout } from '@/components/layout/AdminLayout'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'

export default function AdminDashboardPage() {
  const stats = [
    { label: 'Total Articles', value: '24', change: '+3 this week', icon: '📝' },
    { label: 'Total Guides', value: '12', change: '+1 this month', icon: '📚' },
    { label: 'Quiz Completions', value: '1,234', change: '+156 this week', icon: '✅' },
    { label: 'Active Users', value: '567', change: '+45 this week', icon: '👥' },
  ]

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Dashboard</h1>
          <p className="text-text-secondary mt-1">Welcome back! Here's what's happening.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-text-secondary">{stat.label}</p>
                    <p className="text-3xl font-bold text-text-primary mt-1">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                  </div>
                  <div className="text-4xl">{stat.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold text-text-primary">Quick Actions</h2>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="/admin/blog/new"
                className="flex items-center gap-3 p-4 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors"
              >
                <span className="text-2xl">✏️</span>
                <div>
                  <p className="font-semibold text-text-primary">New Article</p>
                  <p className="text-sm text-text-secondary">Create blog post</p>
                </div>
              </a>
              <a
                href="/admin/guides/new"
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary-50 hover:bg-secondary-100 transition-colors"
              >
                <span className="text-2xl">📖</span>
                <div>
                  <p className="font-semibold text-text-primary">New Guide</p>
                  <p className="text-sm text-text-secondary">Create guide</p>
                </div>
              </a>
              <a
                href="/admin/districts/new"
                className="flex items-center gap-3 p-4 rounded-xl bg-accent-50 hover:bg-accent-100 transition-colors"
              >
                <span className="text-2xl">🗺️</span>
                <div>
                  <p className="font-semibold text-text-primary">New District</p>
                  <p className="text-sm text-text-secondary">Add district</p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold text-text-primary">Recent Activity</h2>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {[
                { action: 'Published article', title: 'Best Beaches in Samui', time: '2 hours ago' },
                { action: 'Updated guide', title: 'Living in Samui', time: '5 hours ago' },
                { action: 'New user registered', title: 'john@example.com', time: '1 day ago' },
                { action: 'Quiz completed', title: 'Where to Live Quiz', time: '1 day ago' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-medium text-text-primary">{activity.action}</p>
                    <p className="text-sm text-text-secondary">{activity.title}</p>
                  </div>
                  <span className="text-sm text-text-secondary">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
