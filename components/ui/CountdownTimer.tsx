'use client'

import { useEffect, useState } from 'react'

interface CountdownTimerProps {
    dark?: boolean
}

export default function CountdownTimer({ dark = false }: CountdownTimerProps) {
    const [time, setTime] = useState({ h: 8, m: 12, s: 36 })

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => {
                let { h, m, s } = prev
                s--
                if (s < 0) { s = 59; m-- }
                if (m < 0) { m = 59; h-- }
                if (h < 0) { h = 0; m = 0; s = 0 }
                return { h, m, s }
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const pad = (n: number) => String(n).padStart(2, '0')

    if (dark) {
        return (
            <div className="flex items-end gap-3">
                {[
                    { val: time.h, label: 'HOURS' },
                    { val: time.m, label: 'MIN' },
                    { val: time.s, label: 'SEC' },
                ].map(({ val, label }) => (
                    <div key={label} className="flex flex-col items-center">
                        <div className="bg-white/20 text-white text-2xl font-bold w-14 h-14 rounded-lg flex items-center justify-center">
                            {pad(val)}
                        </div>
                        <span className="text-white/60 text-[10px] mt-1 tracking-widest">{label}</span>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="flex items-center gap-1.5">
            {[time.h, time.m, time.s].map((val, i) => (
                <span
                    key={i}
                    className="bg-gray-800 text-white text-xs font-bold px-2 py-0.5 rounded"
                >
                    {pad(val)}
                </span>
            ))}
        </div>
    )
}