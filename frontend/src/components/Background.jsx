export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-blue-900/20" />

      <div
        className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl sm:blur-3xl animate-float-simple"
        style={{
          top: "10%",
          left: "5%",
        }}
      />
      <div
        className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl sm:blur-3xl animate-float-simple"
        style={{
          top: "60%",
          right: "5%",
          animationDelay: "3s",
        }}
      />

      {[...Array(5)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white/30 rounded-full animate-twinkle-simple"
          style={{
            left: `${15 + i * 15}%`,
            top: `${15 + i * 12}%`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}
    </div>
  )
} 