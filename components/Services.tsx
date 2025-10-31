// ========================================
// components/Services.tsx
// ========================================

'use client'

import React, { useState } from 'react'
import { Home, Droplets, Paintbrush, Shield, Wrench, Sparkles, ChevronRight, Check } from 'lucide-react'

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: Home,
      title: 'Complete Roof Restoration',
      description: 'Full roof rejuvenation including high-pressure cleaning, repairs, repointing, and protective coating application.',
      features: ['15-Year Warranty', 'Premium Coating Systems', 'Structural Inspection', 'Before/After Photos'],
      price: 'From $4,500',
      popular: true,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      iconBg: 'bg-blue-500/20'
    },
    {
      icon: Droplets,
      title: 'Roof Leak Repairs',
      description: 'Expert leak detection and permanent repairs. We find the source and fix it right the first time.',
      features: ['Emergency Service', 'Thermal Imaging', 'Waterproofing', 'Warranty Backed'],
      price: 'From $800',
      popular: false,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      iconBg: 'bg-indigo-500/20'
    },
    {
      icon: Paintbrush,
      title: 'Roof Painting & Coating',
      description: 'Premium roof coatings that protect and beautify. Heat-reflective options available to reduce energy costs.',
      features: ['Heat Reflective Options', 'Color Matching', 'UV Protection', '10-Year Warranty'],
      price: 'From $3,200',
      popular: false,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      iconBg: 'bg-orange-500/20'
    },
    {
      icon: Shield,
      title: 'Tile & Ridge Capping',
      description: 'Broken tile replacement and ridge cap rebedding using flexible pointing to prevent future cracking.',
      features: ['Tile Matching Service', 'Flexible Mortar', 'Wind Resistant', 'Color Matched'],
      price: 'From $1,500',
      popular: false,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      iconBg: 'bg-green-500/20'
    },
    {
      icon: Wrench,
      title: 'Gutter Replacement',
      description: 'New guttering installation with seamless joins and proper fall for optimal water flow and protection.',
      features: ['Colorbond Options', 'Leaf Guard Available', 'Custom Fabrication', 'Storm Tested'],
      price: 'From $2,800',
      popular: false,
      color: 'from-slate-500 to-gray-600',
      bgColor: 'bg-slate-500/10',
      borderColor: 'border-slate-500/30',
      iconBg: 'bg-slate-500/20'
    },
    {
      icon: Sparkles,
      title: 'Roof Cleaning',
      description: 'Professional high-pressure cleaning to remove moss, lichen, and years of accumulated dirt and grime.',
      features: ['Soft Wash Available', 'Biocide Treatment', 'Gutter Clean Included', 'Eco-Friendly'],
      price: 'From $900',
      popular: false,
      color: 'from-cyan-500 to-blue-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      iconBg: 'bg-cyan-500/20'
    }
  ]

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Comprehensive Roof Solutions</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Expert Roofing Services for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Northern Beaches Homes
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From complete restorations to minor repairs, our licensed team delivers quality workmanship with industry-leading warranties.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                  activeService === index 
                    ? `${service.borderColor} shadow-xl` 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className={`inline-flex p-4 rounded-xl ${service.iconBg} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`w-8 h-8 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`} strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Starting at</div>
                    <div className="text-2xl font-bold text-slate-900">{service.price}</div>
                  </div>
                  <button className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-semibold transition-all group-hover:bg-gradient-to-r ${service.color} group-hover:text-white ${activeService === index ? `bg-gradient-to-r ${service.color} text-white` : 'bg-slate-100 text-slate-700'}`}>
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
