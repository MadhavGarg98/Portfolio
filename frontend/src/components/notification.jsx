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
    <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
      <div className={`bg-gray-900/95 backdrop-blur-md border ${borderColor} rounded-lg p-4 shadow-2xl max-w-sm`}>
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <IconComponent className={`w-6 h-6 ${iconColor}`} />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-300 mt-1">{message}</p>
          </div>
          <button onClick={onClose} className="flex-shrink-0 text-gray-400 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-3 w-full bg-gray-700 rounded-full h-1">
          <div className={`bg-gradient-to-r ${progressColor} h-1 rounded-full animate-progress`} />
        </div>
      </div>
    </div>
  )
} 