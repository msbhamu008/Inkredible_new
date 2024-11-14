import React, { useEffect } from 'react'
import { Users, Target, Lightbulb } from 'lucide-react';

export default function About() {
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Adds smooth scrolling animation
    });
  }, []);
  return (
    <main className="pt-32">
      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                About Inkredible
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're revolutionizing education through AI-powered solutions that make learning and assessment more efficient and effective.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl -z-10" />
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-gray-400">
                Founded in 2024, Inkredible emerged from a simple observation: educators spend countless hours creating and grading assessments, time that could be better spent teaching and mentoring students.
              </p>
              <p className="text-gray-400">
                Our team of educators, technologists, and AI experts came together with a shared vision: to harness the power of artificial intelligence to transform educational assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-br from-[#000000]/50 to-[#130F40]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#150B2E]/50 backdrop-blur-md p-8 rounded-2xl border border-purple-900/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <Target className="w-8 h-8 text-purple-500" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-400">
                To create a world where quality education is accessible to all, powered by intelligent technology that understands and adapts to individual learning needs.
              </p>
            </div>
            <div className="bg-[#150B2E]/50 backdrop-blur-md p-8 rounded-2xl border border-purple-900/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <Lightbulb className="w-8 h-8 text-purple-500" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-400">
                To empower educators with AI-driven tools that streamline assessment creation and grading, allowing them to focus on what matters most: inspiring and guiding students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Meet Our Team
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're a diverse team of educators, engineers, and innovators passionate about transforming education.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Co-founder",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Michael Chen",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Education",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-[#150B2E]/50 backdrop-blur-md rounded-2xl border border-purple-900/50 overflow-hidden group hover:border-purple-500 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}