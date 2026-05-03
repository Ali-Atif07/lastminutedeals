'use client'

import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { Restaurant } from '@/lib/data'
import CountdownTimer from '@/components/ui/CountdownTimer'

interface TrendingCardProps {
    restaurant: Restaurant
}

export default function TrendingCard({ restaurant }: TrendingCardProps) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row">
            {/* Image side */}
            <div className="relative h-56 md:h-auto md:w-1/2">
                <Image
                    src={restaurant.image}
                    alt={restaurant.name}
                    fill
                    className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-brand-red text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {restaurant.discount}% OFF
                </div>
                <div className="absolute top-3 left-20">
                    <CountdownTimer />
                </div>
            </div>

            {/* Info side */}
            <div className="p-6 flex flex-col justify-center md:w-1/2">
                <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-2">
                    Trending Now
                </p>
                <h3 className="font-black text-2xl text-gray-900 mb-1">{restaurant.name}</h3>
                <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    {restaurant.location} • {restaurant.distance}
                </div>
                <p className="text-gray-500 text-sm mb-4">
                    Experience unparalleled luxury in our signature suite. Includes private helicopter transfer and a...
                </p>
                <div className="flex items-baseline gap-2 mb-5">
                    <span className="text-brand-purple font-black text-3xl">
                        ₹{restaurant.discountedPrice.toLocaleString()}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                        ₹{restaurant.originalPrice.toLocaleString()}
                    </span>
                </div>
                <button className="bg-brand-purple hover:bg-brand-purple-light text-white font-semibold py-3 rounded-xl text-sm transition-colors">
                    Claim This Offer
                </button>
            </div>
        </div>
    )
}