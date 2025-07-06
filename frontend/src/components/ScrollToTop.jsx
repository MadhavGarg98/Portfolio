export default function ScrollToTop({ scrollY, scrollToSection }) {
  if (scrollY <= 500) return null

  return (
    <button
      onClick={() => scrollToSection("home")}
      className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 z-40 animate-bounce-in backdrop-blur-sm"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
} 