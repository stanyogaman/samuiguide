import React from 'react'
import Image from 'next/image'
import { BlogPost } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'
import { Locale } from '@/i18n/config'

interface ArticleContentProps {
  article: BlogPost
  dictionary: any
  locale: Locale
}

export function ArticleContent({ article, dictionary, locale }: ArticleContentProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Cover Image */}
      <div className="relative h-96 w-full overflow-hidden rounded-2xl mb-8">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Meta */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="primary">{article.category}</Badge>
          {article.tags.map((tag) => (
            <Badge key={tag} variant="default" size="sm">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
          {article.title}
        </h1>
        <p className="text-xl text-text-secondary mb-6">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-4">
          <Image
            src={article.author.avatar}
            alt={article.author.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-text-primary">
              {article.author.name}
            </p>
            <p className="text-sm text-text-secondary">
              {dictionary.blog.publishedOn.replace('{{date}}', formatDate(article.publishedAt, locale))} •{' '}
              {article.readTime} {dictionary.blog.readTime.replace('{{minutes}}', String(article.readTime))}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className="prose prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-text-primary
          prose-p:text-text-secondary prose-p:leading-relaxed
          prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-text-primary
          prose-img:rounded-xl prose-img:shadow-card
          prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  )
}
