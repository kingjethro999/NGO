'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield } from 'lucide-react'

const DonationForm = () => {
  const [amount, setAmount] = useState('50')
  const [frequency, setFrequency] = useState('one-time')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you for your ${frequency} donation of $${amount}! This is a demo - in a real application, this would redirect to a payment processor.`)
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Make a Donation</h2>
                <p className="text-gray-600">Your contribution makes a real difference</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Amount (USD)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['25', '50', '100', '250', '500', '1000'].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setAmount(preset)}
                      className={`py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                        amount === preset
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-300 hover:border-primary-300'
                      }`}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Frequency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Donation Frequency
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFrequency('one-time')}
                    className={`py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                      frequency === 'one-time'
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-300 hover:border-primary-300'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                      frequency === 'monthly'
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-300 hover:border-primary-300'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Security Notice */}
              <div className="bg-primary-50 rounded-lg p-4 flex items-center space-x-3">
                <Shield className="w-5 h-5 text-primary-600" />
                <p className="text-sm text-gray-600">
                  Your donation is processed securely. We never store your payment information.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-accent text-lg py-4"
              >
                Donate ${amount} {frequency === 'monthly' ? 'Monthly' : 'Now'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DonationForm 