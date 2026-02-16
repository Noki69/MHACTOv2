"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { asset } from "@/lib/utils"

const heroSlides = [
  {
    src: asset("/images/heroes/hero-bocaue.jpg"),
    alt: "Scenic view of Bocaue, Bulacan",
    subtitle: "Municipal History, Arts, Culture & Tourism Office",
    title: "Discover the Heart of",
    highlight: "Bocaue, Bulacan",
    description:
      "Where rich heritage meets vibrant culture — explore centuries of tradition, lively festivals, and the warm hospitality of Bocaue.",
    href: "/places",
  },
  {
    src: asset("/images/places/church-bocaue.jpg"),
    alt: "St. Martin of Tours Parish Church",
    subtitle: "Heritage & Faith",
    title: "St. Martin of Tours",
    highlight: "Parish Church",
    description:
      "A centuries-old landmark standing as a testament to Bocaue's enduring faith and Spanish colonial heritage.",
    href: "/places/st-martin-church",
  },
  {
    src: asset("/images/places/river-festival.jpg"),
    alt: "Bocaue River Festival",
    subtitle: "Festivals & Traditions",
    title: "The Grand",
    highlight: "River Festival",
    description:
      "Experience the vibrant Bocaue River Festival — a spectacular celebration of faith, culture, and community on the water.",
    href: "/places/bocaue-river-festival",
  },
  {
    src: asset("/images/places/philippine-arena.jpg"),
    alt: "Philippine Arena",
    subtitle: "Modern Landmarks",
    title: "The Iconic",
    highlight: "Philippine Arena",
    description:
      "Home to the world's largest indoor arena, Bocaue is where tradition meets modernity on a grand scale.",
    href: "/places/philippine-arena",
  },
  {
    src: asset("/images/places/fireworks.jpg"),
    alt: "Fireworks in Bocaue",
    subtitle: "The Fireworks Capital",
    title: "Bocaue's Famous",
    highlight: "Pyrotechnic Arts",
    description:
      "Known nationwide as the fireworks capital of the Philippines, Bocaue lights up the sky with dazzling displays year-round.",
    href: "/places",
  },
]

const SLIDE_INTERVAL = 6000 // 6 seconds per slide

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Scroll tracking across the full wrapper (hero + spacer)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Image starts zoomed in at 1.35 → zooms out to 1.0 as user scrolls
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.35, 1])
  // Overlay darkens slightly as zoom out happens for contrast
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.4], [0.35, 0.5])
  // Text fades and floats up as user scrolls past
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -60])
  // Scroll indicator fades quickly
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [nextSlide])

  const slide = heroSlides[currentSlide]

  const handleScrollDown = () => {
    if (sectionRef.current) {
      // Scroll to the bottom of the sticky area so the page content reveals
      const scrollTarget = sectionRef.current.offsetHeight - window.innerHeight
      window.scrollTo({ top: scrollTarget, behavior: "smooth" })
    }
  }

  return (
    <section id="home" ref={sectionRef} className="relative z-0 h-[180svh]">
      {/* Sticky hero — stays pinned while the wrapper scrolls */}
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* Background image crossfade with scroll-driven zoom OUT */}
        <motion.div className="absolute inset-0 origin-center" style={{ scale: imageScale }}>
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority={currentSlide === 0}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Dynamic overlay */}
        <motion.div
          className="absolute inset-0 bg-foreground"
          style={{ opacity: overlayOpacity }}
        />

        {/* Hero text — fades out on scroll */}
        <motion.div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center"
          style={{ opacity: textOpacity, y: textY }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-secondary">
                {slide.subtitle}
              </p>
              <h1 className="max-w-3xl text-balance text-3xl font-bold leading-tight text-card sm:text-5xl md:text-6xl lg:text-7xl">
                {slide.title}{" "}
                <span className="text-primary">{slide.highlight}</span>
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-sm text-card/85 sm:text-base md:text-lg lg:text-xl">
                {slide.description}
              </p>
              <Link href={slide.href} className="mt-6 sm:mt-8">
                <Button
                  size="lg"
                  className="group gap-2 rounded-full bg-primary px-6 sm:px-8 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Circle pagination dots */}
        <motion.div
          className="absolute bottom-20 sm:bottom-24 left-1/2 z-20 flex -translate-x-1/2 gap-3"
          style={{ opacity: textOpacity }}
        >
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`rounded-full border-2 transition-all duration-500 ${
                i === currentSlide
                  ? "h-3.5 w-3.5 border-white bg-white scale-110"
                  : "h-3 w-3 border-white/60 bg-transparent hover:border-white hover:bg-white/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </motion.div>

        {/* Scroll down indicator — fades out on scroll */}
        <motion.button
          onClick={handleScrollDown}
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-white/80 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em]">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
