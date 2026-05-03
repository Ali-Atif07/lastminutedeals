'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { HotelStay } from '@/lib/data'

interface Props {
    stays: HotelStay[]
}

export default function TrendingStays({ stays }: Props) {
    return (
        <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
                <h2 className="font-black text-2xl text-gray-900">Trending Stay</h2>
                <a href="#" className="text-brand-purple text-sm font-semibold flex items-center gap-1 hover:underline">
                    View All →
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stays.map(stay => (
                    <div key={stay.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow">
                        <div className="relative h-44">
                            <Image src={stay.image} alt={stay.name} fill className="object-cover" />
                        </div>
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-1">
                                <h3 className="font-bold text-gray-900 italic">{stay.name}</h3>
                                <div className="flex items-center gap-1 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-lg">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    {stay.rating}
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm line-through">
                                ₹{stay.originalPrice.toLocaleString()}
                            </p>
                            <p className="text-brand-purple font-bold text-lg">
                                ₹{stay.discountedPrice.toLocaleString()}
                                <span className="text-gray-400 text-sm font-normal"> /night</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}