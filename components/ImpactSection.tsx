'use client'

import { motion } from 'framer-motion'
import { Users, Globe, Award, Heart } from 'lucide-react'

const ImpactSection = () => {
  const stats = [
    {
      icon: Users,
      number: '50,000+',
      label: 'Lives Impacted',
      description: 'Individuals and families who have received our support'
    },
    {
      icon: Globe,
      number: '25+',
      label: 'Countries Served',
      description: 'Nations where we have active programs and partnerships'
    },
    {
      icon: Award,
      number: '100+',
      label: 'Active Projects',
      description: 'Ongoing initiatives creating positive change'
    },
    {
      icon: Heart,
      number: '15+',
      label: 'Years of Service',
      description: 'Dedicated to making a difference since 2010'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-accent-600 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Through the generous support of donors and volunteers, we've been able to create meaningful change in communities around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                {stat.number}
              </h3>
              <p className="text-lg font-semibold mb-2">
                {stat.label}
              </p>
              <p className="text-sm opacity-80">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Join Us in Making a Difference
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Every donation, no matter the size, helps us continue our mission of creating positive change in communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/donate" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Donate Now
              </a>
              <a href="/volunteer" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Volunteer
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ImpactSection 