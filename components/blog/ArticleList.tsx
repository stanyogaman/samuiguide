import React from 'react'
import { BlogPost } from '@/types'
import { ArticleCard } from './ArticleCard'
import { Locale } from '@/i18n/config'

interface ArticleListProps {
  articles: BlogPost[]
  dictionary: any
  locale: Locale
}

export function ArticleList({ articles, dictionary, locale }: ArticleListProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary">No articles found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          dictionary={dictionary}
          locale={locale}
        />
      ))}
    </div>
  )
}
