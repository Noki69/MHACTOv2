"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HistoryArtSection } from "@/components/history-art-section"
import { PlacesCarousel } from "@/components/places-carousel"
import { AttractionsSection } from "@/components/attractions-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HistoryArtSection />
      <PlacesCarousel />
      <AttractionsSection />
      <Footer />
    </main>
  )
}
