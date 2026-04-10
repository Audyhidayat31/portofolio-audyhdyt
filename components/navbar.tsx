'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-primary/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Neon Logo */}
          <Link href="#" className="relative group">
            <span className="text-2xl font-black tracking-tighter text-white">
              MY<span className="text-primary drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">PORTOFOLIO</span>
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative text-sm font-bold uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-all duration-300 relative z-[60]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-8 h-8 rotate-90 scale-110" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[58]"
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-slate-950/95 backdrop-blur-2xl z-[59] border-l border-primary/20 p-10 flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
            >
              <div className="mt-20 space-y-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-bold uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-all duration-300 flex items-center group"
                    >
                      <span className="w-0 h-1 bg-primary mr-0 group-hover:w-4 group-hover:mr-4 transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-4 opacity-50">Audy Abdillah Hidayat</p>
                <div className="h-1 w-12 bg-primary rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
