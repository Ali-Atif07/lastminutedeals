'use client'

import Image from 'next/image'
import { MapPin, Star, Heart } from 'lucide-react'
import { Restaurant } from '@/lib/data'
import CountdownTimer from '@/components/ui/CountdownTimer'
import { useRouter } from 'next/navigation'

interface RestaurantCardProps {
    restaurant: Restaurant
    onClick?: (r: Restaurant) => void
    variant?: 'grid' | 'list'
}

export default function RestaurantCard({
    restaurant,
    onClick,
    variant = 'grid',
}: RestaurantCardProps) {
    const router = useRouter()
    return (
        <div
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
            onClick={() => onClick?.(restaurant)}
        >
            {/* Image */}
            <div className="relative h-44 w-full">
                <Image
                    src={restaurant.image}
                    alt={restaurant.name}
                    fill
                    className="object-cover"
                />
                {/* Discount badge */}
                <div className="absolute top-3 left-3 bg-brand-red text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {restaurant.discount}% OFF
                </div>
                {/* Timer */}
                <div className="absolute top-3 right-3">
                    <CountdownTimer />
                </div>
                {/* Wishlist */}
                <button
                    className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center"
                    onClick={e => e.stopPropagation()}
                >
                    <Heart className="w-4 h-4 text-gray-400" />
                </button>
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Name + Rating */}
                <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-gray-900 text-base">{restaurant.name}</h3>
                    <div className="flex items-center gap-1 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-lg ml-2 shrink-0">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {restaurant.rating}
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 text-gray-400 text-xs mb-3">
                    <MapPin className="w-3 h-3" />
                    {restaurant.location} • {restaurant.distance}
                </div>

                {/* Price row */}
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-gray-400 text-xs line-through">
                            ₹{restaurant.originalPrice.toLocaleString()}
                        </p>
                        <div className="flex items-baseline gap-1">
                            <span className="text-brand-purple font-bold text-lg">
                                ₹{restaurant.discountedPrice.toLocaleString()}
                            </span>
                            <span className="text-gray-400 text-xs">/ {restaurant.priceLabel}</span>
                        </div>
                        <p className="text-brand-red text-xs font-semibold mt-0.5">
                            ONLY {restaurant.availableTables} TABLE AVAILABLE
                        </p>
                    </div>
                    <button
                        className="bg-brand-purple hover:bg-brand-purple-light text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                        onClick={e => {
                            e.stopPropagation()
                            router.push(`/restaurant/${restaurant.id}`)
                        }}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    )
}