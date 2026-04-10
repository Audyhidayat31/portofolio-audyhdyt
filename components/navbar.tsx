'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between md:justify-center items-center">
          {/* Logo or Brand (Mobile only or for layout balance) */}
          <Link href="#" className="md:hidden font-bold text-xl text-primary tracking-tighter">
            AUDY<span className="text-white">HDYT</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 md:space-x-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="text-sm md:text-base font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-foreground/70 hover:text-primary transition-colors">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/95 backdrop-blur-lg border-border/50 w-[300px]">
                <SheetTitle className="text-left mb-8 text-primary font-bold">Menu Navigasi</SheetTitle>
                <nav className="flex flex-col space-y-6 mt-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors border-b border-border/20 pb-2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="absolute bottom-10 left-6">
                   <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Audy Abdillah Hidayat</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
