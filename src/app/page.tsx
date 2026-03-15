import Link from 'next/link'
import { Search, Calendar, Star, Clock } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-7xl font-bold text-black mb-6 tracking-tight">
            Book Your Beauty Experience
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover and book appointments with top-rated salons, spas, and wellness centers.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/search" 
              className="bg-black text-white px-8 py-4 font-medium hover:bg-gray-900 transition-colors"
            >
              Find Your Salon
            </Link>
            <Link 
              href="/business" 
              className="bg-white text-black px-8 py-4 font-medium border-2 border-black hover:bg-gray-50 transition-colors"
            >
              For Businesses
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-24 border-t border-gray-200">
        <div className="grid md:grid-cols-4 gap-12">
          {[
            { icon: Search, title: 'Easy Discovery', desc: 'Find the perfect salon near you' },
            { icon: Calendar, title: 'Instant Booking', desc: 'Book appointments 24/7' },
            { icon: Star, title: 'Verified Reviews', desc: 'Read authentic reviews' },
            { icon: Clock, title: 'Save Time', desc: 'No more phone calls' }
          ].map((feature, i) => (
            <div key={i} className="text-center">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-black" strokeWidth={1.5} />
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-24 text-center border-t border-gray-200">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of happy customers</p>
          <Link 
            href="/search" 
            className="inline-block bg-black text-white px-8 py-4 font-medium hover:bg-gray-900 transition-colors"
          >
            Browse Salons
          </Link>
        </div>
      </section>
    </div>
  )
}
