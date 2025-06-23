'use client'

import { motion } from 'framer-motion'
import { Shield, Award } from 'lucide-react'
import Image from 'next/image'

const EmergencyProgram = () => {
  return (
    <section id="emergency" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-64 lg:h-80 order-last lg:order-first"
          >
            <Image src="/programs/emergency.jpg" alt="Emergency relief supplies" layout="fill" objectFit="cover" className="rounded-2xl shadow-xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Emergency Relief</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              When disaster strikes, we are ready to respond. We provide immediate assistance during natural disasters, conflicts, and humanitarian crises, delivering essential supplies and support to those in need.
            </p>
            <div className="flex items-center space-x-3 text-primary-600 font-semibold">
              <Award className="w-5 h-5" />
              <span>Over 100,000 people assisted in emergencies</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EmergencyProgram 