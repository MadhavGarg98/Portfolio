import { useState } from "react"
import { Mail, Github, Linkedin, Globe, MapPin, Menu, X } from "lucide-react"

export default function Navigation({ scrollToSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
          >
            MG
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group px-3 sm:px-4 py-2 rounded-full hover:bg-gray-800/30 text-sm lg:text-base"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-6 lg:w-8 transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/30"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="py-3 sm:py-4 space-y-1 sm:space-y-2 border-t border-gray-700/50">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className="w-full text-left text-gray-300 hover:text-white hover:bg-gray-800/30 transition-all duration-300 px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center justify-between group text-sm sm:text-base"
              >
                <span>{item}</span>
                <span className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-6 sm:w-8 transition-all duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 