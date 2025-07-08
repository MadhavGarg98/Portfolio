import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Send, Loader2 } from "lucide-react"
import { sendEmail } from "@/config/emailjs"

export default function Contact({ setShowNotification, setNotificationData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const errors = {}
    
    if (!formData.name.trim()) {
      errors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters"
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters"
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }
  }

  const getFieldClassName = (fieldName) => {
    const baseClass = "bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300 hover:border-gray-500 backdrop-blur-sm"
    const errorClass = formErrors[fieldName] ? 'border-red-500 focus:border-red-500 focus:ring-red-500 shake' : ''
    return `${baseClass} ${errorClass}`
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const emailjsResponse = await sendEmail(formData)
      
      if (emailjsResponse.success) {
        const isDemoMode = emailjsResponse.data?.message === 'Demo email sent successfully'
        
        setNotificationData({
          title: isDemoMode ? "Demo: Message Sent Successfully! 🚀" : "Message Sent Successfully! 🚀",
          message: isDemoMode 
            ? "This is a demo! To enable real email sending, please configure EmailJS. Check the console for setup instructions."
            : "Thank you for reaching out! Madhav will get back to you within 24 hours. Let's build something amazing together!",
          type: "success"
        })
        setFormData({ name: "", email: "", message: "" })
        
        const form = document.querySelector('form')
        if (form) {
          form.classList.add('pulse-success')
          setTimeout(() => {
            form.classList.remove('pulse-success')
          }, 600)
        }
      } else {
        throw new Error(emailjsResponse.error)
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setNotificationData({
        title: "Oops! Something went wrong 😅",
        message: "There was an issue sending your message. Please try again or reach out directly at madhavgarg3300@gmail.com",
        type: "error"
      })
    } finally {
      setIsSubmitting(false)
      setShowNotification(true)
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Whether you're looking to build a new website, improve your existing platform, or bring a unique project
            to life, I'm here to help
          </p>
        </div>

        <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-500 animate-slide-in-up">
          <CardContent className="p-6 sm:p-8">
            <form className="space-y-4 sm:space-y-6" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <Input
                    placeholder="John Doe"
                    className={getFieldClassName('name')}
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {formErrors.name && (
                    <p className="text-red-400 text-xs sm:text-sm mt-1 animate-fade-in">{formErrors.name}</p>
                  )}
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className={getFieldClassName('email')}
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {formErrors.email && (
                    <p className="text-red-400 text-xs sm:text-sm mt-1 animate-fade-in">{formErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <Textarea
                  placeholder="Share your thoughts..."
                  rows={4}
                  className={getFieldClassName('message')}
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {formErrors.message && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1 animate-fade-in">{formErrors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group animate-fade-in-up disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
                style={{ animationDelay: "0.4s" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
              
              <div className="text-center mt-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Feel free to reach out for professional inquiries or collaboration — no spam, please.
                </p>
              </div>
            </form>

            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700/50">
              <div className="flex justify-center space-x-4 sm:space-x-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <a
                  href="mailto:madhavgarg3300@gmail.com"
                  className="flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="hidden sm:inline">madhavgarg3300@gmail.com</span>
                  <span className="sm:hidden">Email</span>
                </a>
              </div>

              <div
                className="flex justify-center space-x-4 sm:space-x-6 mt-4 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <a
                  href="https://github.com/MadhavGarg98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/madhav-garg-b447b5324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 