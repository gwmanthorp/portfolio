import "./output.css";
import React, { useState, useEffect } from "react";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Users,
  Brain,
  ChevronRight,
  MousePointerClick,
} from "lucide-react";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Project Alpha",
      description: "A revolutionary AI-powered platform",
      image:
        "https://placehold.co/600x400/313131/FFFFFF/png?text=Project+Alpha",
      tags: ["React", "AI", "Node.js"],
    },
    {
      title: "Project Beta",
      description: "Blockchain-based security solution",
      image: "https://placehold.co/600x400/313131/FFFFFF/png?text=Project+Beta",
      tags: ["Blockchain", "Solidity", "Web3"],
    },
    {
      title: "Project Gamma",
      description: "Real-time collaboration tool",
      image:
        "https://placehold.co/600x400/313131/FFFFFF/png?text=Project+Gamma",
      tags: ["WebRTC", "Firebase", "React"],
    },
  ];

  const skills = [
    {
      category: "Programming",
      items: ["JavaScript", "Python", "Rust", "Solidity"],
    },
    {
      category: "Frameworks",
      items: ["React", "Next.js", "Node.js", "Django"],
    },
    {
      category: "Soft Skills",
      items: ["Leadership", "Communication", "Problem Solving"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-inter relative overflow-hidden">
      {/* Custom cursor */}
      {showCursor && (
        <div
          className="fixed w-8 h-8 border-2 border-white rounded-full pointer-events-none mix-blend-difference z-50 transition-transform duration-100"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
            transform: activeProject ? "scale(1.5)" : "scale(1)",
          }}
        />
      )}

      {/* Floating social links */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-40">
        <a
          href="#"
          className="hover:scale-125 transition-transform"
          onMouseEnter={() => setShowCursor(false)}
          onMouseLeave={() => setShowCursor(true)}
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="hover:scale-125 transition-transform"
          onMouseEnter={() => setShowCursor(false)}
          onMouseLeave={() => setShowCursor(true)}
        >
          <Twitter className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="hover:scale-125 transition-transform"
          onMouseEnter={() => setShowCursor(false)}
          onMouseLeave={() => setShowCursor(true)}
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="hover:scale-125 transition-transform"
          onMouseEnter={() => setShowCursor(false)}
          onMouseLeave={() => setShowCursor(true)}
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>

      {/* Main content */}
      <div className="hero-section">
        {/* Hero section with animated text */}
        <div className="h-screen flex items-center relative">
          <div className="space-y-6">
            <h1 className="text-7xl font-bold tracking-tight">
              <span className="block opacity-0 animate-[fadeInUp_0.5s_0.2s_forwards]">
                Creative
              </span>
              <span className="block opacity-0 animate-[fadeInUp_0.5s_0.4s_forwards]">
                Developer &
              </span>
              <span className="block opacity-0 animate-[fadeInUp_0.5s_0.6s_forwards]">
                Designer
              </span>
            </h1>
            <p className="text-xl text-gray-400 opacity-0 animate-[fadeInUp_0.5s_0.8s_forwards] max-w-xl">
              Crafting digital experiences that blend innovation with
              functionality
            </p>
            <div className="opacity-0 animate-[fadeInUp_0.5s_1s_forwards]">
              <MousePointerClick className="w-6 h-6 animate-bounce" />
              <span className="ml-2">Scroll to explore</span>
            </div>
          </div>
        </div>

        {/* Project showcase with 3D hover effect */}
        <div className="py-32">
          <h2 className="text-4xl font-bold mb-16">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative perspective-1000"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="relative transform transition-transform duration-500 preserve-3d group-hover:rotate-y-180">
                  <div className="backface-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-200 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center hover:underline"
                    >
                      View Project <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills section with animated progress bars */}
        <div className="py-32">
          <h2 className="text-4xl font-bold mb-16">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 hover:from-purple-900 hover:to-blue-900 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-8">
                  {index === 0 && <Code className="w-6 h-6" />}
                  {index === 1 && <Brain className="w-6 h-6" />}
                  {index === 2 && <Users className="w-6 h-6" />}
                  <h3 className="text-xl font-semibold">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="space-y-6">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span>{skill}</span>
                        <span className="text-gray-400">
                          {Math.floor(Math.random() * 20 + 80)}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-[slideRight_1s_ease-out]"
                          style={{
                            width: `${Math.floor(Math.random() * 20 + 80)}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideRight {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
