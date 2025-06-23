'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, ArrowRight } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-secondary-500 to-secondary-600 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="w-10 h-10" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Your support can change lives. Whether through a donation, volunteering your time, or spreading awareness, every action counts in our mission to create positive change.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="bg-white text-secondary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-300 group">
              Donate Now
              <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/volunteer" className="border-2 border-white text-white hover:bg-white hover:text-secondary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-300">
              Become a Volunteer
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection 