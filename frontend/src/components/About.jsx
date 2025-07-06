import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Rocket, Trophy } from "lucide-react"

export default function About({ skills }) {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Madhav Garg
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-500 transform hover:scale-105 group animate-slide-in-left">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">
                  Technical Skills
                </h3>
              </div>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-2000 animate-skill-bar shadow-lg shadow-purple-500/20"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card
            className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-500 transform hover:scale-105 group animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Rocket className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">Experience</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-purple-500 pl-4 hover:border-purple-400 transition-colors">
                  <h4 className="font-semibold text-white">Student Developer</h4>
                  <p className="text-gray-400 text-sm">Chitkara×Kalvium - Present</p>
                  <p className="text-gray-300 text-sm mt-2">
                    Building full-stack applications using MERN stack, maintaining 10 CGPA
                  </p>
                </div>
                <div className="border-l-2 border-blue-500 pl-4 hover:border-blue-400 transition-colors">
                  <h4 className="font-semibold text-white">Seeking Internship</h4>
                  <p className="text-gray-400 text-sm">Open for opportunities</p>
                  <p className="text-gray-300 text-sm mt-2">
                    Looking for internship opportunities in full-stack development
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-500 transform hover:scale-105 group animate-slide-in-right"
            style={{ animationDelay: "0.4s" }}
          >
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Trophy className="w-6 h-6 text-yellow-400 mr-3" />
                <h3 className="text-xl font-semibold group-hover:text-yellow-400 transition-colors">Achievements</h3>
              </div>
              <div className="space-y-4">
                <div className="text-center group-hover:scale-110 transition-transform">
                  <div className="text-3xl font-bold text-purple-400 animate-counter">2+</div>
                  <div className="text-gray-400 text-sm">Major Projects</div>
                </div>
                <div className="text-center group-hover:scale-110 transition-transform">
                  <div className="text-3xl font-bold text-blue-400 animate-counter">10</div>
                  <div className="text-gray-400 text-sm">CGPA Achieved</div>
                </div>
                <div className="text-center group-hover:scale-110 transition-transform">
                  <div className="text-3xl font-bold text-green-400 animate-counter">6+</div>
                  <div className="text-gray-400 text-sm">Technologies</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 