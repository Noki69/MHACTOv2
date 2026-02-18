import { motion } from "motion/react";
import { BookOpen, Users, Landmark, Calendar, Award, Heart } from "lucide-react";

export function Programs() {
  const programs = [
    {
      icon: BookOpen,
      title: "Heritage Conservation",
      description:
        "Systematic documentation and preservation of historical sites, artifacts, and oral histories that form the foundation of our municipal identity.",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description:
        "Programs that encourage residents to actively participate in cultural activities, festivals, and heritage preservation initiatives.",
    },
    {
      icon: Landmark,
      title: "Cultural Education",
      description:
        "Educational workshops and seminars that teach traditional arts, crafts, and cultural practices to younger generations.",
    },
    {
      icon: Calendar,
      title: "Festival Management",
      description:
        "Coordination and organization of major cultural festivals including the Pagoda Festival and Halamanan Festival.",
    },
    {
      icon: Award,
      title: "Tourism Development",
      description:
        "Strategic initiatives to promote Bocaue's attractions while ensuring sustainable and responsible tourism practices.",
    },
    {
      icon: Heart,
      title: "Arts Support",
      description:
        "Support programs for local artists, craftspeople, and cultural workers to sustain traditional and contemporary artistic expression.",
    },
  ];

  const initiatives = [
    {
      title: "Historical Documentation Project",
      description:
        "Comprehensive recording of Bocaue's history through interviews with elders, archival research, and digital preservation of historical documents and photographs.",
      status: "Ongoing",
    },
    {
      title: "Cultural Heritage Tours",
      description:
        "Guided walking tours of historic sites and heritage areas, educating visitors and residents about Bocaue's rich past and cultural significance.",
      status: "Monthly",
    },
    {
      title: "Traditional Arts Workshops",
      description:
        "Regular workshops teaching traditional Filipino crafts such as weaving, pottery, and woodworking to preserve indigenous skills.",
      status: "Quarterly",
    },
    {
      title: "Youth Cultural Exchange",
      description:
        "Programs connecting young people with cultural practitioners, fostering intergenerational knowledge transfer and appreciation.",
      status: "Annual",
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
            Programs & Initiatives
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#2b2b2b] text-lg lg:text-xl leading-relaxed"
          >
            The Municipal History, Arts, Culture and Tourism Office implements a
            range of programs designed to preserve heritage, promote cultural
            engagement, and support sustainable tourism development in Bocaue.
          </motion.p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 border border-[#d9c6a5]"
              >
                <div className="w-14 h-14 bg-[#1e3a34]/5 rounded-full flex items-center justify-center mb-6">
                  <program.icon size={28} className="text-[#1e3a34]" />
                </div>
                <h3 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-2xl text-[#1e3a34] mb-3">
                  {program.title}
                </h3>
                <p className="text-[#2b2b2b] leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Initiatives */}
      <section className="bg-[#efeae2] py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-4xl lg:text-5xl text-[#2b2b2b] text-center mb-12"
          >
            Current Initiatives
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 border-l-4 border-[#b4532a]"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-2xl text-[#1e3a34] flex-1">
                    {initiative.title}
                  </h3>
                  <span className="bg-[#1e3a34] text-white text-xs px-3 py-1 rounded-full ml-4">
                    {initiative.status}
                  </span>
                </div>
                <p className="text-[#2b2b2b] leading-relaxed">
                  {initiative.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-4xl lg:text-5xl text-[#2b2b2b] mb-6"
          >
            Get Involved
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#2b2b2b] text-lg mb-8 leading-relaxed"
          >
            We welcome community participation in our programs and initiatives.
            Whether you're interested in volunteering, attending workshops, or
            contributing to heritage preservation, there are many ways to get
            involved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="bg-[#f8f6f1] p-6 border border-[#d9c6a5]">
              <h3 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-xl text-[#1e3a34] mb-2">
                Volunteer
              </h3>
              <p className="text-[#2b2b2b] text-sm">
                Join our team of cultural volunteers and contribute to heritage
                preservation efforts.
              </p>
            </div>

            <div className="bg-[#f8f6f1] p-6 border border-[#d9c6a5]">
              <h3 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-xl text-[#1e3a34] mb-2">
                Participate
              </h3>
              <p className="text-[#2b2b2b] text-sm">
                Attend our workshops, tours, and cultural events throughout the
                year.
              </p>
            </div>

            <div className="bg-[#f8f6f1] p-6 border border-[#d9c6a5]">
              <h3 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-xl text-[#1e3a34] mb-2">
                Share Stories
              </h3>
              <p className="text-[#2b2b2b] text-sm">
                Contribute your family histories and memories to our oral
                history documentation project.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e3a34] py-16 lg:py-24 px-6 lg:px-12 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-4xl lg:text-5xl mb-6"
          >
            Join Our Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-lg mb-8"
          >
            Contact us to learn more about upcoming programs and how you can
            participate in preserving Bocaue's rich cultural heritage.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="/inquiry"
              className="inline-block bg-[#b4532a] text-white px-8 py-4 hover:bg-[#8f3f1f] transition-colors font-medium"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
