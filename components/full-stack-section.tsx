"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, Database, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import image from '../public/Flux_Dev_A_modern_mobile_app_development_scene_with_a_striking_1.jpeg'

export default function FullStackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const features = [
    "MERN Stack – MongoDB, Express, React, Node.js",
    "Complete frontend & backend development",
    "Database design and implementation",
    "API development and integration",
    "Authentication and authorization",
  ]
  const handleButton=()=>{
    window.location.hash = "contact";
  }
  return (
    <section id="full" ref={ref} className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow-500/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 opacity-30" />
              <Image src={image} alt="Mobile App Development" width={700} height={700} className="w-70 h-auto" />
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="inline-block p-3 bg-black/70 backdrop-blur-sm rounded-full mb-4">
                    <motion.div
                      animate={{
                        rotateY: 360,
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <div className="flex space-x-2">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center">
                          <Globe className="h-5 w-5 text-black" />
                        </div>
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center">
                          <Database className="h-5 w-5 text-black" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Full Stack Mastery</h3>
                  <p className="text-gray-300">Become a complete web developer</p>
                </div>
              </div> */}
            </div>

            {/* Decorative elements */}
            {/* <div className="absolute -top-6 -right-6 h-24 w-24 bg-orange-500/20 rounded-full blur-xl" /> */}
            {/* <div className="absolute -top-6 -left-6 h-24 w-24 bg--500/20 rounded-full blur-xl" /> */}
            {/* <div className="absolute bottom-10 left-7 h-[30rem] w-[30rem] bg-yellow-500/20 rounded-full blur-xl" /> */}
            {/* <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-orange-500/20 rounded-full blur-xl" /> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 text-transparent bg-clip-text">
                Full Stack Development
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Master both frontend & backend to become a complete web developer! Our Full Stack Development course
              covers everything you need to build modern, scalable web applications from start to finish.
            </p>

            <div className="mb-8">
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 text-transparent bg-clip-text mb-3">
                ₹40,000
              </div>
              <p className="text-gray-400">Complete course with project-based learning</p>
            </div>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mr-3 mt-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full p-1">
                    <Check className="h-4 w-4 text-black" />
                  </div>
                  <span className="text-gray-200">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-black font-medium" onClick={handleButton}>
              Enroll Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

