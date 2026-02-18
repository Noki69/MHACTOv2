import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Inquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#2b2b2b] text-lg lg:text-xl leading-relaxed"
          >
            Have questions about visiting Bocaue, our programs, or cultural
            activities? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-3xl text-[#1e3a34] mb-8">
                    Contact Information
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1e3a34]/5 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-[#b4532a]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1e3a34] mb-1">
                        Address
                      </h3>
                      <p className="text-[#2b2b2b]">
                        Municipal Hall
                        <br />
                        Bocaue, Bulacan
                        <br />
                        Philippines
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1e3a34]/5 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-[#b4532a]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1e3a34] mb-1">Phone</h3>
                      <p className="text-[#2b2b2b]">(044) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1e3a34]/5 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-[#b4532a]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1e3a34] mb-1">Email</h3>
                      <p className="text-[#2b2b2b]">mhacto@bocaue.gov.ph</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f8f6f1] p-6 border border-[#d9c6a5] mt-8">
                  <h3 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-xl text-[#1e3a34] mb-3">
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-[#2b2b2b]">
                    <p className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 12:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 lg:p-12 border border-[#d9c6a5]"
              >
                <h2 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-3xl text-[#1e3a34] mb-8">
                  Send us a Message
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#1e3a34] text-white p-8 rounded text-center"
                  >
                    <Send size={48} className="mx-auto mb-4" />
                    <h3 className="text-2xl mb-2">Thank You!</h3>
                    <p>
                      Your message has been received. We'll get back to you
                      soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-[#1e3a34] font-medium mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-[#d9c6a5] focus:outline-none focus:border-[#b4532a] transition-colors"
                          placeholder="Juan Dela Cruz"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-[#1e3a34] font-medium mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-[#d9c6a5] focus:outline-none focus:border-[#b4532a] transition-colors"
                          placeholder="juan@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-[#1e3a34] font-medium mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[#d9c6a5] focus:outline-none focus:border-[#b4532a] transition-colors"
                          placeholder="+63 912 345 6789"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-[#1e3a34] font-medium mb-2"
                        >
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-[#d9c6a5] focus:outline-none focus:border-[#b4532a] transition-colors bg-white"
                        >
                          <option value="">Select a subject</option>
                          <option value="tourism">Tourism Inquiry</option>
                          <option value="programs">Programs Information</option>
                          <option value="culture">Cultural Activities</option>
                          <option value="heritage">Heritage Sites</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[#1e3a34] font-medium mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-[#d9c6a5] focus:outline-none focus:border-[#b4532a] transition-colors resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#b4532a] text-white px-8 py-4 hover:bg-[#8f3f1f] transition-colors font-medium flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      <span>Send Message</span>
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#efeae2] py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-4xl text-[#2b2b2b] text-center mb-8"
          >
            Visit Us
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <div className="relative w-full h-64 md:h-80 lg:h-96 border-4 border-[#d9c6a5] overflow-hidden rounded">
              <iframe
                title="MHACTO Location - Municipal Hall, Bocaue"
                src="https://www.google.com/maps?q=Municipal+Hall+Bocaue+Bulacan&output=embed"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
