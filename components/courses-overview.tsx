"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Smartphone, Code2, Server, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CoursesOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const courses = [
    {
      icon: <Smartphone className="h-10 w-10 text-yellow-400" />,
      title: "Mobile App Development",
      price: "₹30,000",
      description: "Build mobile apps for iOS & Android with the latest frameworks!",
      color: "from-yellow-500/20 to-yellow-500/5",
      borderColor: "border-yellow-500/30",
      href:"#mobile"
    },
    {
      icon: <Code2 className="h-10 w-10 text-orange-500" />,
      title: "Full Stack Development",
      price: "₹40,000",
      description: "Master both frontend & backend to become a complete web developer!",
      color: "from-orange-500/20 to-orange-500/5",
      borderColor: "border-orange-500/30",
       href:"#full"
    },
    {
      icon: <Server className="h-10 w-10 text-yellow-400" />,
      title: "Backend Development",
      price: "₹25,000",
      description: "Become a backend pro with top technologies!",
      color: "from-yellow-500/20 to-yellow-500/5",
      borderColor: "border-yellow-500/30",
       href:"#back"
    },
    {
      icon: <Palette className="h-10 w-10 text-orange-500" />,
      title: "Frontend Development",
      price: "₹18,000",
      description: "Design & develop stunning web interfaces!",
      color: "from-orange-500/20 to-orange-500/5",
      borderColor: "border-orange-500/30",
       href:"#front"
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
    <section id="courses" ref={ref} className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Courses
            </span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Explore our comprehensive range of courses designed to help you master the most in-demand coding skills in
            the industry.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-gradient-to-b ${course.color} backdrop-blur-sm border ${course.borderColor} rounded-xl p-6 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 group`}
            >
              <div className="mb-4 p-3 rounded-full bg-gray-900 inline-block">{course.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
              <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text mb-3">
                {course.price}
              </div>
              <p className="text-gray-300 mb-4">{course.description}</p>
              <Button
                variant="outline"
                className="w-full border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                onClick={() => window.location.href = course.href}
              >
                View Details
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-medium text-lg px-8 py-6" onClick={() => window.location.href = '#mobile'}>
            View All Courses
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

