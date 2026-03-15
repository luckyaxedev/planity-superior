'use client'

import { Calendar, Users, TrendingUp, Clock } from 'lucide-react'

const MOCK_ADMIN_BOOKINGS = [
  { id: 1, customer: 'Sarah Johnson', service: 'Haircut', time: '10:00 AM', status: 'confirmed' },
  { id: 2, customer: 'Ahmed Ben Ali', service: 'Beard Trim', time: '11:30 AM', status: 'confirmed' },
  { id: 3, customer: 'Marie Dubois', service: 'Hair Coloring', time: '2:00 PM', status: 'pending' },
]

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-4xl font-bold mb-8">Salon Dashboard</h1>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Calendar, label: 'Today\'s Bookings', value: '12', color: 'purple' },
            { icon: Users, label: 'Total Customers', value: '847', color: 'pink' },
            { icon: TrendingUp, label: 'Revenue (Month)', value: '12,450 TND', color: 'blue' },
            { icon: Clock, label: 'Avg Rating', value: '4.8', color: 'yellow' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-md">
              <stat.icon className={`text-${stat.color}-600 mb-3`} size={32} />
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Today's Appointments */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6">Today's Appointments</h2>
          <div className="space-y-4">
            {MOCK_ADMIN_BOOKINGS.map((booking) => (
              <div key={booking.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-xl hover:border-purple-300 transition-colors">
                <div>
                  <h3 className="font-semibold text-lg">{booking.customer}</h3>
                  <p className="text-gray-600">{booking.service}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{booking.time}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                    booking.status === 'confirmed' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
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
