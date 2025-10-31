import Link from 'next/link'
import { Shield, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">Northern Beaches Roof Restoration</span>
            </div>
            <p className="text-slate-400 mb-4">
              Sydney&apos;s trusted roof restoration experts serving the Northern Beaches since 1999.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/services/restoration" className="hover:text-blue-400 transition-colors">Roof Restoration</Link></li>
              <li><Link href="/services/repairs" className="hover:text-blue-400 transition-colors">Leak Repairs</Link></li>
              <li><Link href="/services/painting" className="hover:text-blue-400 transition-colors">Roof Painting</Link></li>
              <li><Link href="/services/cleaning" className="hover:text-blue-400 transition-colors">Roof Cleaning</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/manly" className="hover:text-blue-400 transition-colors">Manly</Link></li>
              <li><Link href="/dee-why" className="hover:text-blue-400 transition-colors">Dee Why</Link></li>
              <li><Link href="/mona-vale" className="hover:text-blue-400 transition-colors">Mona Vale</Link></li>
              <li><Link href="/brookvale" className="hover:text-blue-400 transition-colors">Brookvale</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:1300000000" className="hover:text-blue-400 transition-colors">1300 000 000</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:info@nbrroof.com.au" className="hover:text-blue-400 transition-colors">info@nbrroof.com.au</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <span>Serving all Northern Beaches suburbs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>&copy; 2024 Northern Beaches Roof Restoration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
