export interface Restaurant {
    id: string
    name: string
    location: string
    distance: string
    rating: number
    originalPrice: number
    discountedPrice: number
    priceLabel: string
    discount: number
    image: string
    availableTables: number
    isLastMinute?: boolean
    isTrending?: boolean
}

export interface HotelStay {
    id: string
    name: string
    originalPrice: number
    discountedPrice: number
    image: string
    rating: number
}

export const restaurants: Restaurant[] = [
    {
        id: '1',
        name: 'Grand Imperial',
        location: 'Kalyan',
        distance: '4.2 km away',
        rating: 4.9,
        originalPrice: 5000,
        discountedPrice: 3500,
        priceLabel: 'Table',
        discount: 75,
        image: '/grand-imperial.png',
        availableTables: 2,
        isTrending: true,
    },
    {
        id: '2',
        name: 'Hotel Devine',
        location: 'Kurla',
        distance: '4.2 km away',
        rating: 4.9,
        originalPrice: 4500,
        discountedPrice: 3200,
        priceLabel: 'Table',
        discount: 75,
        image: '/hotel-devine.png',
        availableTables: 2,
    },
    {
        id: '3',
        name: 'Amber Soul',
        location: 'Kalyan',
        distance: '4.2 km away',
        rating: 4.9,
        originalPrice: 3600,
        discountedPrice: 3000,
        priceLabel: 'Table',
        discount: 75,
        image: '/amber-soul.png',
        availableTables: 1,
    },
    {
        id: '4',
        name: 'Weekend Lio',
        location: 'Kalyan',
        distance: '4.2 km away',
        rating: 4.9,
        originalPrice: 8000,
        discountedPrice: 5400,
        priceLabel: 'Table',
        discount: 75,
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
        availableTables: 3,
        isLastMinute: true,
    },
]

export const lastMinuteDeals: Restaurant[] = [
    {
        id: 'lm1',
        name: 'Grand Imperial',
        location: 'Kalyan',
        distance: '4.2 km away',
        rating: 4.9,
        originalPrice: 5000,
        discountedPrice: 3500,
        priceLabel: 'Table',
        discount: 75,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
        availableTables: 2,
        isLastMinute: true,
    },
    {
        id: 'lm2',
        name: 'Hotel Devine',
        location: 'Kurla',
        distance: '4.2 km away',
        rating: 4.9,
        originalPrice: 4500,
        discountedPrice: 3200,
        priceLabel: 'Table',
        discount: 75,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
        availableTables: 2,
        isLastMinute: true,
    },
    {
        id: 'lm3',
        name: 'Amber Soul',
        location: 'Kalyan',
        distance: '4.2 km away',
        rating: 4.9,
        originalPrice: 3600,
        discountedPrice: 3000,
        priceLabel: 'Table',
        discount: 75,
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80',
        availableTables: 1,
        isLastMinute: true,
    },
]

export const trendingStays: HotelStay[] = [
    {
        id: 'ts1',
        name: 'Hotel Greentop',
        originalPrice: 27000,
        discountedPrice: 13500,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80',
    },
    {
        id: 'ts2',
        name: 'Hotel Greentop',
        originalPrice: 27000,
        discountedPrice: 13500,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80',
    },
    {
        id: 'ts3',
        name: 'Hotel Greentop',
        originalPrice: 27000,
        discountedPrice: 13500,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80',
    },
]