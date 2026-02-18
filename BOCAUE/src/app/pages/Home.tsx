import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, Landmark, MapPin, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { StatsItem } from "../components/StatsCounter";

export function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "Historical Preservation",
      description: "Safeguarding our past for future generations",
    },
    {
      icon: Landmark,
      title: "Cultural Promotion",
      description: "Celebrating traditions and artistic heritage",
    },
    {
      icon: MapPin,
      title: "Tourism Initiatives",
      description: "Showcasing the beauty and significance of Bocaue",
    },
    {
      icon: Users,
      title: "Community Programs",
      description: "Engaging residents in cultural activities",
    },
  ];

  const spotlights = [
    {
      id: "philippine-arena",
      title: "Philippine Arena",
      image: "https://images.unsplash.com/photo-1609167782178-1ba3aa1eb251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGlsaXBwaW5lJTIwYXJlbmElMjBtb2Rlcm4lMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcxMjI5NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "st-martin-parish",
      title: "St. Martin of Tours Parish",
      image: "https://images.unsplash.com/photo-1711678519511-3a990224053e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGNodXJjaCUyMHBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTIyOTc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "bocaue-river",
      title: "Bocaue River",
      image: "https://images.unsplash.com/photo-1684929954083-f10c179ed96d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXZlciUyMG5hdHVyZSUyMGxhbmRzY2FwZSUyMGdyZWVufGVufDF8fHx8MTc3MTIyOTc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1736147936509-09d36c1043da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHJpY2UlMjBmaWVsZHMlMjBwaGlsaXBwaW5lcyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzEyMjk3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Bocaue Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8f6f1] via-[#f8f6f1]/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#1e3a34] text-sm tracking-widest mb-4 font-medium"
          >
            Municipality of Bocaue, Bulacan
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-5xl lg:text-7xl text-[#2b2b2b] mb-6"
          >
            Discover the Heart of{" "}
            <span className="text-[#b4532a]">Bocaue</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#2b2b2b] text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed"
          >
            The Municipal History, Arts, Culture and Tourism Office preserves
            our heritage and promotes the rich traditions of Bocaue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/tourist-spots"
              className="inline-flex items-center gap-2 bg-[#b4532a] text-white px-8 py-4 hover:bg-[#8f3f1f] transition-colors group"
            >
              <span className="font-medium">Explore Bocaue</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#1e3a34] rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-3 bg-[#1e3a34] rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-4xl lg:text-5xl text-[#2b2b2b] mb-6">
            Our Commitment to Heritage and Tourism
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-[#2b2b2b] leading-relaxed">
            <p>
              The Municipal History, Arts, Culture and Tourism Office stands as
              the guardian of Bocaue's rich heritage. We are dedicated to
              preserving the historical narratives that have shaped our
              community, ensuring that the stories of our ancestors continue to
              inspire and educate present and future generations.
            </p>
            <p>
              Through comprehensive documentation, cultural programming, and
              tourism development, we foster a deeper appreciation for the
              traditions, artistry, and values that define Bocaue. Our work
              bridges the past with the present, creating meaningful connections
              between our heritage and contemporary life.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1e3a34]/5 rounded-full flex items-center justify-center">
                <feature.icon size={32} className="text-[#1e3a34]" />
              </div>
              <h3 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-2xl text-[#1e3a34] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#2b2b2b]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Spotlights Section */}
      <section className="bg-[#efeae2] py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-4xl lg:text-5xl text-[#2b2b2b] text-center mb-12"
          >
            Featured Destinations
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spotlights.map((spot, index) => (
              <motion.div
                key={spot.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Link to={`/tourist-spots/${spot.id}`}>
                  <div className="relative h-64 overflow-hidden border-4 border-[#d9c6a5]">
                    <ImageWithFallback
                      src={spot.image}
                      alt={spot.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-2xl text-white">
                        {spot.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/tourist-spots"
              className="inline-flex items-center gap-2 text-[#1e3a34] font-medium hover:text-[#b4532a] transition-colors group"
            >
              View All Tourist Spots
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 text-[#1e3a34] border-b-8 border-white/5 bg-[#f8f6f1]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-4xl lg:text-5xl mb-6"
          >
            Plan Your Visit to Bocaue
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-lg mb-8"
          >
            Experience the rich culture, history, and natural beauty of our
            municipality. Get in touch to learn more about guided tours and
            cultural programs.
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
              <span className="font-medium">Send an Inquiry</span>
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