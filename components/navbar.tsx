'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Tentang & Skill', href: '#about' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Achievement', href: '#achievement' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50 py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Brand - Hidden or adjusted on mobile to give space to links */}
          <Link href="#" className="hidden lg:block absolute left-10 font-bold text-xl text-primary tracking-tighter">
            MY<span className="text-white">PORTOFOLIO</span>
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center gap-4 sm:gap-6 md:gap-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[11px] sm:text-xs md:text-base font-bold uppercase tracking-wider text-foreground/70 hover:text-primary transition-all duration-200 hover:scale-105 inline-block whitespace-nowrap"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
