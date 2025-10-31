'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, ArrowRight } from 'lucide-react'

interface LeadFormProps {
  suburb?: string
  service?: string
  sourcePage?: string
}

export default function LeadForm({ suburb = '', service = '', sourcePage = '/' }: LeadFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suburb: suburb,
    service: service,
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source_page: sourcePage
        })
      })

      if (response.ok) {
        router.push('/thank-you')
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    
      
        <input 
          type="text" 
          placeholder="Your Name" 
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition-all"
        />
        <input 
          type="tel" 
          placeholder="Phone Number" 
          required
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition-all"
        />
      
      <input 
        type="email" 
        placeholder="Email Address (Optional)" 
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition-all"
      />
      
        
        <input 
          type="text" 
          placeholder="Suburb (e.g., Manly, Dee Why)" 
          required
          value={formData.suburb}
          onChange={(e) => setFormData({...formData, suburb: e.target.value})}
          className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition-all"
        />
      
      
        {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
        {!isSubmitting && }
      
      
        No obligation • Responds within 2 hours • 100% free
      
    
  )
}
