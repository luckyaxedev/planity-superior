'use client'

import { Calendar, Clock } from 'lucide-react'

const MOCK_BOOKINGS = [
  {
    id: 1,
    salon: 'Élégance Hair Studio',
    service: 'Women\'s Haircut',
    date: '2026-03-18',
    time: '2:00 PM',
    price: 35,
    status: 'upcoming',
  },
  {
    id: 2,
    salon: 'Luxe Spa & Wellness',
    service: 'Facial Treatment',
    date: '2026-03-20',
    time: '3:30 PM',
    price: 50,
    status: 'upcoming',
  },
  {
    id: 3,
    salon: 'Modern Barber Shop',
    service: 'Haircut & Beard Trim',
    date: '2026-03-10',
    time: '11:00 AM',
    price: 25,
    status: 'completed',
  },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-8">My Bookings</h1>

        <div className="grid gap-6">
          {/* Upcoming */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Upcoming Appointments</h2>
            <div className="space-y-4">
              {MOCK_BOOKINGS.filter(b => b.status === 'upcoming').map((booking) => (
                <div key={booking.id} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2">{booking.salon}</h3>
                      <p className="text-gray-700 mb-4">{booking.service}</p>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{new Date(booking.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>{booking.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-purple-600 mb-4">{booking.price} TND</p>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                          Reschedule
                        </button>
                        <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors text-sm">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Past */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Past Appointments</h2>
            <div className="space-y-4">
              {MOCK_BOOKINGS.filter(b => b.status === 'completed').map((booking) => (
                <div key={booking.id} className="bg-white rounded-2xl p-6 shadow-md opacity-75">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2">{booking.salon}</h3>
                      <p className="text-gray-700 mb-4">{booking.service}</p>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{new Date(booking.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>{booking.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-700 mb-4">{booking.price} TND</p>
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                        Book Again
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
