import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Adds smooth scrolling animation
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main className="pt-32">
      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Get in Touch
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have questions about Inkredible? We're here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-[#150B2E]/50 backdrop-blur-md p-6 rounded-2xl border border-purple-900/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-gray-400">123 Innovation Drive<br />San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#150B2E]/50 backdrop-blur-md p-6 rounded-2xl border border-purple-900/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#150B2E]/50 backdrop-blur-md p-6 rounded-2xl border border-purple-900/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-400">contact@inkredible.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#150B2E]/50 backdrop-blur-md p-8 rounded-2xl border border-purple-900/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-purple-900/20 border border-purple-900/50 rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-purple-900/20 border border-purple-900/50 rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="w-full bg-purple-900/20 border border-purple-900/50 rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      className="w-full bg-purple-900/20 border border-purple-900/50 rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-[#000000]/50 to-[#130F40]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl -z-10" />
            <div className="bg-[#150B2E]/50 backdrop-blur-md p-8 rounded-2xl border border-purple-900/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977335890976!2d-122.39591708439499!3d37.78092797975728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807abad77c31%3A0x3f10582f2e67d2bf!2sSan%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1644933736065!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Frequently Asked Questions
            </span>
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "What are your support hours?",
                answer: "Our support team is available Monday through Friday, 9 AM to 6 PM PST. We typically respond to inquiries within 24 hours."
              },
              {
                question: "Do you offer technical support?",
                answer: "Yes, we provide comprehensive technical support for all our products. Our team of experts is ready to assist you with any technical issues."
              },
              {
                question: "How can I request a demo?",
                answer: "You can request a demo by filling out the contact form above or by emailing us directly at demo@inkredible.com."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#150B2E]/50 backdrop-blur-md p-6 rounded-2xl border border-purple-900/50">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}