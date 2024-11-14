import React from 'react';
import { CheckCircle, Brain, ArrowRight, Sparkles, Clock, BarChart3 } from 'lucide-react';

const features = [
  {
    title: "AI-Powered Generation",
    description: "Create high-quality questions instantly with our advanced AI algorithms that understand exam patterns.",
    icon: <Brain className="w-6 h-6 text-purple-500" />
  },
  {
    title: "Smart Assembly",
    description: "Automatically structure papers with balanced difficulty levels and topic coverage.",
    icon: <Sparkles className="w-6 h-6 text-purple-500" />
  },
  {
    title: "Time-Saving",
    description: "Reduce paper creation time from hours to minutes with automated solutions.",
    icon: <Clock className="w-6 h-6 text-purple-500" />
  },
  {
    title: "Detailed Analytics",
    description: "Get comprehensive insights into student performance and question effectiveness.",
    icon: <BarChart3 className="w-6 h-6 text-purple-500" />
  }
];

const examTypes = [
  {
    name: "CBSE Board Exams",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Competitive Exams",
    subjects: ["IIT-JEE", "NEET", "GATE"],
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "School Entrance",
    subjects: ["Sainik School", "Navodaya", "KVPY"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80"
  }
];

export default function ExamSolution() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Features */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Create Perfect Exam Papers in Minutes
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your assessment process with AI-powered exam generation. Create balanced, comprehensive papers tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#150B2E]/50 backdrop-blur-md p-6 rounded-xl border border-purple-900/50 hover:border-purple-500 transition-all duration-300 group hover:scale-105"
            >
              <div className="bg-purple-500/10 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Exam Types */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                  Comprehensive Support for All Exam Types
                </span>
              </h3>
              <p className="text-gray-400 text-lg">
                Whether you're preparing for board exams, competitive tests, or entrance exams, we've got you covered with specialized question banks and templates.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Customizable difficulty levels",
                "Topic-wise question distribution",
                "Multiple question formats",
                "Instant solution generation"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Start Creating Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl -z-10" />
            <div className="relative space-y-6">
              {examTypes.map((exam, index) => (
                <div
                  key={index}
                  className="bg-[#150B2E]/50 backdrop-blur-md p-6 rounded-xl border border-purple-900/50 hover:border-purple-500 transition-all duration-300 hover:scale-[1.02] hover:translate-x-2"
                >
                  <div className="flex items-center gap-6">
                    <img
                      src={exam.image}
                      alt={exam.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{exam.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {exam.subjects.map((subject, idx) => (
                          <span
                            key={idx}
                            className="text-sm px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}