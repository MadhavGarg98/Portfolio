export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 border-t border-gray-800/50 bg-gray-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-xs sm:text-sm animate-fade-in-up text-center md:text-left">© 2025 Madhav Garg. All rights reserved.</div>
          <div className="flex space-x-4 sm:space-x-6 mt-3 md:mt-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
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