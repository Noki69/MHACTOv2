import { attractions } from "@/lib/data/places-data"
import PlaceDetailsPage from "./place-details-client"

export function generateStaticParams() {
  return attractions.map((place) => ({
    id: place.id,
  }))
}

export default function Page() {
  return <PlaceDetailsPage />
}
