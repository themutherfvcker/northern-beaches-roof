'use client'

import React, { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, ThumbsUp } from 'lucide-react'

interface TestimonialsProps {
  suburb?: string
}

export default function Testimonials({ suburb }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const featuredTestimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      suburb: 'Manly',
      rating: 5,
      date: '2 weeks ago',
      image: 'SM',
      service: 'Complete Roof Restoration',
      text: 'Absolutely blown away by the transformation! Our 30-year-old roof looks brand new. The team was professional, punctual, and cleaned up perfectly after each day. The 15-year warranty gives us complete peace of mind.',
      highlight: 'Professional service',
      verified: true
    },
    {
      id: 2,
      name: 'David Chen',
      suburb: 'Dee Why',
      rating: 5,
      date: '1 month ago',
      image: 'DC',
      service: 'Roof Leak Repair',
      text: 'Had a persistent leak for months that other companies couldn\'t find. These guys used thermal imaging, located the issue immediately, and fixed it permanently. No leaks since, even after heavy rain. Highly recommend!',
      highlight: 'Problem solved',
      verified: true
    },
    {
      id: 3,
      name: 'Emma Thompson',
      suburb: 'Mona Vale',
      rating: 5,
      date: '3 weeks ago',
      image: 'ET',
      service: 'Roof Painting',
      text: 'The heat-reflective coating has made a noticeable difference to our energy bills. Our home stays cooler in summer and the roof looks incredible. Great value for money and the team was wonderful to work with.',
      highlight: 'Great value',
      verified: true
    }
  ]

  const filteredTestimonials = suburb
    ? featuredTestimonials.filter(t => t.suburb.toLowerCase() === suburb.toLowerCase())
    : featuredTestimonials

  const displayTestimonials = filteredTestimonials.length > 0 ? filteredTestimonials : featuredTestimonials

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [displayTestimonials.length])

  const currentTestimonial = displayTestimonials[currentIndex]

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-semibold">Trusted by Northern Beaches Homeowners</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            What Our Customers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Are Saying
            </span>
          </h2>
        </div>

        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 overflow-hidden">
          <Quote className="absolute top-8 left-8 w-16 h-16 text-white/10" />

          <div className="relative">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {currentTestimonial.image}
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-2xl font-bold text-white">{currentTestimonial.name}</h3>
                    {currentTestimonial.verified && (
                      <div className="bg-green-500/20 border border-green-400/30 rounded-full px-3 py-1">
                        <span className="text-xs text-green-300 font-semibold">✓ Verified</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 text-slate-300">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <span>{currentTestimonial.suburb}</span>
                    </div>
                    <span>•</span>
                    <span>{currentTestimonial.service}</span>
                  </div>

                  <div className="flex items-center space-x-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-6 italic">
                "{currentTestimonial.text}"
              </blockquote>

              <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2">
                <ThumbsUp className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm font-semibold">{currentTestimonial.highlight}</span>
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {displayTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-blue-400 w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
