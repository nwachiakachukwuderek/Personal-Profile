"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { useEffect, useState } from "react";

export default function Countdown() {
    const targetDate = "2027-01-16T00:00:00.000Z"; // Nigerian Presidential Election
    const timeLeft = useCountdown(targetDate);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Pad numbers with leading zero
    const formatTime = (time) => String(time || 0).padStart(2, "0");

    if (!mounted) {
        return <div className="h-32 flex items-center justify-center opacity-50">Loading countdown...</div>;
    }

    return (
        <div className="flex gap-2 sm:gap-4 text-center justify-center lg:justify-start">
            <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-white text-brand-red px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg min-w-[3rem] sm:min-w-[4rem] lg:min-w-[5rem]">
                    {formatTime(timeLeft.days)}
                </div>
                <span className="text-[10px] sm:text-xs lg:text-sm font-medium mt-2 uppercase tracking-wider text-slate-100">Days</span>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white py-2 sm:py-3">:</div>
            <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-white text-brand-red px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg min-w-[3rem] sm:min-w-[4rem] lg:min-w-[5rem]">
                    {formatTime(timeLeft.hours)}
                </div>
                <span className="text-[10px] sm:text-xs lg:text-sm font-medium mt-2 uppercase tracking-wider text-slate-100">Hours</span>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white py-2 sm:py-3">:</div>
            <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-white text-brand-red px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg min-w-[3rem] sm:min-w-[4rem] lg:min-w-[5rem]">
                    {formatTime(timeLeft.minutes)}
                </div>
                <span className="text-[10px] sm:text-xs lg:text-sm font-medium mt-2 uppercase tracking-wider text-slate-100">Mins</span>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white py-2 sm:py-3">:</div>
            <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-white text-brand-red px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg min-w-[3rem] sm:min-w-[4rem] lg:min-w-[5rem]">
                    {formatTime(timeLeft.seconds)}
                </div>
                <span className="text-[10px] sm:text-xs lg:text-sm font-medium mt-2 uppercase tracking-wider text-slate-100">Secs</span>
            </div>
        </div>
    );
}
