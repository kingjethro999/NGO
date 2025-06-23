'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, Users, Award } from 'lucide-react'

const ValuesSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We lead with empathy and kindness, ensuring everyone is treated with dignity.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold the highest standards of transparency and accountability in all we do.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of working together with communities and partners.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to delivering high-quality programs that create lasting impact.'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our values guide our actions and decisions as we work to achieve our mission.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="card p-6 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection 