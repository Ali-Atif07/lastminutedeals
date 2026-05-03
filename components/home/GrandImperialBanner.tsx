'use client'

import Image from 'next/image'
import CountdownTimer from '@/components/ui/CountdownTimer'

export default function GrandImperialBanner() {
    return (
        <div className="relative rounded-2xl overflow-hidden h-64 md:h-72 my-8">
            <Image
                src="/grand-imperial-banner.jpg"
                alt="Grand Imperial Experience"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#250E69]/90 via-[#250E69]/50 to-transparent" />

            {/* Claim card (left) */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-5 w-52 shadow-xl">
                <p className="text-gray-500 text-xs mb-1">Exclusive Rate</p>
                <p className="text-gray-400 text-sm line-through">₹5,000</p>
                <p className="text-brand-purple font-black text-3xl mb-3">₹3,500</p>
                <button className="w-full bg-brand-purple hover:bg-brand-purple-light text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                    Claim Deal
                </button>
            </div>

            {/* Right text */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-right">
                <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-2">
                    Now or Never
                </p>
                <h3 className="text-white font-black text-3xl md:text-4xl leading-tight mb-3">
                    Grand Imperial<br />Experience
                </h3>
                <p className="text-white/70 text-sm mb-4 max-w-xs ml-auto">
                    Limited availability for our signature glamping forest retreat. These rates vanish in:
                </p>
                <div className="flex justify-end">
                    <CountdownTimer dark />
                </div>
            </div>
        </div>
    )
}