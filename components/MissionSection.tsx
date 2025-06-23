'use client'

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

const MissionSection = () => {
  return (
    <section className="section-padding bg-white" id="mission">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary-50 rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To empower vulnerable communities by providing sustainable solutions in education, healthcare, and economic development. We strive to create a world where every individual has the opportunity to reach their full potential, fostering a cycle of growth and self-reliance.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-secondary-50 rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-secondary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We envision a world of equity and justice, where all communities are self-sufficient and resilient. We aim to be a catalyst for change, creating a global network of empowered individuals working together for a better future.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection 