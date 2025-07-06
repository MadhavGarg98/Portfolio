import { Mail, Github, Linkedin, Globe, MapPin } from "lucide-react"

export default function Navigation({ scrollToSection }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => scrollToSection("home")}
            className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
          >
            MG
          </button>
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group px-4 py-2 rounded-full hover:bg-gray-800/30"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-8 transition-all duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 