"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { HistoryArtSection } from "@/components/sections/history-art-section"
import { PlacesCarousel } from "@/components/sections/places-carousel"
import { AttractionsSection } from "@/components/sections/attractions-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HistoryArtSection />
      <PlacesCarousel />
      <AttractionsSection />
    </main>
  )
}
