import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { CoffeeIcon, GymIcon, PortfolioIcon } from "./ProjectIcons"

export default function Projects() {
  const projects = [
    {
      title: "Coffee Chat",
      description:
        "A full-stack social platform built with the MERN stack to connect like-minded individuals through interest-based groups and events. Features Firebase & Google OAuth authentication, JWT sessions, Cloudinary image uploads, and a premium, responsive UI with Tailwind CSS, Framer Motion, and Lucide icons.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      github: "https://github.com/kalviumcommunity/S85_Madhav_Capstone_Coffee-Chat?tab=readme-ov-file",
      live: "https://coffeechatweb.netlify.app/",
      icon: CoffeeIcon,
      color: "from-amber-500 via-orange-500 to-red-500",
    },
    {
      title: "Gym Management System",
      description:
        "A full-stack Gym Management System built with the MERN stack. Features secure JWT authentication, admin-specific member control, responsive UI, custom CSS styling, and smooth animations—all following modern web development best practices.",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      github: "https://github.com/kalviumcommunity/S85_Gym_Management_System/tree/Gym_management?tab=readme-ov-file",
      live: "https://ironcorefit.netlify.app/",
      icon: GymIcon,
      color: "from-red-500 via-pink-500 to-purple-500",
    },
    {
      title: "Portfolio Website",
      description:
        "A cutting-edge portfolio website showcasing modern web development practices. Features advanced animations, responsive design, performance optimization, and accessibility compliance following industry standards.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/MadhavGarg98",
      live: "#",
      icon: PortfolioIcon,
      color: "from-purple-500 via-blue-500 to-cyan-500",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and professional projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card
                key={project.title}
                className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-500 transform hover:scale-105 group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-8 flex justify-center perspective-1000">
                    <div
                      className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${project.color} flex items-center justify-center animate-rotate-3d group-hover:animate-rotate-3d-fast transition-all duration-700 shadow-2xl group-hover:shadow-3xl relative overflow-hidden`}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
                      <IconComponent />
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors text-center">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed text-center">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300 hover:bg-purple-600 hover:text-white transition-all duration-300 backdrop-blur-sm text-xs px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:border-purple-500 flex-1 group/btn backdrop-blur-sm bg-transparent"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.github, "_blank")
                      }}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 flex-1 group/btn disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={(e) => {
                        e.stopPropagation()
                        if (project.live && project.live !== "#") {
                          window.open(project.live, "_blank")
                        }
                      }}
                      disabled={!project.live || project.live === "#"}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                      {project.live && project.live !== "#" ? "Live" : "Coming Soon"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
} 