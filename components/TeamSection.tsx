'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Dr. Evelyn Reed',
      role: 'Founder & CEO',
      image: '/team/evelyn.jpg'
    },
    {
      name: 'Marcus Chen',
      role: 'Director of Programs',
      image: '/team/marcus.jpg'
    },
    {
      name: 'Aisha Khan',
      role: 'Head of Community Outreach',
      image: '/team/aisha.jpg'
    },
    {
      name: 'David Lee',
      role: 'Chief Financial Officer',
      image: '/team/david.jpg'
    }
  ]

  return (
    <section className="section-padding bg-white" id="team">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team is passionate about making a difference and driving our mission forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="card p-6 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-primary-600 font-medium">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection 