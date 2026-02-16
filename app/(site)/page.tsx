import dynamic from "next/dynamic"
import { HeroSection } from "@/components/sections/hero-section"

// Lazy-load below-the-fold sections to reduce initial bundle size
const HistoryArtSection = dynamic(
  () => import("@/components/sections/history-art-section").then((m) => m.HistoryArtSection),
  { loading: () => <SectionSkeleton /> }
)
const PlacesCarousel = dynamic(
  () => import("@/components/sections/places-carousel").then((m) => m.PlacesCarousel),
  { loading: () => <SectionSkeleton /> }
)
const AttractionsSection = dynamic(
  () => import("@/components/sections/attractions-section").then((m) => m.AttractionsSection),
  { loading: () => <SectionSkeleton /> }
)
const NewsSection = dynamic(
  () => import("@/components/sections/news-section").then((m) => m.NewsSection),
  { loading: () => <SectionSkeleton /> }
)

function SectionSkeleton() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="h-6 w-48 animate-pulse rounded bg-muted" />
          <div className="h-4 w-72 animate-pulse rounded bg-muted" />
          <div className="mt-8 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-64 animate-pulse rounded-xl bg-muted" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HistoryArtSection />
      <PlacesCarousel />
      <AttractionsSection />
      <NewsSection />
    </main>
  )
}
