import type { Metadata } from "next"
import { newsArticles, categoryLabels } from "@/lib/data/news-data"
import NewsDetailClient from "./news-detail-client"

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    id: article.id,
  }))
}

export function generateMetadata({
  params,
}: {
  params: { id: string }
}): Metadata {
  const article = newsArticles.find((a) => a.id === params.id)
  if (!article) {
    return { title: "Article Not Found" }
  }
  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: `${article.title} | MHACTO Bocaue`,
      description: article.summary,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: article.image ? [{ url: article.image }] : undefined,
    },
  }
}

export default function Page({ params }: { params: { id: string } }) {
  const article = newsArticles.find((a) => a.id === params.id)
  return <NewsDetailClient article={article} />
}
