"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import CoursesOverview from "@/components/courses-overview"
import MobileAppSection from "@/components/mobile-app-section"
import FullStackSection from "@/components/full-stack-section"
import BackendSection from "@/components/backend-section"
import FrontendSection from "@/components/frontend-section"
import TestimonialsSection from "@/components/testimonials-section"
import FaqSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"


export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
   
    <main ref={ref} className="relative bg-black">
      <Navbar />
      <Hero />

      {/* <motion.div
        className="absolute inset-0 pointer-events-none z-[-1] opacity-20"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY,
        }}
      /> */}

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>

      <AboutSection />
      <CoursesOverview />
      <MobileAppSection />
      <FullStackSection />
      <BackendSection />
      <FrontendSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
   
  )
}

