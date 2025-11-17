import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/types'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatDate, truncate } from '@/lib/utils'
import { Locale } from '@/i18n/config'

interface ArticleCardProps {
  article: BlogPost
  dictionary: any
  locale: Locale
}

export function ArticleCard({ article, dictionary, locale }: ArticleCardProps) {
  return (
    <Link href={`/${locale}/blog/${article.slug}`}>
      <Card hoverable>
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="primary" size="sm">
              {article.category}
            </Badge>
            <span className="text-xs text-text-secondary">
              {article.readTime} {dictionary.blog.readTime.replace('{{minutes}}', String(article.readTime))}
            </span>
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-2 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-text-secondary mb-4 line-clamp-3">
            {truncate(article.excerpt, 120)}
          </p>
          <div className="flex items-center gap-3">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-text-primary">
                {article.author.name}
              </p>
              <p className="text-xs text-text-secondary">
                {formatDate(article.publishedAt, locale)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
