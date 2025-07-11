export default function Footer() {
  return (
    <footer className="py-4 sm:py-6 md:py-8 border-t border-gray-800/50 bg-gray-950/50 backdrop-blur-sm px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <div className="text-gray-400 text-xs sm:text-sm animate-fade-in-up text-center md:text-left">
            © 2025 Madhav Garg. All rights reserved.
          </div>
          <div className="flex space-x-4 sm:space-x-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 