import type { Metadata } from "next"
import { attractions, categoryLabels } from "@/lib/data/places-data"
import PlaceDetailsPage from "./place-details-client"

export function generateStaticParams() {
  return attractions.map((place) => ({
    id: place.id,
  }))
}

export function generateMetadata({
  params,
}: {
  params: { id: string }
}): Metadata {
  const place = attractions.find((p) => p.id === params.id)
  if (!place) {
    return { title: "Place Not Found" }
  }
  return {
    title: place.title,
    description: place.description,
    openGraph: {
      title: `${place.title} | MHACTO Bocaue`,
      description: place.description,
      images: place.image ? [{ url: place.image }] : undefined,
    },
  }
}

export default function Page({ params }: { params: { id: string } }) {
  const place = attractions.find((p) => p.id === params.id)
  return <PlaceDetailsPage place={place} />
}
