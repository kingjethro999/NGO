'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

const ProgramsHero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Globe className="w-10 h-10 text-secondary-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-secondary-600">Global Programs</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to creating sustainable change through our comprehensive programs in education, healthcare, community development, and emergency relief.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ProgramsHero 