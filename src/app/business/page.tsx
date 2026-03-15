import { Calendar, Users, TrendingUp, Smartphone } from 'lucide-react'
import Link from 'next/link'

export default function BusinessPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Grow Your Salon Business</h1>
          <p className="text-xl mb-8 opacity-90">Reach more customers and manage bookings effortlessly</p>
          <Link 
            href="/signup" 
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Everything You Need to Succeed</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Calendar, title: 'Smart Scheduling', desc: 'Real-time calendar synced across all devices' },
            { icon: Users, title: 'Customer Management', desc: 'Track customer history and preferences' },
            { icon: TrendingUp, title: 'Business Analytics', desc: 'Insights to grow your revenue' },
            { icon: Smartphone, title: 'Mobile App', desc: 'Manage your business on the go' },
          ].map((benefit, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-purple-600" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl text-gray-600 mb-8">Start accepting online bookings today</p>
          <Link 
            href="/signup" 
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  )
}
