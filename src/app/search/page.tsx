'use client'

import { useState } from 'react'
import { Search, MapPin, Star, Clock } from 'lucide-react'
import Link from 'next/link'

const MOCK_SALONS = [
  {
    id: 1,
    name: 'Élégance Hair Studio',
    city: 'Tunis',
    rating: 4.8,
    reviews: 124,
    image: 'https://picsum.photos/seed/salon1/400/300',
    services: ['Haircut', 'Coloring', 'Styling'],
    price: '25 TND',
  },
  {
    id: 2,
    name: 'Luxe Spa & Wellness',
    city: 'Tunis',
    rating: 4.9,
    reviews: 89,
    image: 'https://picsum.photos/seed/salon2/400/300',
    services: ['Massage', 'Facial', 'Manicure'],
    price: '40 TND',
  },
  {
    id: 3,
    name: 'Modern Barber Shop',
    city: 'Sousse',
    rating: 4.7,
    reviews: 156,
    image: 'https://picsum.photos/seed/salon3/400/300',
    services: ['Haircut', 'Beard Trim', 'Hot Towel Shave'],
    price: '20 TND',
  },
  {
    id: 4,
    name: 'Beauty Haven',
    city: 'Sfax',
    rating: 4.6,
    reviews: 98,
    image: 'https://picsum.photos/seed/salon4/400/300',
    services: ['Nails', 'Waxing', 'Makeup'],
    price: '30 TND',
  },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState('all')

  const filtered = MOCK_SALONS.filter(salon => {
    const matchesSearch = salon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         salon.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCity = selectedCity === 'all' || salon.city === selectedCity
    return matchesSearch && matchesCity
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Discover Your Perfect Salon</h1>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search salons or services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              <option value="all">All Cities</option>
              <option value="Tunis">Tunis</option>
              <option value="Sousse">Sousse</option>
              <option value="Sfax">Sfax</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-12">
        <p className="text-gray-600 mb-6">{filtered.length} salons found</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((salon) => (
            <Link 
              key={salon.id} 
              href={`/salon/${salon.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={salon.image} 
                  alt={salon.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{salon.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <MapPin size={16} />
                  <span>{salon.city}</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="fill-yellow-400 text-yellow-400" size={16} />
                    <span className="font-semibold">{salon.rating}</span>
                  </div>
                  <span className="text-gray-400">({salon.reviews} reviews)</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {salon.services.slice(0, 3).map((service, i) => (
                    <span key={i} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                      {service}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">From <span className="font-bold text-purple-600">{salon.price}</span></span>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
