"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { format } from "date-fns"
import { CalendarDays, MapPin, Sparkles, ArrowRight } from "lucide-react"
import { getSpotlightEvent } from "@/lib/data/places-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FeaturedSpotlight() {
  const spotlight = getSpotlightEvent()

  if (!spotlight) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative w-full overflow-hidden rounded-2xl border border-border shadow-xl"
    >
      {/* Background image */}
      {spotlight.image && (
        <div className="absolute inset-0">
          <Image
            src={spotlight.image}
            alt={spotlight.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end p-5 sm:p-8 md:p-12 min-h-[300px] sm:min-h-[380px] lg:min-h-[460px]">
        {/* Spotlight badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-4"
        >
          <Badge
            variant="secondary"
            className="bg-primary/90 text-primary-foreground border-0 px-3 py-1 text-xs font-semibold uppercase tracking-wider shadow-lg backdrop-blur-sm"
          >
            <Sparkles className="mr-1.5 h-3 w-3" />
            Featured Spotlight
          </Badge>
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl leading-tight"
        >
          {spotlight.title}
        </motion.h3>

        {/* Meta info */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-3 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-sm sm:text-base text-white/80"
        >
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-primary" />
            {format(spotlight.date, "EEEE, MMMM d, yyyy")}
          </span>
          {spotlight.location && (
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" />
              {spotlight.location}
            </span>
          )}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 max-w-2xl text-sm text-white/70 leading-relaxed sm:text-base md:text-lg"
        >
          {spotlight.description}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
          >
            <Link href="/inquire">
              Plan Your Visit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/60 hover:text-white"
          >
            <Link href="/contact">Learn More</Link>
          </Button>
        </motion.div>

        {/* Decorative accent line */}
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary via-primary/60 to-transparent" />
      </div>
    </motion.div>
  )
}
