'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { Restaurant } from '@/lib/data'
import { useRouter } from 'next/navigation'


interface Props {
    deals: Restaurant[]
}

export default function LastMinuteDeals({ deals }: Props) {
    const router = useRouter();

    return (
        <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
                <h2 className="font-black text-2xl text-gray-900">Last Minute Deals</h2>
                <a href="#" className="text-brand-purple text-sm font-semibold flex items-center gap-1 hover:underline">
                    View All →
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {deals.map(deal => (
                    <div key={deal.id} onClick={() => router.push(`/restaurant/${deal.id}`)}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow">
                        <div className="relative h-40">
                            <Image src={deal.image} alt={deal.name} fill className="object-cover" />
                        </div>
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-1">
                                <h3 className="font-bold text-gray-900">{deal.name}</h3>
                                <div className="flex items-center gap-1 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-lg">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    {deal.rating}
                                </div>
                            </div>
                            <p className="text-brand-purple font-bold text-lg">
                                ₹{deal.discountedPrice.toLocaleString()}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}