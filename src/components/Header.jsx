"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <>
            {/* Fixed Global Header */}
            <header className="fixed top-0 left-0 right-0 z-50 h-16 pointer-events-none flex items-center justify-end px-4 sm:px-8">
                <button
                    onClick={toggleMenu}
                    className="pointer-events-auto bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-slate-200 text-brand-blue hover:text-brand-red hover:bg-white transition-all duration-300 z-50 group"
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? (
                        <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
                    ) : (
                        <Menu className="w-6 h-6 transition-transform group-hover:scale-110" />
                    )}
                </button>
            </header>

            {/* Fullscreen Overlay Menu */}
            <div
                className={`fixed inset-0 z-40 bg-brand-blue/95 backdrop-blur-xl transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <nav className="flex flex-col items-center space-y-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                href={link.path}
                                onClick={toggleMenu}
                                className={`text-4xl sm:text-5xl font-black uppercase tracking-widest transition-all duration-300 transform hover:scale-110 ${isActive
                                        ? "text-brand-red underline decoration-4 underline-offset-8"
                                        : "text-white hover:text-brand-red"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Decorative elements */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
                    <Menu className="w-48 h-48 rotate-90 text-brand-red" />
                </div>
            </div>
        </>
    );
}
