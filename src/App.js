import "./output.css";
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  FileDown,
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

  useEffect(() => {
    const canvas = document.getElementById("dotCanvas");
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions to match the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Dot configuration
    const dotSpacing = 40; // Distance between dots
    const dotRadius = 2; // Radius of each dot
    const maxOpacity = 1; // Maximum opacity for dots near the mouse
    const minOpacity = 0.1; // Minimum opacity for dots far from the mouse
    const influenceRadius = 200; // Radius of influence around the mouse

    // Create an array of dots
    const dots = [];
    for (let x = 0; x < canvas.width; x += dotSpacing) {
      for (let y = 0; y < canvas.height; y += dotSpacing) {
        dots.push({ x, y });
      }
    }

    // Mouse position
    let mouseX = -influenceRadius;
    let mouseY = -influenceRadius;

    // Update mouse position on move
    document.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });

    // Draw the dots
    function drawDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        // Calculate distance from the mouse
        const distance = Math.hypot(dot.x - mouseX, dot.y - mouseY);

        // Calculate opacity based on distance
        let opacity =
          maxOpacity - (distance / influenceRadius) * (maxOpacity - minOpacity);
        opacity = Math.max(minOpacity, Math.min(maxOpacity, opacity));

        // Draw the dot with the calculated opacity
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Request the next frame
      requestAnimationFrame(drawDots);
    }

    // Start drawing
    drawDots();

    // Handle window resize
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Recreate the dots array
      dots.length = 0;
      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          dots.push({ x, y });
        }
      }
    });
  }, []);

  const projects = [
    {
      title: "Wedding Planner Webpage",
      description:
        "A web application that helps couples find their perfect wedding venue. Features real-time venue search with database implementation, includes filters for date, party size, and catering grade. Includes interactive calendars for availability.",
      image:
        "https://placehold.co/600x400/313131/FFFFFF/png?text=Wedding+Planner+Webpage",
      tags: ["PHP", "Web", "Calendar", "MySQL"],
      url: "https://github.com/gwmanthorp/wedding-planner-webpage",
    },
    {
      title: "Video Game Management",
      description:
        "A Python-based video game rental management system that integrates customer subscriptions, rental tracking, and inventory analytics. Built using Jupyter Notebook for the interface.",
      image:
        "https://placehold.co/600x400/313131/FFFFFF/png?text=Video+Game+Management",
      tags: ["Python", "Jupyter", "Data Visualisation"],
      url: "https://github.com/gwmanthorp/video-game-management",
    },
    {
      title: "Computer Accessories Store",
      description:
        "A Java-based GUI application that manages an electronics store specializing in keyboards and mice. Features include user authentication for admin/customer roles, product inventory management, and shopping functionalities.",
      image:
        "https://placehold.co/600x400/313131/FFFFFF/png?text=Computer+Accessories+Store",
      tags: ["Java", "GUI", "Inventory"],
      url: "https://github.com/gwmanthorp/computer-accessories-store",
    },
  ];

  const skills = [
    {
      category: "Technical Skills",
      subheading: "Acquired through education and projects",
      items: [
        [
          "Languages",
          [
            "Python",
            "Java",
            "PHP",
            "SQL",
            "HTML/CSS",
            "JavaScript",
            "C++",
            "Haskell",
          ],
        ],
        ["Methodologies", ["Agile", "Scrum", "Waterfall", "Pair Programming"]],
        ["Tools", ["Git/GitHub", "MySQL", "VS Code", "Figma"]],
        ,
      ],
    },
    {
      category: "Soft Skills",
      subheading: "Developed in various roles",
      items: [
        "Teamwork",
        "Communication",
        "Problem Solving",
        "Time Management",
        "Positive Attitude",
        "Presentation Skills",
      ],
    },
    {
      category: "Tutoring",
      subheading: "Southend High School for Boys",
      items: [
        "Experience in tutoring in the field of computer science. When studying at A-level, I tutored students in the year below me in computer science (completing their GCSEs), helping them to understand the concepts and improve their grades.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-inter relative overflow-hidden">
      <canvas
        id="dotCanvas"
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      ></canvas>

      {/* Floating Social Links */}
      <div
        className="
    fixed 
    top-4 left-1/2 transform -translate-x-1/2
    lg:top-1/2 lg:left-4 lg:-translate-x-0 lg:-translate-y-1/2
    rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 
      backdrop-blur-[3px] shadow-[-5px_5px_10px_rgba(0,0,0,0.3)] 
      border border-white/10 p-4
    flex flex-row lg:flex-col
    gap-4 md:gap-8
    z-40
  "
      >
        <a
          href="https://github.com/gwmanthorp/"
          target="_blank"
          className="hover:scale-125 transition-transform"
          onMouseEnter={() => setShowCursor(false)}
          onMouseLeave={() => setShowCursor(true)}
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/george-manthorp/"
          target="_blank"
          className="hover:scale-125 transition-transform"
          onMouseEnter={() => setShowCursor(false)}
          onMouseLeave={() => setShowCursor(true)}
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="/George_Manthorp_CV.docx"
          className="hover:scale-125 transition-transform"
          onMouseEnter={() => setShowCursor(false)}
          onMouseLeave={() => setShowCursor(true)}
          download
        >
          <FileDown className="w-6 h-6" />
        </a>
      </div>

      {/* Main content */}
      <div className="lg:pl-[7%]">
        {/* Hero section with animated text */}
        <div className="h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-0">
          {/* Profile Image */}
          <div className="md:flex-1 mt-8 md:mt-0 py-6 flex justify-center">
            <img
              src="./profile-picture.jpg"
              alt="Profile"
              className="rounded-full object-cover w-48 h-48 md:w-64 md:h-64 lg:w-[400px] lg:h-[400px] p-1 rounded-full bg-gradient-to-br from-purple-900/80 to-blue-900/80 shadow-2xl hover:scale-105 transition-transform duration-300"
              style={{ zIndex: 1 }}
            />
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-1 md:flex-1 space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block opacity-0 animate-[fadeInUp_0.5s_0.2s_forwards]">
                George
              </span>
              <span className="block opacity-0 animate-[fadeInUp_0.5s_0.4s_forwards]">
                Manthorp
              </span>
            </h1>
            <span className="block text-lg md:text-xl text-gray-400 opacity-0 animate-[fadeInUp_0.5s_0.8s_forwards]">
              2nd Year Computer Science Student
            </span>
            <span className="block text-lg md:text-xl text-gray-400 opacity-0 animate-[fadeInUp_0.5s_0.8s_forwards]">
              Loughborough University
            </span>
            <div className="opacity-0 animate-[fadeInUp_0.5s_1s_forwards] flex items-center justify-center md:justify-start">
              <MousePointerClick className="w-6 h-6 animate-bounce" />
              <span className="ml-2">Scroll to explore</span>
            </div>
          </div>
        </div>

        {/* Project showcase */}
        <div className="py-16 md:py-32 px-4 md:px-8 lg:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 
      backdrop-blur-[3px] shadow-[-5px_5px_10px_rgba(0,0,0,0.3)] 
      border border-white/10 overflow-hidden 
      hover:from-purple-900/80 hover:to-blue-900/80 transition-all duration-500"
              >
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/10 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    className="inline-flex items-center hover:underline text-blue-400"
                  >
                    View Project <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills section with animated progress bars */}
        <div className="py-16 md:py-32 px-4 md:px-8 lg:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16">
            Experience & Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 
      backdrop-blur-[3px] shadow-[-5px_5px_10px_rgba(0,0,0,0.3)] 
      border border-white/10 overflow-hidden 
      hover:from-purple-900/80 hover:to-blue-900/80 transition-all duration-500"
              >
                <div className="flex items-center gap-2 md:gap-4 mb-1 md:mb-2">
                  {index === 0 && <Code className="w-4 h-4 md:w-6 md:h-6" />}
                  {index === 1 && <Brain className="w-4 h-4 md:w-6 md:h-6" />}
                  {index === 2 && <Users className="w-4 h-4 md:w-6 md:h-6" />}
                  <h3 className="text-lg md:text-xl font-semibold">
                    {skillGroup.category}
                  </h3>
                </div>
                {skillGroup.subheading && (
                  <h4 className="text-sm text-gray-400 mb-4 md:mb-6">
                    {skillGroup.subheading}
                  </h4>
                )}
                <div className="space-y-6 md:space-y-1">
                  {index === 0 &&
                    skillGroup.items.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1 md:mb-2">
                          <ul style={{ listStyleType: "disc" }}>
                            <li>
                              <b>{skill[0]}</b>
                              <ul style={{ listStyleType: "circle" }}>
                                <li>{skill[1].join(", ")}</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  {index === 1 &&
                    skillGroup.items.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1 md:mb-2">
                          <ul style={{ listStyleType: "disc" }}>
                            <li>{skill}</li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  {index === 2 && (
                    <div key={index}>
                      <div className="flex justify-between mb-1 md:mb-2">
                        {skillGroup.items}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center min-h-screen text-white p-4 relative z-10">
          <form
            action="https://getform.io/f/bnllrveb"
            method="POST"
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-[3px] shadow-[-5px_5px_10px_rgba(0,0,0,0.3)] border border-white/10 rounded-2xl p-8 w-full max-w-4xl space-y-6 hover:from-purple-900/80 hover:to-blue-900/80 transition-all duration-500"
          >
            <h2 className="text-2xl font-bold text-center text-white">
              Contact Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>

            <input
              type="hidden"
              name="_gotcha"
              style={{ display: "none !important" }}
            />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition duration-300"
            >
              Send
            </button>
          </form>
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
        ul {
          padding-left: 1em;
        }
      `}</style>
    </div>
  );
}
