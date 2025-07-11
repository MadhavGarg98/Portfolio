import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Github, MapPin, Globe, ArrowLeft, FileText } from "lucide-react"

export default function Hero({ scrollToSection, madhavGarg }) {
  const [showConsole, setShowConsole] = useState(false)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 border-2 border-purple-500/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 border-2 border-cyan-500/20 rounded-full animate-spin-reverse" />

        <div className="absolute top-1/5 left-1/5 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-purple-500/20 rotate-45 animate-float-gentle" />
        <div
          className="absolute top-2/3 right-1/3 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-blue-500/20 rounded-full animate-float-gentle"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8 min-w-0">
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="overflow-hidden">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight break-words hyphens-auto whitespace-normal">
                <span
                  className="animate-slide-in-smooth opacity-0 text-white inline-block"
                  style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
                >
                  Hi I'm{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Madhav
                  </span>
                </span>
              </h1>
            </div>

            <div className="overflow-hidden">
              <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-300 animate-fade-in-smooth opacity-0 leading-tight"
                style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
              >
                Full Stack Developer
              </h2>
              <h3
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-400 animate-fade-in-smooth opacity-0 leading-tight mt-2"
                style={{ animationDelay: "1s", animationFillMode: "forwards" }}
              >
                Passionate about building things that live on the web
              </h3>
              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 animate-fade-in-smooth opacity-0 max-w-2xl leading-relaxed mt-3"
                style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
              >
                From single-page apps to full-fledged backend systems. My focus is on writing clean, efficient code
                and designing user-first interfaces that are fast, accessible, and production-ready.
              </p>
            </div>

            <p
              className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed animate-fade-in-smooth opacity-0"
              style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}
            >
              MERN Stack | Student at Chitkara×Kalvium | 10.0 CGPA
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-in-smooth opacity-0"
            style={{ animationDelay: "1.6s", animationFillMode: "forwards" }}
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 group text-xs sm:text-sm md:text-base w-full sm:w-auto"
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2" />
              Let's Connect
            </Button>
            <Button
              onClick={() => window.open("https://github.com/MadhavGarg98", "_blank")}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:border-purple-500 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm text-xs sm:text-sm md:text-base w-full sm:w-auto"
            >
              <Github className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2" />
              View Work
            </Button>
            <Button
              onClick={() => window.open("/images/Madhav Garg.docx.pdf", "_blank")}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:border-green-500 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm text-xs sm:text-sm md:text-base w-full sm:w-auto"
            >
              <FileText className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2" />
              Resume
            </Button>
          </div>

          <div
            className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 pt-2 sm:pt-4 animate-fade-in-smooth opacity-0"
            style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}
          >
            <div className="flex items-center text-gray-400 hover:text-purple-400 transition-colors cursor-pointer text-xs sm:text-sm md:text-base">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
              <span className="truncate">India</span>
            </div>
            <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors cursor-pointer text-xs sm:text-sm md:text-base">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
              <span className="truncate">Open for internship opportunities</span>
            </div>
          </div>
        </div>

        <div
          className="relative animate-slide-in-smooth opacity-0 mt-8 lg:mt-0 w-full"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] rounded-xl sm:rounded-2xl bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 overflow-hidden group hover:bg-gray-900/95 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
            <div className="flex items-center justify-between p-2 sm:p-3 md:p-4 border-b border-gray-700/50 group-hover:border-purple-500/30 transition-colors">
              <div className="flex space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-red-500 group-hover:bg-red-400 transition-colors" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-yellow-500 group-hover:bg-yellow-400 transition-colors" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-green-500 group-hover:bg-green-400 transition-colors" />
              </div>
              <div className="text-gray-400 text-xs sm:text-sm font-mono group-hover:text-purple-400 transition-colors truncate">
                madhav_garg.js
              </div>
              <div className="w-3 sm:w-4 md:w-6" />
            </div>

            <div className="relative h-full overflow-y-auto">
              {!showConsole ? (
                <div className="p-2 sm:p-3 md:p-4 lg:p-6 font-mono text-xs sm:text-sm space-y-1 sm:space-y-2 group-hover:text-gray-200 transition-colors">
                  <div
                    className="text-purple-400 animate-type-in opacity-0 group-hover:text-purple-300 break-all"
                    style={{ animationDelay: "1s", animationFillMode: "forwards" }}
                  >
                    <span className="text-gray-500">1</span> const madhavGarg = {"{"}
                  </div>
                  <div
                    className="text-gray-300 ml-2 sm:ml-4 animate-type-in opacity-0 break-all"
                    style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
                  >
                    <span className="text-gray-500">2</span> name:{" "}
                    <span className="text-green-400 group-hover:text-green-300">"{madhavGarg.name}"</span>,
                  </div>
                  <div
                    className="text-gray-300 ml-2 sm:ml-4 animate-type-in opacity-0 break-all"
                    style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}
                  >
                    <span className="text-gray-500">3</span> role:{" "}
                    <span className="text-green-400 group-hover:text-green-300">"{madhavGarg.role}"</span>,
                  </div>
                  <div
                    className="text-gray-300 ml-2 sm:ml-4 animate-type-in opacity-0 break-all"
                    style={{ animationDelay: "1.6s", animationFillMode: "forwards" }}
                  >
                    <span className="text-gray-500">4</span> skills:{" "}
                    <span className="text-yellow-400 group-hover:text-yellow-300">[{madhavGarg.skills.map(skill => `"${skill}"`).join(", ")}]</span>,
                  </div>
                  <div
                    className="text-gray-300 ml-2 sm:ml-4 animate-type-in opacity-0 break-all"
                    style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}
                  >
                    <span className="text-gray-500">5</span> education:{" "}
                    <span className="text-green-400 group-hover:text-green-300">"{madhavGarg.education}"</span>,
                  </div>
                  <div
                    className="text-gray-300 ml-2 sm:ml-4 animate-type-in opacity-0 break-all"
                    style={{ animationDelay: "2s", animationFillMode: "forwards" }}
                  >
                    <span className="text-gray-500">6</span> year:{" "}
                    <span className="text-cyan-400 group-hover:text-cyan-300">"{madhavGarg.year}"</span>,
                  </div>
                  <div
                    className="text-gray-300 ml-2 sm:ml-4 animate-type-in opacity-0 break-all"
                    style={{ animationDelay: "2.2s", animationFillMode: "forwards" }}
                  >
                    <span className="text-gray-500">7</span> cgpa:{" "}
                    <span className="text-blue-400 group-hover:text-blue-300">{madhavGarg.cgpa}</span>,
                  </div>
                  <div
                    className="text-gray-300 ml-2 sm:ml-4 animate-type-in opacity-0 break-all"
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
                  <div className="text-blue-400 animate-type-in opacity-0 group-hover:text-blue-300 break-all" style={{ animationDelay: "3s", animationFillMode: "forwards" }}>
                    <span className="text-gray-500">11</span> console.log<span className="text-white">(</span>madhavGarg
                    <span className="text-white">)</span>
                    <button
                      className="ml-2 sm:ml-3 px-2 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded transition-all"
                      onClick={() => setShowConsole(true)}
                      style={{ outline: 'none', border: 'none' }}
                    >
                      Run
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-2 sm:p-3 md:p-4 lg:p-6 font-mono text-xs sm:text-sm space-y-1 sm:space-y-2 group-hover:text-gray-200 transition-colors">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">{'>'}</span>
                      <span className="text-gray-400 truncate">console.log(madhavGarg)</span>
                    </div>
                    <button
                      onClick={() => setShowConsole(false)}
                      className="text-gray-500 hover:text-gray-300 transition-colors p-1 rounded hover:bg-gray-800/50 flex-shrink-0"
                      title="Back to code"
                    >
                      <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                  <div className="bg-[#181c1f] border border-green-700/50 rounded-lg p-2 sm:p-3 md:p-4 text-green-400 text-xs sm:text-sm font-mono shadow-lg overflow-auto">
                    <pre className="whitespace-pre-wrap break-words">{JSON.stringify(madhavGarg, null, 2)}</pre>
                  </div>
                </div>
              )}
            </div>

            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-6 right-2 sm:right-3 md:right-4 lg:right-6">
              <div className="flex flex-wrap space-x-1 sm:space-x-2 md:space-x-3 gap-y-2">
                {[
                  { name: "JS", color: "from-yellow-400 to-yellow-600" },
                  { name: "React", color: "from-blue-400 to-blue-600" },
                  { name: "Node", color: "from-green-400 to-green-600" },
                  { name: "Db", color: "from-green-500 to-green-700" },
                ].map((tech, i) => (
                  <div
                    key={tech.name}
                    className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-xs font-bold text-white animate-fade-in-smooth opacity-0 hover:scale-110 transition-transform cursor-pointer shadow-lg`}
                    style={{
                      animationDelay: `${3.2 + i * 0.1}s`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <span className="text-xs sm:text-sm md:text-base">{tech.name}</span>
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