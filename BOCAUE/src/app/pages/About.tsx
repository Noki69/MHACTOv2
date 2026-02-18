import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { StatsItem } from "../components/StatsCounter";

export function About() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      {/* Header */}
      <section className="bg-[#efeae2] py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-5xl lg:text-6xl text-[#2b2b2b] mb-6"
          >
            About Bocaue
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#2b2b2b] text-lg lg:text-xl leading-relaxed"
          >
            A municipality rich in history, culture, and tradition
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="border-l-4 border-[#1e3a34] pl-8 space-y-6">
                <h2 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-4xl text-[#1e3a34]">
                  A Legacy Rooted in Tradition
                </h2>

                <div className="space-y-4 text-[#2b2b2b] leading-relaxed">
                  <p>
                    Bocaue's history stretches back to the pre-colonial era,
                    when indigenous communities thrived along the fertile banks
                    of the Bocaue River. The name "Bocaue" is derived from the
                    Tagalog word "bocawe," referring to the bamboo traps used by
                    early settlers to catch fish in the river's abundant waters.
                  </p>

                  <p>
                    With the arrival of Spanish missionaries in the 16th
                    century, Bocaue became an important center of religious
                    activity. The establishment of the parish under the
                    patronage of St. Martin of Tours marked the beginning of a
                    profound cultural transformation that blended indigenous
                    traditions with Catholic faith, creating the unique
                    spiritual identity that defines Bocaue today.
                  </p>

                  <p>
                    Throughout the colonial period and into the modern era,
                    Bocaue evolved from a rural farming community into a vibrant
                    municipality. The town played significant roles during the
                    Philippine Revolution and has continued to honor its
                    historical roots while embracing progress and development.
                  </p>

                  <p>
                    Today, Bocaue stands as a testament to resilience and
                    cultural continuity, where ancestral traditions are
                    preserved with reverence, and the spirit of community
                    remains as strong as ever. Our heritage is not merely
                    remembered—it is lived and celebrated daily by our people.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px]"
            >
              <div className="border-4 border-[#d9c6a5] h-full overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1766188539994-59e7beb08ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZpbGlwaW5vJTIwaGVyaXRhZ2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzEyMjk3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Heritage Building"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#efeae2] py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 lg:p-12 border border-[#d9c6a5]"
            >
              <h3 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-3xl text-[#1e3a34] mb-6">
                Our Mission
              </h3>
              <p className="text-[#2b2b2b] leading-relaxed">
                To preserve, promote, and celebrate the rich cultural heritage
                of Bocaue through comprehensive programs in history, arts,
                culture, and tourism. We strive to create meaningful connections
                between our past and present, fostering pride and unity among
                residents while welcoming visitors to experience our unique
                identity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 lg:p-12 border border-[#d9c6a5]"
            >
              <h3 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-3xl text-[#1e3a34] mb-6">
                Our Vision
              </h3>
              <p className="text-[#2b2b2b] leading-relaxed">
                To be recognized as a model municipality in heritage
                preservation and cultural tourism, where traditions thrive
                alongside progress, and where every resident and visitor
                experiences the depth and beauty of Bocaue's living heritage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-4xl lg:text-5xl text-[#2b2b2b] text-center mb-12"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Heritage",
                description:
                  "We honor and preserve the stories, traditions, and artifacts that define our identity.",
              },
              {
                title: "Community",
                description:
                  "We engage residents as active participants in cultural preservation and celebration.",
              },
              {
                title: "Excellence",
                description:
                  "We maintain the highest standards in documentation, programming, and visitor experiences.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace creative approaches to make heritage relevant and accessible to all.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#f8f6f1] p-6 border-l-4 border-[#b4532a]"
              >
                <h3 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-2xl text-[#1e3a34] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#2b2b2b] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}