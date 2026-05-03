'use client'

import Image from 'next/image'
import { ChevronRight, Award } from 'lucide-react'

export default function PromoBanner() {
    return (
        <div className="relative rounded-2xl overflow-hidden my-8 cursor-pointer group">
            {/* BG image */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85"
                    alt="Grand Imperial Experience"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple-dark/95 via-brand-purple/80 to-brand-dark/60" />
            </div>

            <div className="relative flex items-center justify-between p-6 sm:p-8">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-brand-gold" />
                        <span className="text-brand-gold text-xs font-semibold tracking-wider uppercase">Featured Experience</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">Grand Imperial</h3>
                    <p className="text-white/70 text-sm mb-1">Experience</p>
                    <p className="text-white/50 text-xs max-w-xs hidden sm:block">
                        An unparalleled culinary journey through Asian and Continental flavors in a stunning imperial setting
                    </p>

                    <div className="flex items-baseline gap-2 mt-4">
                        <span className="text-white font-bold text-xl">₹2,490</span>
                        <span className="text-white/40 text-sm line-through">₹3,100</span>
                        <span className="bg-brand-gold/20 text-brand-gold text-xs px-2 py-0.5 rounded-full font-medium">Save 20%</span>
                    </div>
                </div>

                <div className="ml-4 flex flex-col items-end gap-3">
                    <button className="flex items-center gap-2 bg-white text-brand-purple-dark hover:bg-white/90 font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 text-sm shadow-xl">
                        Reserve
                        <ChevronRight className="w-4 h-4" />
                    </button>
                    <p className="text-white/40 text-xs text-right">Limited seats tonight</p>
                </div>
            </div>
        </div>
    )
}