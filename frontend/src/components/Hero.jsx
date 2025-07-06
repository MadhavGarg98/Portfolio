import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Github, MapPin, Globe, ArrowLeft } from "lucide-react"

export default function Hero({ scrollToSection, madhavGarg }) {
  const [showConsole, setShowConsole] = useState(false)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-40 h-40 border-2 border-purple-500/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border-2 border-cyan-500/20 rounded-full animate-spin-reverse" />

        <div className="absolute top-1/5 left-1/5 w-8 h-8 bg-purple-500/20 rotate-45 animate-float-gentle" />
        <div
          className="absolute top-2/3 right-1/3 w-6 h-6 bg-blue-500/20 rounded-full animate-float-gentle"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="overflow-hidden">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span
                  className="animate-slide-in-smooth opacity-0 text-white"
                  style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
                >
                  Hi I'm{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Madhav Garg
                  </span>
                </span>
              </h1>
            </div>

            <div className="overflow-hidden">
              <h2
                className="text-3xl md:text-5xl font-light text-gray-300 animate-fade-in-smooth opacity-0"
                style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
              >
                Full Stack Developer
              </h2>
              <h3
                className="text-xl md:text-2xl font-light text-gray-400 animate-fade-in-smooth opacity-0"
                style={{ animationDelay: "1s", animationFillMode: "forwards" }}
              >
                Passionate about building things that live on the web
              </h3>
              <p
                className="text-lg md:text-xl text-gray-500 animate-fade-in-smooth opacity-0 max-w-2xl"
                style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
              >
                From single-page apps to full-fledged backend systems. My focus is on writing clean, efficient code
                and designing user-first interfaces that are fast, accessible, and production-ready.
              </p>
            </div>

            <p
              className="text-lg text-gray-400 max-w-2xl leading-relaxed animate-fade-in-smooth opacity-0"
              style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}
            >
              MERN Stack | Student at Chitkara×Kalvium | 10.0 CGPA
            </p>
          </div>

          <div
            className="flex flex-wrap gap-4 animate-fade-in-smooth opacity-0"
            style={{ animationDelay: "1.6s", animationFillMode: "forwards" }}
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 group"
            >
              <Mail className="w-5 h-5 mr-2" />
              Let's Connect
            </Button>
            <Button
              onClick={() => window.open("https://github.com/MadhavGarg98", "_blank")}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:border-purple-500 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm"
            >
              <Github className="w-5 h-5 mr-2" />
              View Work
            </Button>
          </div>

          <div
            className="flex items-center space-x-6 pt-4 animate-fade-in-smooth opacity-0"
            style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}
          >
            <div className="flex items-center text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
              <MapPin className="w-5 h-5 mr-2" />
              India
            </div>
            <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
              <Globe className="w-5 h-5 mr-2" />
              Open for internship opportunities
            </div>
          </div>
        </div>

        <div
          className="relative animate-slide-in-smooth opacity-0"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          <div className="relative w-full h-[500px] rounded-2xl bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 overflow-hidden group hover:bg-gray-900/95 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50 group-hover:border-purple-500/30 transition-colors">
              <div className="flex space-x-2">
                <div className="w-4 h-4 rounded-full bg-red-500 group-hover:bg-red-400 transition-colors" />
                <div className="w-4 h-4 rounded-full bg-yellow-500 group-hover:bg-yellow-400 transition-colors" />
                <div className="w-4 h-4 rounded-full bg-green-500 group-hover:bg-green-400 transition-colors" />
              </div>
              <div className="text-gray-400 text-sm font-mono group-hover:text-purple-400 transition-colors">
                madhav_garg.js
              </div>
              <div className="w-6" />
            </div>

            <div className="relative">
              {!showConsole ? (
                <div className="p-6 font-mono text-sm space-y-2 group-hover:text-gray-200 transition-colors">
                  <div
                    className="text-purple-400 animate-type-in opacity-0 group-hover:text-purple-300"
                    style={{ animationDelay: "1s", animationFillMode: "forwards" }}
                  >
                    <span className="text-gray-500">1</span> const madhavGarg = {"{"}
                  </div>
                  <div
                    className="text-gray-300 ml-4 animate-type-in opacity-0"
                    style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
                  >
                    <span className="text-gray-500">2</span> name:{" "}
                    <span className="text-green-400 group-hover:text-green-300">"{madhavGarg.name}"</span>,
                  </div>
                  <div
                    className="text-gray-300 ml-4 animate-type-in opacity-0"
                    style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}
                  >
                    <span className="text-gray-500">3</span> role:{" "}
                    <span className="text-green-400 group-hover:text-green-300">"{madhavGarg.role}"</span>,
                  </div>
                  <div
                    className="text-gray-300 ml-4 animate-type-in opacity-0"
                    style={{ animationDelay: "1.6s", animationFillMode: "forwards" }}
                  >
                    <span className="text-gray-500">4</span> skills:{" "}
                    <span className="text-yellow-400 group-hover:text-yellow-300">[{madhavGarg.skills.map(skill => `"${skill}"`).join(", ")}]</span>,
                  </div>
                  <div
                    className="text-gray-300 ml-4 animate-type-in opacity-0"
                    style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}
                  >
                    <span className="text-gray-500">5</span> education:{" "}
                    <span className="text-green-400 group-hover:text-green-300">"{madhavGarg.education}"</span>,
                  </div>
                  <div
                    className="text-gray-300 ml-4 animate-type-in opacity-0"
                    style={{ animationDelay: "2s", animationFillMode: "forwards" }}
                  >
                    <span className="text-gray-500">6</span> year:{" "}
                    <span className="text-cyan-400 group-hover:text-cyan-300">"{madhavGarg.year}"</span>,
                  </div>
                  <div
                    className="text-gray-300 ml-4 animate-type-in opacity-0"
                    style={{ animationDelay: "2.2s", animationFillMode: "forwards" }}
                  >
                    <span className="text-gray-500">7</span> cgpa:{" "}
                    <span className="text-blue-400 group-hover:text-blue-300">{madhavGarg.cgpa}</span>,
                  </div>
                  <div
                    className="text-gray-300 ml-4 animate-type-in opacity-0"
                    style={{ animationDelay: "2.4s", animationFillMode: "forwards" }}
                  >
                    <span className="text-gray-500">8</span> contact:{" "}
                    <span className="text-green-400 group-hover:text-green-300">"{madhavGarg.contact}"</span>
                  </div>
                  <div
                    className="text-purple-400 animate-type-in opacity-0 group-hover:text-purple-300"
                    style={{ animationDelay: "2.6s", animationFillMode: "forwards" }}
                  >
                    <span className="text-gray-500">9</span> {"}"}
                  </div>
                  <div
                    className="text-gray-500 animate-type-in opacity-0"
                    style={{ animationDelay: "2.8s", animationFillMode: "forwards" }}
                  >
                    <span className="text-gray-500">10</span>
                  </div>
                  <div className="text-blue-400 animate-type-in opacity-0 group-hover:text-blue-300" style={{ animationDelay: "3s", animationFillMode: "forwards" }}>
                    <span className="text-gray-500">11</span> console.log<span className="text-white">(</span>madhavGarg
                    <span className="text-white">)</span>
                    <button
                      className="ml-3 px-2 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded transition-all"
                      onClick={() => setShowConsole(true)}
                      style={{ outline: 'none', border: 'none' }}
                    >
                      Run
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6 font-mono text-sm space-y-2 group-hover:text-gray-200 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">{'>'}</span>
                      <span className="text-gray-400">console.log(madhavGarg)</span>
                    </div>
                    <button
                      onClick={() => setShowConsole(false)}
                      className="text-gray-500 hover:text-gray-300 transition-colors p-1 rounded hover:bg-gray-800/50"
                      title="Back to code"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="bg-[#181c1f] border border-green-700/50 rounded-lg p-4 text-green-400 text-sm font-mono shadow-lg">
                    <pre className="whitespace-pre-wrap break-words">{JSON.stringify(madhavGarg, null, 2)}</pre>
                  </div>
                </div>
              )}
            </div>

            <div className="absolute bottom-6 right-6">
              <div className="flex space-x-3">
                {[
                  { name: "JS", color: "from-yellow-400 to-yellow-600" },
                  { name: "React", color: "from-blue-400 to-blue-600" },
                  { name: "Node", color: "from-green-400 to-green-600" },
                  { name: "Mongo", color: "from-green-500 to-green-700" },
                ].map((tech, i) => (
                  <div
                    key={tech.name}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-xs font-bold text-white animate-fade-in-smooth opacity-0 hover:scale-110 transition-transform cursor-pointer shadow-lg`}
                    style={{
                      animationDelay: `${3.2 + i * 0.1}s`,
                      animationFillMode: "forwards",
                    }}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 