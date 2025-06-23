'use client'

import { motion } from 'framer-motion'
import { Heart, Award } from 'lucide-react'
import Image from 'next/image'

const HealthcareProgram = () => {
  return (
    <section id="healthcare" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-64 lg:h-80 order-last lg:order-first"
          >
            <Image src="/programs/healthcare.jpg" alt="Doctor checking a patient" layout="fill" objectFit="cover" className="rounded-2xl shadow-xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Healthcare Access</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Access to healthcare is a fundamental human right. We establish medical clinics, provide essential health services, and train local healthcare workers to ensure communities have the care they need.
            </p>
            <div className="flex items-center space-x-3 text-accent-600 font-semibold">
              <Award className="w-5 h-5" />
              <span>Over 25,000 individuals received medical care</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HealthcareProgram 