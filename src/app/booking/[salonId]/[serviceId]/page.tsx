'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { use } from 'react'
import Link from 'next/link'

const TIME_SLOTS = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
]

export default function BookingPage({ params }: { params: Promise<{ salonId: string; serviceId: string }> }) {
  // In production, use params to fetch service: const { salonId, serviceId } = use(params)
  use(params) // Consume params to satisfy Next.js requirements
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [step, setStep] = useState(1)

  const service = { name: 'Women&apos;s Haircut', price: 35, duration: 60 }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                step >= s ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {step > s ? <Check size={20} /> : s}
              </div>
              {s < 3 && <div className={`w-24 h-1 ${step > s ? 'bg-purple-600' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Select Date & Time</h2>
              
              {/* Service Summary */}
              <div className="bg-purple-50 rounded-xl p-4 mb-8">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                    <p className="text-gray-600">{service.duration} minutes</p>
                  </div>
                  <p className="text-2xl font-bold text-purple-600">{service.price} TND</p>
                </div>
              </div>

              {/* Date Picker */}
              <div className="mb-8">
                <label className="block font-semibold mb-3">Choose Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none"
                />
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <div>
                  <label className="block font-semibold mb-3">Choose Time</label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-xl font-medium transition-all ${
                          selectedTime === time
                            ? 'bg-purple-600 text-white scale-105'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() => setStep(2)}
                disabled={!selectedDate || !selectedTime}
                className="w-full mt-8 bg-purple-600 text-white py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Your Details</h2>
              <form className="space-y-4">
                <div>
                  <label className="block font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+216 XX XXX XXX"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Email (Optional)</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="w-full bg-purple-600 text-white py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
                >
                  Continue to Payment
                </button>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="text-green-600" size={40} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
              <p className="text-gray-600 mb-8">
                Your appointment is scheduled for {selectedDate} at {selectedTime}
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="space-y-3 text-left">
                  <div><span className="font-semibold">Service:</span> {service.name}</div>
                  <div><span className="font-semibold">Duration:</span> {service.duration} minutes</div>
                  <div><span className="font-semibold">Price:</span> {service.price} TND</div>
                  <div><span className="font-semibold">Date:</span> {selectedDate}</div>
                  <div><span className="font-semibold">Time:</span> {selectedTime}</div>
                </div>
              </div>
              <Link
                href="/dashboard"
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors"
              >
                View My Bookings
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
