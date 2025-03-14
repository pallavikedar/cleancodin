"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Frontend Developer",
      company: "TechSolutions",
      image: "/placeholder.svg?height=100&width=100",
      stars: 5,
      text: "The React course at Cleancodin completely transformed my career. The instructors break down complex concepts into easy-to-understand modules. Within 3 months of completing the course, I landed a job as a Frontend Developer!",
    },
    {
      name: "Rahul Verma",
      role: "Full Stack Developer",
      company: "InnovateX",
      image: "/placeholder.svg?height=100&width=100",
      stars: 5,
      text: "I tried several online courses before, but Cleancodin's approach to teaching MERN stack was exceptional. The project-based learning helped me build a strong portfolio that impressed my employers.",
    },
    {
      name: "Ananya Patel",
      role: "Mobile App Developer",
      company: "AppWorks",
      image: "/placeholder.svg?height=100&width=100",
      stars: 5,
      text: "The Flutter course was comprehensive and practical. I went from knowing nothing about mobile development to publishing my first app in just 2 months. The support from instructors was outstanding!",
    },
    {
      name: "Vikram Singh",
      role: "Backend Engineer",
      company: "DataSphere",
      image: "/placeholder.svg?height=100&width=100",
      stars: 5,
      text: "The Node.js and Express course helped me transition from frontend to backend development. The curriculum is well-structured and the hands-on projects prepared me for real-world challenges.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">What Our </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Students Say
            </span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Hear from our students who have transformed their careers through our courses.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 relative"
            >
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full">
                <Quote className="h-5 w-5 text-black" />
              </div>
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-16 w-16 rounded-full object-cover border-2 border-yellow-500"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                  <div className="flex mt-1">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

