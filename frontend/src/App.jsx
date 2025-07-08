import { useState, useEffect } from "react"
import { TechStack } from "@/components/tech-stack"
import { Notification } from "@/components/notification"
import Navigation from "@/components/Navigation"
import Background from "@/components/Background"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import { madhavGarg, skills } from "@/data/portfolioData"

export default function App() {
  const [scrollY, setScrollY] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationData, setNotificationData] = useState({ title: "", message: "", type: "success" })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <Background />
      
      <Navigation scrollToSection={scrollToSection} />
      
      <main className="relative z-10">
        <Hero scrollToSection={scrollToSection} madhavGarg={madhavGarg} />
        
        <About skills={skills} />
        
        <TechStack />
        
        <Projects />
        
        <Contact 
          setShowNotification={setShowNotification}
          setNotificationData={setNotificationData}
        />
      </main>
      
      <Footer />
      
      <ScrollToTop scrollY={scrollY} scrollToSection={scrollToSection} />

      <Notification
        show={showNotification}
        onClose={() => setShowNotification(false)}
        title={notificationData.title}
        message={notificationData.message}
        type={notificationData.type}
      />
    </div>
  )
} 