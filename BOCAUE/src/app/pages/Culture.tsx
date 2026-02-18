import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Culture() {
  const culturalItems = [
    {
      title: "The Pagoda Festival",
      description:
        "Every first Sunday of July, Bocaue celebrates the Pagoda Festival, a centuries-old tradition honoring the Holy Cross of Wawa. This religious procession along the Bocaue River draws thousands of devotees who participate in thanksgiving and renewal of faith. The festival embodies the deep spiritual connection between the community and their patron, reflecting values of devotion, unity, and gratitude passed down through generations.",
      image:
        "https://images.unsplash.com/photo-1767990373921-1a3c6af66f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGZlc3RpdmFsJTIwcGhpbGlwcGluZXMlMjB0cmFkaXRpb258ZW58MXx8fHwxNzcxMjI5NzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      reverse: false,
    },
    {
      title: "Halamanan Festival",
      description:
        "Bocaue is renowned as the 'Halamanan Capital of the Philippines,' celebrating its thriving ornamental plant industry. The Halamanan Festival showcases the municipality's agricultural heritage and entrepreneurial spirit through vibrant displays of flowers, plants, and garden artistry. This event highlights not only economic achievement but also the community's dedication to beautification and environmental stewardship.",
      image:
        "https://images.unsplash.com/photo-1769874829994-d574b0475ae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMGNvbG9yZnVsJTIwZmxvd2VycyUyMGdhcmRlbnxlbnwxfHx8fDE3NzEyMjk3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      reverse: true,
    },
    {
      title: "Traditional Arts and Crafts",
      description:
        "The people of Bocaue have long practiced traditional crafts, from weaving to woodwork, that reflect indigenous skills adapted over centuries. Local artisans continue to create works that honor ancestral techniques while incorporating contemporary expressions. These crafts are not merely products but carriers of cultural knowledge, connecting present practitioners to the wisdom and creativity of their forebears.",
      image:
        "https://images.unsplash.com/photo-1652823074952-8f2e0612c69b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZpbGlwaW5vJTIwYXJ0cyUyMGNyYWZ0cyUyMHdlYXZpbmd8ZW58MXx8fHwxNzcxMjI5NzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      reverse: false,
    },
  ];

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
            Celebrating Local Traditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#2b2b2b] text-lg lg:text-xl leading-relaxed"
          >
            The cultural fabric of Bocaue is woven from centuries of tradition,
            faith, and artistic expression
          </motion.p>
        </div>
      </section>

      {/* Cultural Items */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-24">
          {culturalItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                item.reverse ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative h-[400px] lg:h-[500px] ${
                  item.reverse ? "lg:col-start-2" : ""
                }`}
              >
                <div className="border-4 border-[#d9c6a5] h-full overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Text */}
              <div
                className={item.reverse ? "lg:col-start-1 lg:row-start-1" : ""}
              >
                <h2 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-3xl lg:text-4xl text-[#1e3a34] mb-6">
                  {item.title}
                </h2>
                <p className="text-[#2b2b2b] text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cultural Values */}
      <section className="bg-[#efeae2] py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-4xl lg:text-5xl text-[#2b2b2b] text-center mb-12"
          >
            Living Heritage
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Faith & Devotion",
                description:
                  "Deeply rooted Catholic traditions that unite the community in spiritual celebration and worship.",
              },
              {
                title: "Agricultural Heritage",
                description:
                  "Proud tradition of farming and plant cultivation that defines Bocaue's economic and cultural identity.",
              },
              {
                title: "Artistic Expression",
                description:
                  "Rich legacy of crafts, music, and visual arts that celebrate Filipino creativity and skill.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 border border-[#d9c6a5] text-center"
              >
                <h3 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-2xl text-[#1e3a34] mb-4">
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

      {/* Quote Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-[#1e3a34] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-3xl lg:text-4xl italic"
          >
            "Our heritage is not merely remembered—it is lived and celebrated
            daily by our people."
          </motion.blockquote>
        </div>
      </section>
    </div>
  );
}
