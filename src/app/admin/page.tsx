'use client'

import { Calendar, Users, TrendingUp, Clock } from 'lucide-react'

const MOCK_ADMIN_BOOKINGS = [
  { id: 1, customer: 'Sarah Johnson', service: 'Haircut', time: '10:00 AM', status: 'confirmed' },
  { id: 2, customer: 'Ahmed Ben Ali', service: 'Beard Trim', time: '11:30 AM', status: 'confirmed' },
  { id: 3, customer: 'Marie Dubois', service: 'Hair Coloring', time: '2:00 PM', status: 'pending' },
]

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-5xl font-bold mb-8">Salon Dashboard</h1>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Calendar, label: 'Today&apos;s Bookings', value: '12' },
            { icon: Users, label: 'Total Customers', value: '847' },
            { icon: TrendingUp, label: 'Revenue (Month)', value: '12,450 TND' },
            { icon: Clock, label: 'Avg Rating', value: '4.8' },
          ].map((stat, i) => (
            <div key={i} className="border-2 border-black p-6">
              <stat.icon className="mb-3" size={32} strokeWidth={1.5} />
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Today&apos;s Appointments */}
        <div className="border-2 border-black p-8">
          <h2 className="text-3xl font-bold mb-6">Today&apos;s Appointments</h2>
          <div className="space-y-4">
            {MOCK_ADMIN_BOOKINGS.map((booking) => (
              <div key={booking.id} className="flex justify-between items-center p-4 border-2 border-gray-200 hover:border-black transition-colors">
                <div>
                  <h3 className="font-semibold text-lg">{booking.customer}</h3>
                  <p className="text-gray-600">{booking.service}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold mb-2">{booking.time}</p>
                  <span className={`inline-block px-3 py-1 border text-sm ${
                    booking.status === 'confirmed' 
                      ? 'bg-black text-white border-black' 
                      : 'bg-white text-black border-black'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
