import { asset } from "@/lib/utils"

export interface NewsArticle {
  id: string
  title: string
  summary: string
  content: string
  image: string
  date: string
  category: "competition" | "project" | "community" | "festival"
  author: string
}

export const categoryLabels: Record<NewsArticle["category"], string> = {
  competition: "Competition",
  project: "Development",
  community: "Community",
  festival: "Festival",
}

export const newsArticles: NewsArticle[] = [
  {
    id: "bocaue-youth-wins-regional-quiz-bee",
    title: "Bocaue Youth Wins Regional Quiz Bee Championship",
    summary:
      "Students from Bocaue National High School brought home the gold after clinching first place at the 2026 Regional Quiz Bee held in the City of San Fernando, Pampanga.",
    content: `The Municipality of Bocaue is bursting with pride as a team of talented students from Bocaue National High School emerged as champions at the 2026 Central Luzon Regional Quiz Bee held on February 10, 2026 in the City of San Fernando, Pampanga.

The winning team — composed of Angela Santos, Marco Reyes, and Jessa Dela Cruz — competed against 14 other provincial finalists in a grueling multi-round competition that covered Science, Mathematics, Filipino, and Social Studies.

"We trained every day after school for three months," shared Angela Santos, the team captain. "Our teachers and families supported us the entire way, and we're proud to represent Bocaue."

Mayor Jonathan Flores personally congratulated the students during a short ceremony at the Municipal Hall, calling them "shining examples of Bocaueño excellence."

The Municipal History, Arts, Culture and Tourism Office (MHACTO) also recognized the team, noting that the win reflects the community's deep commitment to education and youth development.

The students are now set to represent Central Luzon in the National Quiz Bee Finals scheduled for April 2026 in Manila. Bocaue LGU has pledged full support, including travel allowances and additional coaching sessions, to help the team prepare for the national stage.

Congratulations to our champions — Bocaue is behind you!`,
    image: asset("/images/places/philippine-arena.jpg"),
    date: "2026-02-12",
    category: "competition",
    author: "MHACTO Bocaue",
  },
  {
    id: "bocaue-river-esplanade-project",
    title: "New Bocaue River Esplanade Project Breaks Ground",
    summary:
      "The Municipality of Bocaue kicks off construction of the Bocaue River Esplanade, a transformative waterfront project aimed at boosting tourism and public recreation.",
    content: `The Municipality of Bocaue officially broke ground on the highly anticipated Bocaue River Esplanade Project on February 5, 2026, marking a major milestone in the town's push toward sustainable tourism and urban development.

The project, estimated at ₱85 million in funding from a combination of local government budget and national grants, will transform a 1.2-kilometer stretch along the Bocaue River into a modern waterfront promenade featuring:

• A landscaped walking and jogging path
• Open-air cultural pavilions for local performances and exhibits
• Heritage markers highlighting Bocaue's rich history along the river
• A river-view deck and seating areas for residents and tourists
• Night lighting and safety features for evening strolls

"This esplanade will not only beautify our riverbanks but also give our residents a world-class public space where they can relax, exercise, and celebrate our culture," said Mayor Jonathan Flores during the groundbreaking ceremony.

The project is part of Bocaue's broader Tourism Master Plan 2025–2030, which aims to position the municipality as a top cultural and heritage destination in Bulacan. The MHACTO office has been instrumental in integrating cultural elements into the design, including murals depicting the town's famous Pagoda Festival and the history of firecracker-making.

Construction is expected to take 18 months, with the first phase — covering the main promenade and cultural pavilions — targeted for completion by mid-2027. Local businesses along the riverfront are already expressing excitement about the expected increase in foot traffic.

The Bocaue River Esplanade is set to become a landmark destination, joining the Philippine Arena and St. Martin of Tours Church as must-visit spots in the municipality.`,
    image: asset("/images/places/church-bocaue.jpg"),
    date: "2026-02-06",
    category: "project",
    author: "MHACTO Bocaue",
  },
]
