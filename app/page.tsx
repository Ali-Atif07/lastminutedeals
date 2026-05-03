'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FilterTabs from '@/components/home/FilterTabs'
import HeroBanner from '@/components/home/HeroBanner'
import TrendingCard from '@/components/home/TrendingCard'
import GrandImperialBanner from '@/components/home/GrandImperialBanner'
import LastMinuteDeals from '@/components/home/LastMinuteDeals'
import TrendingStays from '@/components/home/TrendingStays'
import RestaurantCard from '@/components/restaurant/RestaurantCard'
import { restaurants, lastMinuteDeals, trendingStays } from '@/lib/data'

const filterMap: Record<string, string> = {
  'All Buffets': 'all',
  'Lunch': 'lunch',
  'Dinner': 'dinner',
  'Group Friendly': 'group',
  'Available Now': 'available',
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('Lunch')

  const trendingRestaurant = restaurants.find(r => r.isTrending)!

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Page heading */}
        <div className="mb-8">
          <h1 className="font-black text-5xl md:text-6xl text-gray-900 mb-1">
            {activeFilter === 'All Buffets' ? 'All Buffets' : activeFilter}
          </h1>
          <h2 className="font-black text-3xl md:text-4xl text-gray-900">
            Explore{' '}
            <span className="text-brand-purple">Last-Minute Hotels</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-md">
            Spontaneous journeys, curated for the elite traveler. Find premium stays, exclusive dining, and vibrant events starting tonight.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-8">
          <FilterTabs active={activeFilter} onChange={setActiveFilter} />
        </div>

        {/* Hero banner */}
        <div className="mb-10">
          <HeroBanner />
        </div>

        {/* Book Your Table Now */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-black text-2xl text-gray-900">Book Your Table Now</h2>
            <a href="#" className="text-brand-purple text-sm font-semibold hover:underline">
              View All →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {restaurants.slice(0, 3).map(r => (
              <RestaurantCard key={r.id} restaurant={r} />
            ))}
          </div>
        </div>

        {/* Trending Now — split card */}
        <div className="mb-10">
          <TrendingCard restaurant={trendingRestaurant} />
        </div>

        {/* More restaurant cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-2">
          {restaurants.slice(2).map(r => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>

        {/* Grand Imperial Experience banner */}
        <GrandImperialBanner />

        {/* Last Minute Deals */}
        <LastMinuteDeals deals={lastMinuteDeals} />

        {/* Trending Stays */}
        <TrendingStays stays={trendingStays} />
      </main>

      <Footer />
    </div>
  )
}