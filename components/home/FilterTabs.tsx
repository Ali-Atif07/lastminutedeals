'use client'

import clsx from 'clsx'

interface FilterTabsProps {
    active: string
    onChange: (v: string) => void
}

const tabs = ['All Buffets', 'Lunch', 'Dinner', 'Group Friendly', 'Available Now']

export default function FilterTabs({ active, onChange }: FilterTabsProps) {
    return (
        <div className="flex gap-3 flex-wrap">
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => onChange(tab)}
                    className={clsx(
                        'px-5 py-2 rounded-full text-sm font-semibold transition-all border',
                        active === tab
                            ? 'bg-brand-purple text-white border-brand-purple shadow-md'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-brand-purple hover:text-brand-purple'
                    )}
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}