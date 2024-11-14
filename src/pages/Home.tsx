import React from 'react';
import HeroImage from '../components/HeroImage';
import ExamSolution from '../components/ExamSolution';
import PricingCard from '../components/PricingCard';
import PartnersCarousel from '../components/PartnersCarousel';
import LeadForm from '../components/LeadForm';
import { GraduationCap, School, BookOpen, Users, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-purple-500/0 rounded-full px-4 py-2 mb-6">
                <span className="text-purple-400 text-sm font-medium">Inking the Future of Learning</span>
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                  Work Smarter,
                </span>
                <br />
                Not Harder with
                <br />
                Inkredible
              </h1>
              <p className="text-lg text-gray-400 mb-8 animate-slide-up">
                Unleash the power of Generative AI within Inkredible. Boost your productivity with Inkredible, and stop spending countless hours on creating exam papers and grading answer sheets.
              </p>
            </div>
            <div className="relative animate-float-slow">
              <HeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Made for Schools & Students Section */}
      <section id="solutions" className="py-20 bg-gradient-to-br from-[#000000]/50 to-[#130F40]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Made for Schools & Students
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Empowering educational institutions and learners with intelligent assessment solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Schools */}
            <div className="bg-[#150B2E]/50 backdrop-blur-md p-8 rounded-2xl border border-purple-900/50 hover:border-purple-500 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <School className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold">For Schools</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Automated exam paper generation",
                  "Comprehensive question bank",
                  "Performance analytics dashboard",
                  "Custom assessment templates"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105">
                Get School Demo
              </button>
            </div>

            {/* For Students */}
            <div className="bg-[#150B2E]/50 backdrop-blur-md p-8 rounded-2xl border border-purple-900/50 hover:border-purple-500 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold">For Students</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Personalized practice tests",
                  "Instant feedback and solutions",
                  "Progress tracking",
                  "Study material recommendations"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105">
                Start Learning
              </button>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Users className="w-8 h-8 text-purple-500" />,
                stat: "50,000+",
                label: "Active Users"
              },
              {
                icon: <School className="w-8 h-8 text-purple-500" />,
                stat: "1,000+",
                label: "Partner Schools"
              },
              {
                icon: <BookOpen className="w-8 h-8 text-purple-500" />,
                stat: "100,000+",
                label: "Questions Generated"
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#150B2E]/50 backdrop-blur-md p-6 rounded-xl border border-purple-900/50 text-center">
                <div className="bg-purple-500/10 p-3 rounded-lg w-fit mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="text-3xl font-bold mb-2">{item.stat}</h4>
                <p className="text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <ExamSolution />
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Simple, Transparent Pricing
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan that fits your needs. No hidden fees, no surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Basic"
              price="$0"
              features={["Up to 100 questions per month", "Basic analytics", "Email support", "1 user license"]}
              ctaText="Get Started"
            />
            <PricingCard
              title="Pro"
              price="$99"
              features={["Unlimited questions", "Advanced analytics", "Priority support", "5 user licenses", "Custom branding"]}
              isPopular={true}
              ctaText="Try Pro"
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              features={["Unlimited everything", "Dedicated support", "Custom integration", "Unlimited users", "SLA guarantee"]}
              ctaText="Contact Sales"
            />
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section id="partners" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                  Trusted by Leading Institutions
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Join thousands of educational institutions that trust Inkredible for their assessment needs.
              </p>
            </div>
            <PartnersCarousel />
          </div>
        </section>
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm />
        </div>
      </section>
    </main>
  );
}