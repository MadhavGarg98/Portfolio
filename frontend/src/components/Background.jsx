export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-blue-900/20" />

      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-simple"
        style={{
          top: "10%",
          left: "10%",
        }}
      />
      <div
        className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-simple"
        style={{
          top: "60%",
          right: "10%",
          animationDelay: "3s",
        }}
      />

      {[...Array(5)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white/30 rounded-full animate-twinkle-simple"
          style={{
            left: `${20 + i * 20}%`,
            top: `${20 + i * 15}%`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}
    </div>
  )
} 