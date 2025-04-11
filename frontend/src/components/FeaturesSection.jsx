import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import React from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const FeaturesSection = () => {
  return (
    <div className='w-full bg-gray-50 py-20'>
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          What can custom AI Agents do?
        </h2>
        <p className='text-gray-600 text-sm md:text-base mb-12 max-w-2xl mx-auto'>
          Discover the powerful capabilities of our custom AI agents, designed to streamline your business operations.
        </p>

        {/* Two-column layout: features left, animation right */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
          
          {/* Features - Left column */}
<div className="flex flex-col space-y-18 items-center lg:items-start pl-18 lg:pl-34">
            
            {/* Feature Card */}
            {[
              {
                title: ['Seamless Integrations', 'With Your Systems'],
                desc: 'Integrate effortlessly with existing workflows, enabling AI agents to make informed decisions based on real-time data.',
                benefits: [
                  'Automates end-to-end processes.',
                  'Enhances operational efficiency.',
                  'Reduces manual intervention.'
                ]
              },
              {
                title: ['24/7 Availability'],
                desc: 'Ensure uninterrupted operations by deploying AI agents that are active and responsive at all hours, across time zones.',
                benefits: [
                  'Improves customer satisfaction.',
                  'Reduces response times.',
                  'Maintains consistent service quality.'
                ]
              },
              {
                title: ['Performance Replication and Improvement'],
                desc: 'Leverage AI to emulate top-performing agents, continuously refining interactions for optimal outcomes.',
                benefits: [
                  'Standardizes high-quality service.',
                  'Identifies and implements best practices.',
                  'Drives continuous improvement.'
                ]
              },
              {
                title: ['Omnichannel Support'],
                desc: 'Engage with customers across multiple platforms, including voice, chat, email, and social media, ensuring a consistent experience.',
                benefits: [
                  'Expands reach.',
                  'Maintains brand consistency.',
                  'Enhances customer engagement.'
                ]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white w-[280px] rounded-xl shadow-xs p-6 text-left hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h3>
                <p className="text-gray-600 text-xs mb-4">
                  {feature.desc}
                </p>
                <p className="font-semibold text-sm mb-2">Benefits</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  {feature.benefits.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="text-blue-600 w-4 h-4 mt-1" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Animation - Right column */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-10 lg:mt-0"
          >
            <div className="relative bg-white w-[320px] md:w-[360px] rounded-2xl shadow-xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-blue-600 text-3xl">📄</div>
                <h3 className="text-lg font-bold">Explain My Policy</h3>
                <div className="flex items-center gap-4 mt-4">
                  <div className="bg-blue-600 text-white font-semibold rounded-full w-10 h-10 flex items-center justify-center">
                    X
                  </div>
                  <div className="w-10 border-t-2 border-dashed border-gray-400" />
                  <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center text-[10px] text-gray-700 font-medium">
                    zendesk
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
