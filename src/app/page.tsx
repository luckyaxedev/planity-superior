import Link from 'next/link'
import { Search, Calendar, Star, Clock } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Book Your Beauty Experience
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover and book appointments with top-rated salons, spas, and wellness centers in seconds.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/search" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Find Your Salon
            </Link>
            <Link 
              href="/business" 
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-colors"
            >
              For Businesses
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Search, title: 'Easy Discovery', desc: 'Find the perfect salon near you in seconds' },
            { icon: Calendar, title: 'Instant Booking', desc: 'Book appointments 24/7 with real-time availability' },
            { icon: Star, title: 'Verified Reviews', desc: 'Read authentic reviews from real customers' },
            { icon: Clock, title: 'Save Time', desc: 'No more phone calls or waiting on hold' }
          ].map((feature, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of happy customers</p>
          <Link 
            href="/search" 
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Browse Salons
          </Link>
        </div>
      </section>
    </div>
  )
}
