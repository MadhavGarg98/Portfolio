import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Wrench, Globe } from "lucide-react"

export function TechStack() {
  const techCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-purple-500 to-pink-500",
      skills: ["JavaScript", "Java", "C++"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["React.js", "Node.js", "Express.js"],
    },
    {
      title: "Databases",
      icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-green-500 to-emerald-500",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-orange-500 to-red-500",
      skills: ["Git & GitHub", "Postman", "VS Code", "Netlify", "Vercel"],
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Tech{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">Technologies and tools I use to bring ideas to life</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {techCategories.map((category) => (
            <Card
              key={category.title}
              className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105 group h-full"
            >
              <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-r ${category.color} mr-2 sm:mr-3 flex-shrink-0`}>{category.icon}</div>
                  <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors text-sm sm:text-base md:text-lg">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 flex-grow">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white transition-colors mb-1.5 sm:mb-2 text-xs sm:text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 