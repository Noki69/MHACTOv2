"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface TimelineEvent {
  year: string
  title: string
  description: string
  detail: string
  side: "left" | "right"
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1580",
    title: "Founding of Bocaue",
    description:
      "One of the oldest municipalities in Bulacan, Bocaue was founded under Spanish colonial administration.",
    detail:
      "The name \"Bocaue\" is believed to derive from the Tagalog word \"bukaw\" — a type of owl once abundant in the marshlands and riverbanks of the area. The Augustinian friars established the parish and organized the early settlement around the Bocaue River, which served as the town's lifeline for trade, fishing, and transportation. The founding set the stage for a community that would endure for over four centuries.",
    side: "left",
  },
  {
    year: "1600s",
    title: "The First Parish Church",
    description:
      "Augustinian missionaries built the first chapel that would evolve into St. Martin of Tours Church.",
    detail:
      "The original structure was a modest chapel of bamboo and nipa palm, erected beside the river to serve the growing Catholic population. As the town prospered, the church was rebuilt in stone with a Baroque façade, hand-carved retablos, and centuries-old wooden santos. It became the spiritual anchor of Bocaue, hosting sacraments, festivals, and the annual procession that would later become the town's most famous tradition.",
    side: "right",
  },
  {
    year: "1787",
    title: "Origin of the Pagoda Festival",
    description:
      "A fisherman discovered a wooden cross floating in the Bocaue River, sparking a devotion that endures to this day.",
    detail:
      "According to local legend, a humble fisherman pulled a small miraculous cross from the waters of the Wawa (river mouth). The townspeople enshrined it as the Holy Cross of Wawa and began an annual fluvial procession — carrying an ornate bamboo-and-cloth pagoda down the river accompanied by decorated boats, music, and prayers. This tradition, the Pagoda sa Wawa, became the spiritual heartbeat of Bocaue and one of the most iconic religious festivals in the Philippines.",
    side: "left",
  },
  {
    year: "1800s",
    title: "Rise of the Pyrotechnics Industry",
    description:
      "Chinese-Filipino craftsmen introduced gunpowder-based fireworks, establishing Bocaue as the fireworks capital of the Philippines.",
    detail:
      "By the late Spanish colonial era, Bocaue families had mastered the art of creating fireworks — from simple sparklers and luces (ground sparks) to towering cascadas and thundering aerial shells. The craft was a closely guarded family secret, passed from parent to child in backyard workshops. Fireworks from Bocaue became the go-to choice for town fiestas, patron saint celebrations, and New Year festivities across the archipelago.",
    side: "right",
  },
  {
    year: "1896",
    title: "The Philippine Revolution",
    description:
      "Bocaueños joined the Katipunan uprising against Spanish rule, gathering at the Old Town Plaza.",
    detail:
      "When Andrés Bonifacio and the Katipunan launched the revolution, Bocaue was among the Bulacan towns that rose in solidarity. Local Katipuneros gathered at the town plaza — the same square where generations had celebrated fiestas — to organize resistance. The town saw skirmishes and acts of bravery that are still commemorated today. The revolution forged a civic identity rooted in resilience and the defense of freedom.",
    side: "left",
  },
  {
    year: "1940s",
    title: "World War II & Rebuilding",
    description:
      "Bocaue endured Japanese occupation and the devastation of liberation, then rebuilt with determination.",
    detail:
      "During the Second World War, Japanese Imperial forces occupied Bocaue and used the town plaza as a garrison. The liberation battles of 1945 damaged many structures, including parts of the historic church. In the post-war years, the community pulled together to reconstruct their town — restoring the church, reopening markets, and reviving the fireworks industry. This period of rebuilding cemented the Bocaueño spirit of perseverance.",
    side: "right",
  },
  {
    year: "1993",
    title: "The Pagoda Tragedy & Renewal",
    description:
      "A devastating pagoda collapse on the river claimed many lives — but the tradition survived and grew stronger.",
    detail:
      "During the 1993 fluvial procession, the towering pagoda structure collapsed mid-river under the weight of hundreds of devotees. The tragedy sent shockwaves through the nation. Rather than abandon the beloved tradition, Bocaueños mourned, reformed safety protocols, and vowed to continue. The festival was restructured with engineering oversight and crowd controls. Today, the event honors both the Holy Cross and the memory of those who perished, making it an even more profound expression of faith and community resilience.",
    side: "left",
  },
  {
    year: "2014",
    title: "The Philippine Arena Opens",
    description:
      "The world's largest indoor arena was inaugurated in Ciudad de Victoria, putting Bocaue on the global map.",
    detail:
      "Built for the Iglesia ni Cristo centennial, the Philippine Arena rose from farmland on the Bocaue–Santa Maria border. With a seating capacity of over 55,000, it was recognized by Guinness World Records as the largest indoor arena on Earth. The complex, Ciudad de Victoria, also includes the Philippine Sports Stadium and an aquatic center. The development brought thousands of jobs and international visitors, transforming Bocaue from a quiet heritage town into a modern tourism destination.",
    side: "right",
  },
  {
    year: "Present",
    title: "Heritage Meets Tomorrow",
    description:
      "MHACTO preserves traditions while fostering contemporary arts, sustainable tourism, and community identity.",
    detail:
      "Today, the Municipal History, Arts, Culture and Tourism Office (MHACTO) leads efforts to document oral histories, support local artisans, and develop heritage trails. Programs include cultural workshops, art exhibits, parol-making contests, and culinary festivals that celebrate Bocaue's kakanin and chicharon traditions. The town balances rapid urbanization with a deep commitment to preserving its identity — ensuring that the stories of the Bukaw, the river, the pagoda, and the fireworks continue to inspire future generations.",
    side: "left",
  },
]

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const isLeft = event.side === "left"

  return (
    <div className="relative flex items-start gap-0 md:gap-8">
      {/* Left content (visible on md+ for left-side items) */}
      <div className={`hidden md:block md:w-1/2 ${isLeft ? "" : "md:order-last"}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`${isLeft ? "text-right pr-8" : "text-left pl-8"}`}
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full text-left group cursor-pointer"
          >
            <div className={`rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/30 ${isLeft ? "text-right" : "text-left"}`}>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-2">
                {event.year}
              </span>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {event.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                {expanded ? "Read less" : "Read more"}
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
              </span>
            </div>
          </button>
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className={`mt-2 rounded-lg bg-muted/50 border border-border p-5 ${isLeft ? "text-right" : "text-left"}`}>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.detail}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Center dot on the line */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 200 }}
          className="relative"
        >
          <div className="h-5 w-5 rounded-full bg-primary shadow-lg shadow-primary/30 ring-4 ring-background" />
          <div className="absolute inset-0 h-5 w-5 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: "3s", animationIterationCount: "3", animationDelay: `${index * 0.5}s` }} />
        </motion.div>
      </div>

      {/* Spacer for the other side (md+) */}
      <div className={`hidden md:block md:w-1/2 ${isLeft ? "md:order-last" : ""}`} />

      {/* Mobile content (visible below md) */}
      <div className="md:hidden pl-12 pb-2 w-full">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full text-left group cursor-pointer"
          >
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-2">
                {event.year}
              </span>
              <h3 className="text-base font-bold text-foreground mb-1">
                {event.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {event.description}
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
                {expanded ? "Read less" : "Read more"}
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
              </span>
            </div>
          </button>
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-2 rounded-lg bg-muted/50 border border-border p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.detail}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export function HistoryArtSection() {
  return (
    <section className="relative bg-background py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Heritage & Culture
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            The Story of Bocaue
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-muted-foreground">
            Trace the journey of a riverside town through centuries of faith, artistry, and resilience — from its founding in 1580 to the world stage today.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {/* Animated glowing line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-primary/60 to-transparent md:-translate-x-px"
          />

          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((event, i) => (
              <TimelineItem key={event.year} event={event} index={i} />
            ))}
          </div>

          {/* End cap */}
          <div className="absolute left-4 md:left-1/2 bottom-0 md:-translate-x-1/2 -translate-x-1/2">
            <div className="h-3 w-3 rounded-full bg-primary/40 ring-4 ring-background" />
          </div>
        </div>
      </div>
    </section>
  )
}
