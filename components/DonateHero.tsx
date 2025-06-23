'use client'

import { motion } from 'framer-motion'
import { Heart, DollarSign, Users } from 'lucide-react'

const DonateHero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-accent-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Donation <span className="text-accent-600">Makes a Difference</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Every dollar you donate goes directly to programs that create lasting change in communities worldwide. 
            Your generosity helps us provide education, healthcare, and hope to those who need it most.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Transparent</h3>
              <p className="text-gray-600 text-sm">Every dollar is accounted for and reported</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Direct Impact</h3>
              <p className="text-gray-600 text-sm">Your donation directly supports our programs</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tax Deductible</h3>
              <p className="text-gray-600 text-sm">Your donation is tax-deductible</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DonateHero 