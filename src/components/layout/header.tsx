'use client';

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

export default function Header() {
    const [scrollStyle, setScrollStyle] = useState<boolean>(false)
    const prevScrollY = useRef(0)
    
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const hasScroll = currentScrollY > 0
            if ((prevScrollY.current > 0) !== hasScroll) {
                setScrollStyle(hasScroll)
            }
            prevScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header 
            className={cn(
                "w-full sticky top-0 z-50 flex items-center justify-center p-4 bg-transparent transition-[background-color] duration-300 ease-in-out",
                scrollStyle && "bg-[rgba(30,45,64,0.4)] border-b border-background-secondary backdrop-blur-[25px]" 
            )}
        >
            
        </header>
    )
}