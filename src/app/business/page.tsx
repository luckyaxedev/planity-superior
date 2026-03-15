import { Calendar, Users, TrendingUp, Smartphone } from 'lucide-react'
import Link from 'next/link'

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="bg-black text-white py-20 border-b border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">Grow Your Salon Business</h1>
          <p className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto">Reach more customers and manage bookings effortlessly</p>
          <Link 
            href="/signup" 
            className="inline-block bg-white text-black px-8 py-4 font-semibold hover:bg-gray-200 transition-colors"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-bold text-center mb-16">Everything You Need to Succeed</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: Calendar, title: 'Smart Scheduling', desc: 'Real-time calendar synced across all devices' },
            { icon: Users, title: 'Customer Management', desc: 'Track customer history and preferences' },
            { icon: TrendingUp, title: 'Business Analytics', desc: 'Insights to grow your revenue' },
            { icon: Smartphone, title: 'Mobile App', desc: 'Manage your business on the go' },
          ].map((benefit, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 border-2 border-white flex items-center justify-center mx-auto mb-4">
                <benefit.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 border-y border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">Platform Features</h2>
            <div className="space-y-4">
              {[
                'Online booking 24/7',
                'Automated appointment reminders',
                'Customer reviews and ratings',
                'Service catalog management',
                'Staff scheduling',
                'Payment processing',
                'Marketing tools',
                'Performance analytics',
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-gray-900 border-2 border-white">
                  <div className="w-6 h-6 bg-white flex items-center justify-center text-black font-bold text-sm">
                    ✓
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl text-gray-400 mb-8">Start accepting online bookings today</p>
          <Link 
            href="/signup" 
            className="inline-block bg-white text-black px-8 py-4 font-semibold hover:bg-gray-200 transition-colors"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  )
}
