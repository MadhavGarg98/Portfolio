import { useEffect } from "react"
import { CheckCircle, X, AlertCircle } from "lucide-react"

export function Notification({ show, onClose, title, message, type = "success" }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show) return null

  const isError = type === "error"
  const IconComponent = isError ? AlertCircle : CheckCircle
  const iconColor = isError ? "text-red-400" : "text-green-400"
  const borderColor = isError ? "border-red-500/50" : "border-gray-700"
  const progressColor = isError ? "from-red-500 to-red-600" : "from-purple-500 to-blue-500"

  return (
    <div className="fixed top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 z-50 animate-slide-in-right">
      <div className={`bg-gray-900/95 backdrop-blur-md border ${borderColor} rounded-lg p-2 sm:p-3 md:p-4 shadow-2xl max-w-xs sm:max-w-sm mx-auto sm:mx-0`}>
        <div className="flex items-start space-x-2 sm:space-x-3">
          <div className="flex-shrink-0">
            <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${iconColor}`} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs sm:text-sm font-semibold text-white leading-tight">{title}</h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed break-words">{message}</p>
          </div>
          <button 
            onClick={onClose} 
            className="flex-shrink-0 text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-800/50"
            aria-label="Close notification"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
        <div className="mt-2 sm:mt-3 w-full bg-gray-700 rounded-full h-0.5 sm:h-1">
          <div className={`bg-gradient-to-r ${progressColor} h-0.5 sm:h-1 rounded-full animate-progress`} />
        </div>
      </div>
    </div>
  )
} 