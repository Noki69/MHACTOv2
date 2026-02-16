"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, CalendarDays, MapPin, Megaphone, Clock, Tag } from "lucide-react"
import { format } from "date-fns"
import {
  attractions,
  featuredEvents,
  getEventDates,
  getPastEvents,
  getUpcomingEvents,
  getCategories,
  getAttractionsByCategory,
  categoryLabels,
  type PlaceCategory,
} from "@/lib/data/places-data"
import { FeaturedSpotlight } from "@/components/sections/featured-spotlight"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const eventDates = getEventDates()
const today = new Date()

export default function PlacesPage() {
  const upcoming = getUpcomingEvents(today)
  const past = getPastEvents(today)
  const categories = getCategories()
  const [activeCategory, setActiveCategory] = useState<PlaceCategory | "all">("all")
  const [showAll, setShowAll] = useState(false)

  const filtered = getAttractionsByCategory(activeCategory)
  const INITIAL_COUNT = 4
  const displayed = showAll ? filtered : filtered.slice(0, INITIAL_COUNT)

  return (
    <main className="min-h-screen bg-background">

      {/* Page header */}
      <section className="border-b border-border bg-card mt-14 pt-8 pb-8 sm:mt-16 sm:pt-12 sm:pb-10 md:mt-20 md:pt-14 lg:mt-28 lg:pt-18 lg:pb-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Button variant="ghost" size="sm" asChild className="mb-6 gap-1 text-muted-foreground">
            <Link href="/#attractions">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </Button>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Explore
            </span>
            <h1 className="mt-2 text-3xl font-bold text-card-foreground md:text-4xl lg:text-5xl">
              Bocaue Overview
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              A complete guide to tourist spots, featured events, and the events calendar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Announcements – Featured events */}
      <section className="border-y border-border bg-muted/40 py-10 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-10"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Megaphone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
                  Announcements
                </h2>
                <p className="text-muted-foreground">Featured events &amp; spotlight</p>
              </div>
            </div>
          </motion.div>

          {/* Featured Spotlight */}
          <FeaturedSpotlight />

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 sm:mt-10 max-w-3xl space-y-4 text-sm sm:text-base text-muted-foreground"
          >
            <p>
              Stay updated with the latest events and announcements happening in Bocaue. From cultural celebrations to special events, discover what's happening in our town.
            </p>
            <p>
              Don't miss out on the vibrant activities and festivals that bring our community together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All places overview */}
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-8 sm:mb-10 text-center"
          >
            <h2 className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
              All Tourist Spots in Bocaue
            </h2>
            <p className="mt-2 text-muted-foreground">
              Discover every must-see place in town — from heritage sites and nature walks to festivals, artisan crafts, and cuisine.
            </p>
          </motion.div>

          {/* Category filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 sm:mb-8 flex flex-wrap justify-center gap-2"
          >
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => { setActiveCategory("all"); setShowAll(false) }}
            >
              All
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => { setActiveCategory(cat); setShowAll(false) }}
              >
                {categoryLabels[cat]}
              </Button>
            ))}
          </motion.div>

          {/* Place cards */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {displayed.map((place, i) => (
                <motion.div
                  key={place.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  <Link
                    href={`/places/${place.id}`}
                    className="group block overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={place.image}
                        alt={place.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-black/60 text-white border-0 text-[10px] uppercase tracking-wider backdrop-blur-sm">
                          {categoryLabels[place.category]}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-base sm:text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {place.title}
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-muted-foreground line-clamp-2">
                        {place.description}
                      </p>
                      <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                        {place.established && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Est. {place.established}
                          </span>
                        )}
                        {place.location && (
                          <span className="flex items-center gap-1 truncate">
                            <MapPin className="h-3 w-3 shrink-0" />
                            <span className="truncate">{place.location.split(",")[0]}</span>
                          </span>
                        )}
                      </div>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                        Read the full story
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* View All button */}
          {!showAll && filtered.length > INITIAL_COUNT && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 text-center"
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full gap-2"
                onClick={() => setShowAll(true)}
              >
                View All {filtered.length} Places
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
          {showAll && filtered.length > INITIAL_COUNT && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-10 text-center"
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
                onClick={() => setShowAll(false)}
              >
                Show fewer
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Events calendar + past & future lists */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-10 flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <CalendarDays className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Events Calendar
              </h2>
              <p className="text-muted-foreground">
                Past and upcoming events in Bocaue
              </p>
            </div>
          </motion.div>

          <div className="grid gap-8 lg:gap-10 grid-cols-1 lg:grid-cols-3">
            {/* Calendar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Calendar</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Days with events are highlighted.
                  </p>
                </CardHeader>
                <CardContent className="flex justify-center overflow-x-auto">
                  <Calendar
                    mode="single"
                    defaultMonth={today}
                    modifiers={{
                      event: eventDates,
                    }}
                    modifiersClassNames={{
                      event: "bg-primary/20 text-primary font-medium ring-1 ring-primary/30",
                    }}
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Upcoming & Past events lists */}
            <div className="space-y-8 lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Upcoming events
                </h3>
                <div className="space-y-3">
                  {upcoming.length === 0 ? (
                    <p className="rounded-lg border border-dashed border-border bg-muted/30 p-4 text-sm text-muted-foreground">
                      No upcoming events at the moment. Check back later.
                    </p>
                  ) : (
                    upcoming.map((event) => (
                      <Card
                        key={event.id}
                        className="border-border bg-card"
                      >
                        <CardContent className="flex flex-wrap items-start justify-between gap-2 p-4 sm:flex-nowrap">
                          <div>
                            <p className="font-medium text-card-foreground">
                              {event.title}
                            </p>
                            <p className="mt-0.5 text-sm text-muted-foreground">
                              {format(event.date, "EEEE, MMMM d, yyyy")}
                              {event.location && ` · ${event.location}`}
                            </p>
                          </div>
                          <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                            Upcoming
                          </span>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Past events
                </h3>
                <div className="space-y-3">
                  {past.length === 0 ? (
                    <p className="rounded-lg border border-dashed border-border bg-muted/30 p-4 text-sm text-muted-foreground">
                      No past events listed.
                    </p>
                  ) : (
                    past.map((event) => (
                      <Card
                        key={event.id}
                        className="border-border bg-muted/20"
                      >
                        <CardContent className="p-4">
                          <p className="font-medium text-card-foreground">
                            {event.title}
                          </p>
                          <p className="mt-0.5 text-sm text-muted-foreground">
                            {format(event.date, "EEEE, MMMM d, yyyy")}
                            {event.location && ` · ${event.location}`}
                          </p>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <p className="text-muted-foreground">
            Plan your visit to Bocaue.{" "}
            <Link
              href="/inquire"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Submit an Inquiry
            </Link>{" "}
            or{" "}
            <Link
              href="/#contact"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
