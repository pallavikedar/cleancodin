"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const faqs = [
    {
      question: "Do I need prior coding experience to join your courses?",
      answer:
        "No, our courses are designed for all skill levels. We have beginner-friendly courses that start from the basics, as well as advanced courses for those looking to upgrade their skills.",
    },
    {
      question: "How long do I have access to the course materials?",
      answer:
        "Once you enroll in a course, you get lifetime access to all course materials, including future updates. You can learn at your own pace and revisit the content whenever you need.",
    },
    {
      question: "Are there any job placement opportunities after completing the courses?",
      answer:
        "Yes, we have a dedicated placement cell that helps students connect with our industry partners. We also provide career guidance, resume building, and interview preparation support.",
    },
    {
      question: "Can I pay the course fee in installments?",
      answer:
        "Yes, we offer flexible payment options including EMI plans. You can pay in 3, 6, or 12 monthly installments based on your preference.",
    },
    {
      question: "Will I get a certificate after completing the course?",
      answer:
        "Upon successful completion of the course and its projects, you will receive an industry-recognized certificate that you can add to your resume and LinkedIn profile.",
    },
    {
      question: "How are the classes conducted?",
      answer:
        "Our courses include a mix of pre-recorded video lessons, live sessions with instructors, hands-on projects, and interactive coding exercises. You also get access to our community forum where you can interact with peers and mentors.",
    },
  ]

  return (
    <section id="faq" ref={ref} className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow-500/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Frequently Asked </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Questions
            </span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Find answers to common questions about our courses, payment options, and more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:text-yellow-400 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

