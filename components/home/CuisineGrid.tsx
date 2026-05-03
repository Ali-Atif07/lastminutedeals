'use client'

import Image from 'next/image'
import { cuisineCategories } from '@/lib/data'

export default function CuisineGrid() {
    return (
        <div className="mb-8">
            <h2 className="section-title">Explore by Cuisine</h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {cuisineCategories.map(category => (
                    <button
                        key={category.id}
                        className="group flex flex-col items-center gap-2 cursor-pointer"
                    >
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/5 group-hover:border-brand-purple/40 transition-all duration-300">
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl">{category.icon}</span>
                            </div>
                        </div>
                        <span className="text-white/60 group-hover:text-white text-xs font-medium transition-colors">
                            {category.name}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    )
}