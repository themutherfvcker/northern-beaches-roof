'use client'

import React, { useState } from 'react'
import { Star, Shield, Award, Phone, CheckCircle2 } from 'lucide-react'
import LeadForm from './LeadForm'

interface HeroProps {
  suburb?: string
}

export default function Hero({ suburb }: HeroProps) {
  const [beforeAfterPosition, setBeforeAfterPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setBeforeAfterPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = (x / rect.width) * 100
    setBeforeAfterPosition(Math.max(0, Math.min(100, percentage)))
  }

  const headlineText = suburb 
    ? `Transform Your ${suburb} Roof` 
    : 'Transform Your Roof'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">Northern Beaches<br/><span className="text-blue-400">Roof Restoration</span></span>
            </div>
            <a href="tel:1300000000" className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">1300 000 000</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 backdrop-blur-sm">
                <Award className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">Sydney's Most Trusted Roof Specialists</span>
              </div>

              {/* Main Headline */}
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  {headlineText},
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Protect Your Home
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Expert roof restoration across the Northern Beaches. From Manly to Palm Beach, we restore, repair, and protect your most valuable asset.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3">
                {['15-Year Workmanship Warranty', 'Free Roof Inspection & Quote', 'Local Northern Beaches Team'].map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-slate-200">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Lead Form */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Roof Assessment</h3>
                <LeadForm suburb={suburb} sourcePage={suburb ? `/${suburb}` : '/'} />
              </div>
            </div>

            {/* Right Column - Interactive Before/After */}
            <div className="space-y-6">
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
              >
                {/* After Image */}
                <div className="relative w-full h-[500px] bg-gradient-to-br from-orange-200 to-orange-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-64 h-48 bg-gradient-to-br from-red-800 to-red-900 rounded-lg shadow-xl mb-4 mx-auto"></div>
                      <div className="text-2xl font-bold text-slate-800">AFTER</div>
                      <div className="text-slate-700">Restored & Protected</div>
                    </div>
                  </div>
                </div>

                {/* Before Image */}
                <div 
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-300 to-slate-400"
                  style={{ clipPath: `inset(0 ${100 - beforeAfterPosition}% 0 0)` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-64 h-48 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg shadow-xl mb-4 mx-auto"></div>
                      <div className="text-2xl font-bold text-slate-800">BEFORE</div>
                      <div className="text-slate-700">Damaged & Weathered</div>
                    </div>
                  </div>
                </div>

                {/* Slider Line */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
                  style={{ left: `${beforeAfterPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-1 h-4 bg-slate-400 rounded"></div>
                      <div className="w-1 h-4 bg-slate-400 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-white font-semibold">BEFORE</span>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-white font-semibold">AFTER</span>
                </div>

                {/* Instruction */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-white text-sm">← Drag to compare →</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: '500+', label: 'Homes Restored' },
                  { number: '25', label: 'Years Experience' },
                  { number: '4.9★', label: 'Google Rating' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-1">{stat.number}</div>
                    <div className="text-sm text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-t border-white/10 bg-white/5 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-300">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-blue-400" />
              <span>Master Builders Association</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>200+ 5-Star Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}