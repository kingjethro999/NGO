'use client'

import { motion } from 'framer-motion'
import { BookOpen, Heart, Home, Users } from 'lucide-react'

const DonationImpact = () => {
  const impacts = [
    {
      icon: BookOpen,
      amount: '$25',
      title: 'Education Supplies',
      description: 'Provides school supplies for one child for a month'
    },
    {
      icon: Heart,
      amount: '$50',
      title: 'Medical Care',
      description: 'Provides basic healthcare for a family for a week'
    },
    {
      icon: Home,
      amount: '$100',
      title: 'Clean Water',
      description: 'Provides clean water access for 10 families'
    },
    {
      icon: Users,
      amount: '$250',
      title: 'Community Center',
      description: 'Helps build and maintain community facilities'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Donation's Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how your generous contribution directly helps communities in need around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
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
                <impact.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary-600 mb-2">
                {impact.amount}
              </h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {impact.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DonationImpact 