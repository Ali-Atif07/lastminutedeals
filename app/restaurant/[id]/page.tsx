'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { MapPin, Users, Table, Star, Wifi, ParkingCircle, Smile, ArrowLeft } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { restaurants } from '@/lib/data'

export default function RestaurantDetailPage() {
    const { id } = useParams()
    const router = useRouter()
    const restaurant = restaurants.find(r => r.id === id)

    const [reserved, setReserved] = useState(false)

    if (!restaurant) {
        return (
            <div className="min-h-screen bg-brand-bg flex items-center justify-center">
                <p className="text-gray-500">Restaurant not found.</p>
            </div>
        )
    }

    const serviceFee = 50
    const total = restaurant.discountedPrice + serviceFee

    return (
        <div className="min-h-screen bg-brand-bg">
            <Navbar />

            <main className="max-w-5=7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Back button */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-500 hover:text-brand-purple text-sm font-medium mb-6 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </button>

                {/* Hero Image */}
                <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden mb-8">
                    <Image
                        src={restaurant.image}
                        alt={restaurant.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT — details */}
                    <div className="lg:col-span-2">

                        {/* Premium badge */}
                        <div className="flex items-center gap-1.5 mb-2">
                            <Star className="w-4 h-4 fill-brand-purple text-brand-purple" />
                            <span className="text-brand-purple text-xs font-bold uppercase tracking-widest">
                                Premium Collection
                            </span>
                        </div>

                        {/* Name */}
                        <h1 className="font-black text-4xl text-gray-900 mb-3">{restaurant.name}</h1>

                        {/* Meta row */}
                        <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-6">
                            <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5" />
                                {restaurant.location} • {restaurant.distance}
                            </span>
                            <span className="flex items-center gap-1">
                                <Users className="w-3.5 h-3.5" />
                                Up to 8 Guests
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="text-xs">🪑</span>
                                1 Table
                            </span>
                        </div>

                        {/* Amenity icon pills */}
                        <div className="grid grid-cols-3 gap-3 mb-8">
                            {[
                                { icon: <Wifi className="w-6 h-6 text-brand-purple" />, label: 'WiFi' },
                                { icon: <ParkingCircle className="w-6 h-6 text-brand-purple" />, label: 'Parking' },
                                { icon: <Smile className="w-6 h-6 text-brand-purple" />, label: 'Service' },
                            ].map(({ icon, label }) => (
                                <div
                                    key={label}
                                    className="flex flex-col items-center justify-center gap-2 bg-gray-100 rounded-xl py-4 px-3"
                                >
                                    {icon}
                                    <span className="text-gray-600 text-xs font-medium">{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* The Experience */}
                        <div className="mb-8">
                            <h2 className="font-black text-xl text-gray-900 mb-3">The Experience</h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-3">
                                Nestled on the volcanic cliffs of Oia, Palacio Villa is an architectural masterpiece where
                                traditional Cycladic charm meets modern luxury. Every morning begins with a curated
                                breakfast served on your private terrace, followed by a personalized spa treatment in our
                                grotto-style wellness center.
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Designed for those who seek seclusion without compromising on service, the villa features a
                                24/7 private concierge and an infinity pool that seems to spill directly into the Aegean Sea.
                            </p>
                        </div>

                        {/* Location */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <h2 className="font-black text-xl text-gray-900">Location</h2>
                                <a href="#" className="text-brand-purple text-sm font-semibold hover:underline">
                                    Get Directions
                                </a>
                            </div>
                            {/* Map placeholder */}
                            <div className="w-full h-52 bg-gray-200 rounded-2xl overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                                            <MapPin className="w-4 h-4 text-white" />
                                        </div>
                                        <p className="text-gray-500 text-xs">{restaurant.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — booking card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">

                            {/* Price */}
                            <div className="mb-2">
                                <span className="text-brand-purple font-black text-3xl">
                                    ₹{restaurant.discountedPrice.toLocaleString()}
                                </span>
                            </div>
                            <div className="mb-5">
                                <span className="bg-brand-orange/10 text-brand-orange text-xs font-bold px-3 py-1 rounded-full">
                                    SAVE 50% TODAY
                                </span>
                            </div>

                            {/* Reservation details */}
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                <div className="bg-gray-50 rounded-xl p-3">
                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Reservation</p>
                                    <p className="text-gray-900 font-semibold text-sm">Oct 12, 2026</p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-3">
                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Time</p>
                                    <p className="text-gray-900 font-semibold text-sm">8:30PM</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-3 mb-5">
                                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Table</p>
                                <p className="text-gray-900 font-semibold text-sm">1 Table</p>
                            </div>

                            {/* Reserve button */}
                            {reserved ? (
                                <div className="w-full bg-green-500 text-white font-bold py-3.5 rounded-xl text-center text-sm mb-2">
                                    ✓ Reservation Confirmed!
                                </div>
                            ) : (
                                <button
                                    onClick={() => setReserved(true)}
                                    className="w-full bg-brand-purple hover:bg-brand-purple-light text-white font-bold py-3.5 rounded-xl transition-colors text-sm mb-2"
                                >
                                    Reserve Now
                                </button>
                            )}
                            <p className="text-gray-400 text-xs text-center mb-5">You won't be charged yet</p>

                            {/* Price breakdown */}
                            <div className="border-t border-gray-100 pt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">
                                        ₹{restaurant.discountedPrice.toLocaleString()} × 1 night
                                    </span>
                                    <span className="text-gray-900 font-medium">
                                        ₹{restaurant.discountedPrice.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Service fee</span>
                                    <span className="text-gray-900 font-medium">₹{serviceFee}</span>
                                </div>
                                <div className="flex justify-between text-sm font-bold pt-2 border-t border-gray-100">
                                    <span className="text-gray-900">Total</span>
                                    <span className="text-gray-900">₹{total.toLocaleString()}</span>
                                </div>
                            </div>

                            {/* Social proof */}
                            <div className="flex items-center gap-2 mt-5 pt-4 border-t border-gray-100">
                                <div className="flex -space-x-2">
                                    {['bg-orange-400', 'bg-purple-400', 'bg-blue-400'].map((c, i) => (
                                        <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white`} />
                                    ))}
                                    <div className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-600">
                                        +12
                                    </div>
                                </div>
                                <p className="text-gray-500 text-xs">12 others booked in Santorini today</p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    )
}