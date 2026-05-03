'use client'

import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export default function HeroBanner() {
    return (
        <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden">
            <Image
                src="/home-banner.png"
                alt="Mizu Omakase"
                fill
                className="object-cover"
                priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            {/* Badge */}
            <div className="absolute top-6 left-6">
                <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    Deal of the Night
                </span>
            </div>

            {/* Text */}
            <div className="absolute bottom-8 left-6 right-6">
                <h2 className="text-white font-black text-3xl md:text-5xl leading-tight mb-1">
                    Mizu Omakase
                </h2>
                <p className="text-purple-300 font-bold text-2xl md:text-4xl mb-3">
                    Special Reseve
                </p>
                <p className="text-white/70 text-sm max-w-sm mb-6 hidden md:block">
                    Experience an exclusive 18-course tasting journey by Chef Kenji. Only two seats remaining for the 8:30 PM seating tonight.
                </p>
                <div className="flex gap-3">
                    <button className="bg-brand-purple hover:bg-brand-purple-light text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors">
                        40% Off – Book Now
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors border border-white/30">
                        View Gallery
                    </button>
                </div>
            </div>
        </div>
    )
}