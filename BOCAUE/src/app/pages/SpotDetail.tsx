import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, MapPin, Clock, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function SpotDetail() {
  const { id } = useParams();

  const spotsData: Record<string, any> = {
    "philippine-arena": {
      title: "Philippine Arena",
      description:
        "The Philippine Arena stands as the world's largest indoor arena, an architectural and engineering marvel that has become a symbol of pride for Bocaue and the Philippines. This massive structure, with its distinctive dome design, can accommodate over 50,000 people and hosts various events from religious gatherings to concerts and sporting events.",
      image:
        "https://images.unsplash.com/photo-1609167782178-1ba3aa1eb251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGlsaXBwaW5lJTIwYXJlbmElMjBtb2Rlcm4lMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcxMjI5NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "Ciudad de Victoria, Bocaue, Bulacan",
      hours: "Event-based schedule",
      highlights: [
        "World's largest indoor arena",
        "Capacity of over 50,000 people",
        "Iconic architectural design",
        "Hosts major national and international events",
      ],
    },
    "st-martin-parish": {
      title: "St. Martin of Tours Parish",
      description:
        "The St. Martin of Tours Parish Church is the spiritual heart of Bocaue, a historic sanctuary that has witnessed centuries of faith, devotion, and community life. Built during the Spanish colonial period, this church features beautiful baroque architecture and houses religious artifacts of significant historical value. It serves as the center of the famous Pagoda Festival.",
      image:
        "https://images.unsplash.com/photo-1711678519511-3a990224053e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGNodXJjaCUyMHBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTIyOTc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "Town Center, Bocaue, Bulacan",
      hours: "Daily, 5:00 AM - 8:00 PM",
      highlights: [
        "Spanish colonial architecture",
        "Historical religious artifacts",
        "Home of the Holy Cross of Wawa",
        "Center of the Pagoda Festival",
      ],
    },
    "bocaue-river": {
      title: "Bocaue River",
      description:
        "The Bocaue River is the lifeblood of the municipality, a waterway that has sustained the community for centuries. This river played a crucial role in the town's development, serving as a major transportation route and source of livelihood. Today, it remains central to Bocaue's identity, especially during the annual Pagoda Festival where a grand river procession takes place.",
      image:
        "https://images.unsplash.com/photo-1684929954083-f10c179ed96d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXZlciUyMG5hdHVyZSUyMGxhbmRzY2FwZSUyMGdyZWVufGVufDF8fHx8MTc3MTIyOTc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "Flowing through Bocaue, Bulacan",
      hours: "Open all day",
      highlights: [
        "Historic waterway",
        "Pagoda Festival procession route",
        "Scenic river views",
        "Cultural and ecological significance",
      ],
    },
    "halamanan-festival": {
      title: "Halamanan Festival Grounds",
      description:
        "The Halamanan Festival Grounds celebrate Bocaue's reputation as the 'Halamanan Capital of the Philippines.' These vibrant public spaces showcase beautiful gardens filled with ornamental plants, flowers, and creative landscaping. During the annual Halamanan Festival, the grounds come alive with exhibitions, competitions, and celebrations of the local plant industry.",
      image:
        "https://images.unsplash.com/photo-1769874829994-d574b0475ae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMGNvbG9yZnVsJTIwZmxvd2VycyUyMGdhcmRlbnxlbnwxfHx8fDE3NzEyMjk3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "Various locations in Bocaue",
      hours: "Daily, 6:00 AM - 6:00 PM",
      highlights: [
        "Ornamental plant displays",
        "Annual Halamanan Festival venue",
        "Beautiful garden landscapes",
        "Local plant industry showcase",
      ],
    },
    "heritage-areas": {
      title: "Town Heritage Areas",
      description:
        "Bocaue's historic districts preserve the architectural and cultural character that has defined the town for generations. Walking through these heritage areas, visitors can admire well-preserved colonial-era homes, traditional Filipino architecture, and historical landmarks that tell the story of the municipality's evolution through the centuries.",
      image:
        "https://images.unsplash.com/photo-1766188539994-59e7beb08ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZpbGlwaW5vJTIwaGVyaXRhZ2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzEyMjk3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "Old Town Center, Bocaue",
      hours: "Best visited during daytime",
      highlights: [
        "Colonial-era architecture",
        "Heritage houses and buildings",
        "Historical walking tours",
        "Cultural preservation sites",
      ],
    },
    "nature-spots": {
      title: "Local Nature Spots",
      description:
        "Beyond its urban areas, Bocaue offers peaceful natural retreats where visitors can escape the bustle and connect with the landscape. These green spaces include parks, gardens, and rural areas that showcase the municipality's natural beauty and provide opportunities for recreation, reflection, and appreciation of the local environment.",
      image:
        "https://images.unsplash.com/photo-1764505880133-1e0ea710593f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXNoJTIwZ3JlZW4lMjBuYXR1cmUlMjBwYXJrJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MTIyOTc2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "Various locations in Bocaue",
      hours: "Daily, 6:00 AM - 6:00 PM",
      highlights: [
        "Peaceful natural settings",
        "Parks and green spaces",
        "Recreation opportunities",
        "Local flora and fauna",
      ],
    },
  };

  const spot = spotsData[id || ""];

  if (!spot) {
    return (
      <div className="min-h-screen pt-24 lg:pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-[#2b2b2b] mb-4">Spot not found</h1>
          <Link to="/tourist-spots" className="text-[#b4532a] hover:underline">
            Back to Tourist Spots
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <Link
          to="/tourist-spots"
          className="inline-flex items-center gap-2 text-[#1e3a34] hover:text-[#b4532a] transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="font-medium">Back to Tourist Spots</span>
        </Link>
      </div>

      {/* Hero Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <ImageWithFallback
          src={spot.image}
          alt={spot.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-4xl lg:text-6xl text-white mb-4"
            >
              {spot.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-3xl text-[#1e3a34] mb-6">
                  About
                </h2>
                <p className="text-[#2b2b2b] text-lg leading-relaxed mb-8">
                  {spot.description}
                </p>

                <h3 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-2xl text-[#1e3a34] mb-4">
                  Highlights
                </h3>
                <ul className="space-y-3">
                  {spot.highlights.map((highlight: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Star
                        size={20}
                        className="text-[#b4532a] flex-shrink-0 mt-1"
                      />
                      <span className="text-[#2b2b2b]">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#f8f6f1] p-6 lg:p-8 border border-[#d9c6a5] sticky top-32"
              >
                <h3 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-2xl text-[#1e3a34] mb-6">
                  Visit Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-[#b4532a] flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-[#1e3a34] mb-1">
                        Location
                      </div>
                      <div className="text-[#2b2b2b] text-sm">
                        {spot.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-[#b4532a] flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-[#1e3a34] mb-1">
                        Hours
                      </div>
                      <div className="text-[#2b2b2b] text-sm">{spot.hours}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    to="/inquiry"
                    className="block text-center bg-[#b4532a] text-white px-6 py-3 hover:bg-[#8f3f1f] transition-colors"
                  >
                    Plan Your Visit
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Spots */}
      <section className="bg-[#efeae2] py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-3xl lg:text-4xl text-[#2b2b2b] mb-8">
            Explore More Destinations
          </h2>
          <Link
            to="/tourist-spots"
            className="inline-flex items-center gap-2 text-[#1e3a34] hover:text-[#b4532a] transition-colors group"
          >
            <span className="font-medium">View All Tourist Spots</span>
            <ArrowLeft
              size={20}
              className="rotate-180 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
