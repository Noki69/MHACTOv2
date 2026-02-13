"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { format } from "date-fns"
import { CalendarDays, MapPin, Megaphone } from "lucide-react"
import { featuredEvents } from "@/lib/places-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturedEventsPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="lg:max-w-sm"
    >
      <Card className="border-border shadow-lg sticky top-32 overflow-hidden">
        <CardHeader className="bg-primary/5 pb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <Megaphone className="h-4 w-4 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">Announcements</CardTitle>
              <p className="text-xs text-muted-foreground">Featured events</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-4 max-h-96 overflow-y-auto">
          {featuredEvents.slice(0, 3).map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="pb-4 border-b border-border last:border-b-0 last:pb-0"
            >
              {event.image && (
                <div className="relative h-32 w-full overflow-hidden rounded-lg mb-2">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h4 className="font-semibold text-sm text-foreground mb-1">
                {event.title}
              </h4>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-3 w-3" />
                  {format(event.date, "MMM dd, yyyy")}
                </div>
                {event.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {event.location}
                  </div>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {event.description}
              </p>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}
