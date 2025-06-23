'use client'

import { motion } from 'framer-motion'
import { Home, Award } from 'lucide-react'
import Image from 'next/image'

const CommunityProgram = () => {
  return (
    <section id="community" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-secondary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Community Development</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We work with communities to build sustainable infrastructure, including clean water systems, sanitation facilities, and community centers, fostering self-reliance and growth.
            </p>
            <div className="flex items-center space-x-3 text-secondary-600 font-semibold">
              <Award className="w-5 h-5" />
              <span>Over 50 communities have been transformed</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-64 lg:h-80"
          >
            <Image src="/programs/community.jpg" alt="Community members working together" layout="fill" objectFit="cover" className="rounded-2xl shadow-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CommunityProgram 