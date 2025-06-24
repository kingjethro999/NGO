'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, Users, Globe, Award, Clock } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We approach every individual with empathy and understanding, ensuring their dignity and well-being are our top priorities.',
      color: 'primary'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'We maintain complete transparency in our operations, ensuring every donation is accounted for and used effectively.',
      color: 'secondary'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Our programs are designed with local communities, ensuring sustainable solutions that address real needs.',
      color: 'accent'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'We operate across multiple countries, bringing hope and support to communities worldwide.',
      color: 'primary'
    },
    {
      icon: Award,
      title: 'Proven Impact',
      description: 'With over a decade of experience, we have a proven track record of creating lasting positive change.',
      color: 'secondary'
    },
    {
      icon: Clock,
      title: 'Long-term Commitment',
      description: 'We don\'t just provide immediate relief; we build lasting partnerships for sustainable development.',
      color: 'accent'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Nwaokwu Care Foundation?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to making a real difference through our core values and proven approach to community development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="card p-8 text-center group"
            >
              <div className={`w-16 h-16 bg-${feature.color}-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-${feature.color}-200 transition-colors duration-300`}>
                <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection 