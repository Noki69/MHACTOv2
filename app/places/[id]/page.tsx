"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Clock, MapPin, Phone, CalendarDays, Sparkles, Tag } from "lucide-react"

import { attractions, categoryLabels, type Place } from "@/lib/places-data"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PlaceDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const [place, setPlace] = useState<Place | undefined>(undefined)

  useEffect(() => {
    const id = params?.id as string
    const foundPlace = attractions.find((p) => p.id === id)
    if (!foundPlace) {
      router.push("/places")
    } else {
      setPlace(foundPlace)
    }
  }, [params, router])

  if (!place) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page header */}
      <section className="border-b border-border bg-card mt-14 pt-8 pb-8 sm:mt-16 sm:pt-12 sm:pb-10 md:mt-20 md:pt-14 lg:mt-28 lg:pt-18 lg:pb-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Button variant="ghost" size="sm" asChild className="mb-6 gap-1 text-muted-foreground">
            <Link href="/places">
              <ArrowLeft className="h-4 w-4" />
              Back to Places & Events
            </Link>
          </Button>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Place Details
            </span>
            <h1 className="mt-2 text-3xl font-bold text-card-foreground md:text-4xl lg:text-5xl">
              {place.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Image and main description */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <div className="relative h-72 w-full overflow-hidden md:h-[28rem]">
                  <Image
                    src={place.image}
                    alt={place.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-black/60 text-white border-0 text-xs uppercase tracking-wider backdrop-blur-sm">
                      {categoryLabels[place.category]}
                    </Badge>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                  About {place.title}
                </h2>
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  {place.fullDescription || place.description}
                </p>
              </motion.div>

              {/* The Story / History */}
              {place.story && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-4 rounded-xl border border-border bg-muted/30 p-6"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">
                      The Story
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                    {place.story}
                  </p>
                </motion.div>
              )}

              {/* Highlights */}
              {place.highlights && place.highlights.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="space-y-3"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    Highlights
                  </h3>
                  <ul className="space-y-2">
                    {place.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="mt-0.5 text-primary font-bold shrink-0">✦</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Sidebar with details */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4 lg:sticky lg:top-28"
              >
                {place.established && (
                  <Card className="border-border">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <CalendarDays className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground">
                            Established
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {place.established}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card className="border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Tag className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground">
                          Category
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {categoryLabels[place.category]}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {place.location && (
                  <Card className="border-border">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground">
                            Location
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {place.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {place.hours && (
                  <Card className="border-border">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground">
                            Hours
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {place.hours}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {place.contact && (
                  <Card className="border-border">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground">
                            Contact
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {place.contact}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <p className="text-muted-foreground">
            Explore more places in Bocaue.{" "}
            <Link
              href="/places"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              View all places
            </Link>
            {" "}or{" "}
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
