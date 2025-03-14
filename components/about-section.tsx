"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Users, Award, Zap } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const features = [
    {
      icon: <Code className="h-8 w-8 text-yellow-400" />,
      title: "Industry-Relevant Curriculum",
      description:
        "Our courses are designed with input from industry experts to ensure you learn skills that are in demand.",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Expert Instructors",
      description: "Learn from experienced professionals who bring real-world insights to every lesson.",
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-400" />,
      title: "Hands-on Projects",
      description:
        "Apply your knowledge through practical projects that build your portfolio and prepare you for real jobs.",
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: "Coding Easy Hai!",
      description: "Our unique teaching methodology makes complex coding concepts easy to understand and implement.",
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Cleancodin
            </span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Cleancodin is your one-stop platform for mastering coding skills with real-world projects, expert guidance,
            and an engaging learning experience. Our modern approach ensures an interactive and enjoyable learning
            journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
            >
              <div className="mb-4 p-3 rounded-full bg-gray-800 inline-block">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/20">
            <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-gray-300 text-lg">
              To make coding accessible to everyone by breaking down complex concepts into easy-to-understand modules
              and providing a supportive learning environment where students can grow their skills with confidence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

