'use client'

import { Star, MapPin, Clock, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import { use } from 'react'

const SALON_DATA: Record<string, any> = {
  '1': {
    id: 1,
    name: 'Élégance Hair Studio',
    city: 'Tunis',
    address: '123 Avenue Habib Bourguiba, Tunis',
    phone: '+216 71 123 456',
    email: 'contact@elegance.tn',
    rating: 4.8,
    reviews: 124,
    images: [
      'https://picsum.photos/seed/salon1a/800/600',
      'https://picsum.photos/seed/salon1b/800/600',
      'https://picsum.photos/seed/salon1c/800/600',
    ],
    description: 'Premium hair salon offering expert cuts, styling, and coloring services in the heart of Tunis.',
    hours: {
      monday: '9:00 AM - 7:00 PM',
      tuesday: '9:00 AM - 7:00 PM',
      wednesday: '9:00 AM - 7:00 PM',
      thursday: '9:00 AM - 7:00 PM',
      friday: '9:00 AM - 8:00 PM',
      saturday: '10:00 AM - 8:00 PM',
      sunday: 'Closed',
    },
    services: [
      { id: 1, name: 'Women\'s Haircut', duration: 60, price: 35 },
      { id: 2, name: 'Men\'s Haircut', duration: 30, price: 25 },
      { id: 3, name: 'Hair Coloring', duration: 120, price: 80 },
      { id: 4, name: 'Highlights', duration: 90, price: 65 },
      { id: 5, name: 'Blow Dry', duration: 30, price: 20 },
    ],
  },
}

export default function SalonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const salon = SALON_DATA[id]

  if (!salon) return <div>Salon not found</div>

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Images */}
      <div className="relative h-96 bg-gray-900">
        <img 
          src={salon.images[0]} 
          alt={salon.name}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-2">{salon.name}</h1>
          <div className="flex items-center gap-4 text-white">
            <div className="flex items-center gap-1">
              <Star className="fill-yellow-400 text-yellow-400" size={20} />
              <span className="font-semibold">{salon.rating}</span>
              <span className="opacity-80">({salon.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>{salon.city}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <section className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-gray-600">{salon.description}</p>
            </section>

            {/* Services */}
            <section className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6">Services</h2>
              <div className="space-y-4">
                {salon.services.map((service: any) => (
                  <div key={service.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-xl hover:border-purple-300 transition-colors group">
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-purple-600 transition-colors">{service.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <Clock size={14} />
                        <span>{service.duration} min</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-purple-600">{service.price} TND</p>
                      <Link
                        href={`/booking/${salon.id}/${service.id}`}
                        className="inline-block mt-2 bg-purple-600 text-white px-6 py-2 rounded-full text-sm hover:bg-purple-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="text-purple-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{salon.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-purple-600" size={20} />
                  <span className="text-gray-700">{salon.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-purple-600" size={20} />
                  <span className="text-gray-700">{salon.email}</span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-lg mb-4">Opening Hours</h3>
              <div className="space-y-2">
                {Object.entries(salon.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="capitalize text-gray-700">{day}</span>
                    <span className="text-gray-600">{hours as string}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
