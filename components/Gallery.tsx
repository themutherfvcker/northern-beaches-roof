// ========================================
// components/Gallery.tsx
// ========================================

'use client'

import React, { useState, useEffect } from 'react'
import { MapPin, Calendar, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

interface GalleryProps {
  suburb?: string
}

export default function Gallery({ suburb }: GalleryProps) {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [activeFilter, setActiveFilter] = useState('all')
  const [sliderPositions, setSliderPositions] = useState<{[key: string]: number}>({})

  const projects = [
    {
      id: 1,
      suburb: 'Manly',
      service: 'Complete Restoration',
      date: 'September 2024',
      description: 'Full restoration including cleaning, repointing, and premium coating application.',
      beforeColor: 'from-slate-400 to-slate-500',
      afterColor: 'from-red-700 to-red-800',
      category: 'restoration'
    },
    {
      id: 2,
      suburb: 'Dee Why',
      service: 'Roof Painting',
      date: 'August 2024',
      description: 'Heat-reflective coating applied to reduce energy costs and extend roof life.',
      beforeColor: 'from-slate-500 to-slate-600',
      afterColor: 'from-slate-700 to-slate-800',
      category: 'painting'
    },
    {
      id: 3,
      suburb: 'Mona Vale',
      service: 'Ridge Cap Restoration',
      date: 'October 2024',
      description: 'Complete ridge cap rebedding with flexible mortar and tile replacement.',
      beforeColor: 'from-gray-400 to-gray-500',
      afterColor: 'from-orange-700 to-red-800',
      category: 'restoration'
    },
    {
      id: 4,
      suburb: 'Brookvale',
      service: 'Tile Replacement',
      date: 'July 2024',
      description: 'Broken and damaged tiles replaced with color-matched terracotta.',
      beforeColor: 'from-slate-300 to-slate-400',
      afterColor: 'from-red-600 to-red-700',
      category: 'repairs'
    },
    {
      id: 5,
      suburb: 'Avalon',
      service: 'Complete Restoration',
      date: 'September 2024',
      description: 'Full restoration including high-pressure cleaning and protective coating.',
      beforeColor: 'from-gray-500 to-gray-600',
      afterColor: 'from-red-800 to-orange-800',
      category: 'restoration'
    },
    {
      id: 6,
      suburb: 'Newport',
      service: 'Roof Cleaning',
      date: 'August 2024',
      description: 'Professional cleaning removed 15+ years of moss, lichen, and grime.',
      beforeColor: 'from-green-800 to-slate-700',
      afterColor: 'from-red-700 to-red-800',
      category: 'cleaning'
    }
  ]

  useEffect(() => {
    const positions: {[key: string]: number} = {}
    projects.forEach((_, index) => {
      positions[index.toString()] = 50
    })
    positions['modal'] = 50
    setSliderPositions(positions)
  }, [])

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'restoration', label: 'Restoration' },
    { id: 'painting', label: 'Painting' },
    { id: 'repairs', label: 'Repairs' },
    { id: 'cleaning', label: 'Cleaning' }
  ]

  const filteredProjects = suburb 
    ? projects.filter(p => p.suburb.toLowerCase() === suburb.toLowerCase())
    : activeFilter === 'all' 
      ? projects 
      : projects.filter(p => p.category === activeFilter)

  const handleSliderMove = (e: React.MouseEvent | React.TouchEvent, key: string) => {
    const target = e.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : (e as React.MouseEvent).clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPositions(prev => ({
      ...prev,
      [key]: Math.max(0, Math.min(100, percentage))
    }))
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-4">
            <Maximize2 className="w-4 h-4" />
            <span className="text-sm font-semibold">Proven Results</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            See the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Transformation
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real projects from real Northern Beaches homes. Drag the slider to see the dramatic difference our restoration work makes.
          </p>
        </div>

        {!suburb && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-blue-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const position = sliderPositions[index.toString()] || 50
            
            return (
              <div key={project.id} className="group relative">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-blue-200">
                  <div 
                    className="relative h-72 overflow-hidden cursor-ew-resize select-none"
                    onMouseMove={(e) => handleSliderMove(e, index.toString())}
                    onTouchMove={(e) => handleSliderMove(e, index.toString())}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.afterColor}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-24 bg-black/20 rounded-lg"></div>
                      </div>
                    </div>

                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${project.beforeColor}`}
                      style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-24 bg-black/30 rounded-lg"></div>
                      </div>
                    </div>

                    <div 
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
                      style={{ left: `${position}%` }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                        <div className="flex space-x-0.5">
                          <ChevronLeft className="w-4 h-4 text-slate-600" />
                          <ChevronRight className="w-4 h-4 text-slate-600" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg">
                      <span className="text-white text-sm font-semibold">BEFORE</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg">
                      <span className="text-white text-sm font-semibold">AFTER</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-slate-500 mb-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-slate-700">{project.suburb}</span>
                      <span>•</span>
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {project.service}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
