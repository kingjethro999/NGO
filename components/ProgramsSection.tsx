'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BookOpen, Heart, Home, Shield } from 'lucide-react'

const ProgramsSection = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'Education Initiative',
      description: 'Providing quality education to underprivileged children, building schools, and training teachers in remote communities.',
      impact: '10,000+ children educated',
      color: 'primary',
      href: '/programs#education'
    },
    {
      icon: Heart,
      title: 'Healthcare Access',
      description: 'Establishing medical clinics, providing essential healthcare services, and training local healthcare workers.',
      impact: '25,000+ lives improved',
      color: 'accent',
      href: '/programs#healthcare'
    },
    {
      icon: Home,
      title: 'Community Development',
      description: 'Building sustainable infrastructure, clean water systems, and economic opportunities for local communities.',
      impact: '50+ communities transformed',
      color: 'secondary',
      href: '/programs#community'
    },
    {
      icon: Shield,
      title: 'Emergency Relief',
      description: 'Providing immediate assistance during natural disasters, conflicts, and humanitarian crises worldwide.',
      impact: '100,000+ people helped',
      color: 'primary',
      href: '/programs#emergency'
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We focus on four key areas to create comprehensive, sustainable change in communities worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="card p-8 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-${program.color}-100 rounded-lg flex items-center justify-center group-hover:bg-${program.color}-200 transition-colors duration-300`}>
                  <program.icon className={`w-6 h-6 text-${program.color}-600`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary-600">
                      {program.impact}
                    </span>
                    <Link
                      href={program.href}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:underline"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/programs" className="btn-primary">
            View All Programs
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProgramsSection 