'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Globe } from 'lucide-react'

const AboutHero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-600">Hope Foundation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded in 2010, Hope Foundation has been dedicated to creating positive change in communities worldwide. We believe that every individual deserves access to education, healthcare, and opportunities for a better future.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">15+</h3>
                <p className="text-gray-600 text-sm">Years of Service</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-secondary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-600 text-sm">Team Members</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">25+</h3>
                <p className="text-gray-600 text-sm">Countries</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  What started as a small group of passionate individuals has grown into a global movement for change. Our founders recognized that sustainable development requires more than just aid – it needs community engagement, education, and long-term commitment.
                </p>
                <p>
                  Today, we work with local communities, governments, and other organizations to create lasting solutions that address the root causes of poverty and inequality.
                </p>
                <p>
                  Our approach is simple: listen to communities, understand their needs, and work together to build a better future for everyone.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero 