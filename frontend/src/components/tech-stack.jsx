import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Wrench, Globe } from "lucide-react"

export function TechStack() {
  const techCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      skills: ["JavaScript", "Java", "C++"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Globe className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["React.js", "Node.js", "Express.js"],
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
      skills: ["Git & GitHub", "Postman", "VS Code", "Netlify", "Vercel"],
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category) => (
            <Card
              key={category.title}
              className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} mr-3`}>{category.icon}</div>
                  <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white transition-colors mr-2 mb-2"
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