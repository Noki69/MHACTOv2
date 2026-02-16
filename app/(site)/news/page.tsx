import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { newsArticles, categoryLabels } from "@/lib/data/news-data"

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page header */}
      <section className="border-b border-border bg-card mt-14 pt-8 pb-8 sm:mt-16 sm:pt-12 sm:pb-10 md:mt-20 md:pt-14 lg:mt-28 lg:pt-18 lg:pb-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Button variant="ghost" size="sm" asChild className="mb-6 gap-1 text-muted-foreground">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </Button>
          <div className="text-center animate-fade-in-up">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Stay Informed
            </span>
            <h1 className="mt-2 text-3xl font-bold text-card-foreground md:text-4xl lg:text-5xl">
              News &amp; Blog
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              The latest news, stories, and developments from the Municipality of Bocaue, Bulacan.
            </p>
          </div>
        </div>
      </section>

      {/* News grid */}
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
            {newsArticles.map((article, i) => (
              <article
                key={article.id}
                className={`group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg reveal-on-scroll delay-${(i + 1) * 100}`}
              >
                <Link href={`/news/${article.id}`} className="block">
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge
                        variant="secondary"
                        className="bg-black/60 text-white border-0 text-[10px] uppercase tracking-wider backdrop-blur-sm"
                      >
                        {categoryLabels[article.category]}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="h-3.5 w-3.5" />
                      <time dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span className="text-muted-foreground/50">&middot;</span>
                      <span>{article.author}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-card-foreground group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground line-clamp-3">
                      {article.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Read full story
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
