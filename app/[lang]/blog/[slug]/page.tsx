import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { MainLayout } from '@/components/layout/MainLayout'
import { ArticleContent } from '@/components/blog/ArticleContent'
import { notFound } from 'next/navigation'
import { getArticleBySlug } from '@/data/mockArticles'

export default async function BlogArticlePage({
  params,
}: {
  params: { lang: Locale; slug: string }
}) {
  const dictionary = await getDictionary(params.lang)

  // In production, fetch article by slug from API
  // const article = await api.blog.getBySlug(params.slug, params.lang)
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <MainLayout locale={params.lang}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ArticleContent
          article={article}
          dictionary={dictionary}
          locale={params.lang}
        />
      </div>
    </MainLayout>
  )
}
