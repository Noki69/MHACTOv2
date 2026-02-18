import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function TouristSpots() {
  const destinations = [
    {
      id: "philippine-arena",
      title: "Philippine Arena",
      description:
        "The world's largest indoor arena, an architectural marvel and a point of pride for the community.",
      image:
        "https://images.unsplash.com/photo-1609167782178-1ba3aa1eb251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGlsaXBwaW5lJTIwYXJlbmElMjBtb2Rlcm4lMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcxMjI5NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "st-martin-parish",
      title: "St. Martin of Tours Parish",
      description:
        "A historic church that serves as the spiritual heart of Bocaue, home to centuries of faith and tradition.",
      image:
        "https://images.unsplash.com/photo-1711678519511-3a990224053e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGNodXJjaCUyMHBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTIyOTc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "bocaue-river",
      title: "Bocaue River",
      description:
        "The lifeblood of our municipality, central to local history and the celebrated Pagoda Festival.",
      image:
        "https://images.unsplash.com/photo-1684929954083-f10c179ed96d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXZlciUyMG5hdHVyZSUyMGxhbmRzY2FwZSUyMGdyZWVufGVufDF8fHx8MTc3MTIyOTc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "halamanan-festival",
      title: "Halamanan Festival Grounds",
      description:
        "Vibrant gardens and public spaces where the annual Halamanan Festival celebrates ornamental plants.",
      image:
        "https://images.unsplash.com/photo-1769874829994-d574b0475ae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMGNvbG9yZnVsJTIwZmxvd2VycyUyMGdhcmRlbnxlbnwxfHx8fDE3NzEyMjk3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "heritage-areas",
      title: "Town Heritage Areas",
      description:
        "Historic districts that preserve the architectural and cultural character of old Bocaue.",
      image:
        "https://images.unsplash.com/photo-1766188539994-59e7beb08ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZpbGlwaW5vJTIwaGVyaXRhZ2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzEyMjk3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "nature-spots",
      title: "Local Nature Spots",
      description:
        "Scenic natural areas offering peaceful retreats and opportunities to appreciate Bocaue's landscape.",
      image:
        "https://images.unsplash.com/photo-1764505880133-1e0ea710593f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXNoJTIwZ3JlZW4lMjBuYXR1cmUlMjBwYXJrJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MTIyOTc2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      {/* Header */}
      <section className="bg-[#efeae2] py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-5xl lg:text-6xl text-[#2b2b2b] mb-6">
              Tourism Wonders of Bocaue
            </h1>
            <p className="text-[#2b2b2b] text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore the diverse attractions that make Bocaue a unique
              destination rich in history, culture, and natural beauty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-[#efeae2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white border border-[#d9c6a5] overflow-hidden group cursor-pointer"
              >
                <Link to={`/tourist-spots/${destination.id}`}>
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={destination.image}
                      alt={destination.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-2xl text-[#1e3a34] mb-3">
                      {destination.title}
                    </h3>
                    <p className="text-[#2b2b2b] mb-4 leading-relaxed">
                      {destination.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#1e3a34] font-medium group-hover:text-[#b4532a] transition-colors">
                      <span>Learn More</span>
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-[#1e3a34] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-4xl lg:text-5xl mb-6"
          >
            Ready to Explore?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-lg mb-8"
          >
            Contact us to arrange guided tours or get more information about
            visiting these remarkable destinations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/inquiry"
              className="inline-flex items-center gap-2 bg-[#b4532a] text-white px-8 py-4 hover:bg-[#8f3f1f] transition-colors group"
            >
              <span className="font-medium">Get in Touch</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
