'use client'

import { Search, MapPin } from 'lucide-react'

export default function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <span className="text-brand-purple font-black text-xl tracking-tight">
                    Last Minutes Deal
                </span>

                {/* Nav links */}
                <div className="hidden md:flex items-center gap-8">
                    {['Home', 'Daily Deals', 'Buffet Deals', 'Hotel Deals'].map((link) => (

                        <a key={link}
                            href="#"
                            className={`text-sm font-medium transition-colors ${link === 'Buffet Deals'
                                ? 'text-brand-purple border-b-2 border-brand-purple pb-0.5'
                                : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* Right icons */}
                <div className="flex items-center gap-4">
                    <Search className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-900" />
                    <MapPin className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-900" />
                    <div className="w-9 h-9 rounded-full bg-orange-400 overflow-hidden cursor-pointer">
                        <div className="w-full h-full bg-gradient-to-br from-orange-300 to-red-400" />
                    </div>
                </div>
            </div>
        </nav >
    )
}