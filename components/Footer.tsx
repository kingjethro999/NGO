"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Hope Foundation</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dedicated to creating positive change in communities worldwide through education, healthcare, and sustainable development initiatives.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@hopefoundation.org</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>123 Hope Street, City, Country</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-white transition-colors">Programs</Link></li>
              <li><Link href="/donate" className="text-gray-300 hover:text-white transition-colors">Donate</Link></li>
              <li><Link href="/volunteer" className="text-gray-300 hover:text-white transition-colors">Volunteer</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><Link href="/programs#education" className="text-gray-300 hover:text-white transition-colors">Education</Link></li>
              <li><Link href="/programs#healthcare" className="text-gray-300 hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link href="/programs#community" className="text-gray-300 hover:text-white transition-colors">Community Development</Link></li>
              <li><Link href="/programs#emergency" className="text-gray-300 hover:text-white transition-colors">Emergency Relief</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-3">
              <motion.a href="#" whileHover={{ scale: 1.1 }} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          © {currentYear} Hope Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer 