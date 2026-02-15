'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NavLink from './NavLink'
import MobileDrawer from './MobileDrawer'
import type { NavItem } from './NavLink'

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', type: 'section' },
  { id: 'homelab', label: 'Homelab', type: 'route', href: '/homelab' },
  // TODO: Temporarily hidden - uncomment when ready to show
  // { id: 'case-studies', label: 'Case Studies', type: 'route', href: '/case-studies' },
  // { id: 'projects', label: 'Projects', type: 'route', href: '/projects' },
  { id: 'blog', label: 'Blog', type: 'external', href: 'https://blog.rommelporras.com' },
  { id: 'contact', label: 'Contact', type: 'section' },
]

export default function AutoHideHeader() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 50) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)

      // Track active section on homepage
      if (pathname === '/') {
        const sections = navItems.filter((item) => item.type === 'section').map((item) => item.id)
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, pathname])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-70 focus:px-4 focus:py-2 focus:bg-blue-500 focus:text-white focus:rounded"
      >
        Skip to content
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="bg-warm-dark/80 backdrop-blur-sm border-b border-gray-800/50">
          <div className="container mx-auto px-6">
            <nav className="flex items-center justify-between h-16">
              <Link href="/" className="text-lg font-heading font-bold text-white">
                Rommel Porras
              </Link>

              <div className="hidden lg:flex items-center gap-6">
                {navItems.map((item) => (
                  <div key={item.id}>
                    <NavLink
                      item={item}
                      pathname={pathname}
                      activeSection={activeSection}
                      onScrollToSection={scrollToSection}
                    />
                  </div>
                ))}
              </div>

              {/* Mobile menu toggle */}
              <div className="flex lg:hidden items-center gap-3">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                  aria-label="Toggle mobile menu"
                  aria-expanded={mobileMenuOpen}
                >
                  <div className="w-6 h-5 relative flex flex-col justify-between">
                    <span
                      className={`w-full h-0.5 bg-white transition-all duration-300 ${
                        mobileMenuOpen ? 'rotate-45 translate-y-2' : 'rotate-0'
                      }`}
                    />
                    <span
                      className={`w-full h-0.5 bg-white transition-all duration-300 ${
                        mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                    <span
                      className={`w-full h-0.5 bg-white transition-all duration-300 ${
                        mobileMenuOpen ? '-rotate-45 -translate-y-2' : 'rotate-0'
                      }`}
                    />
                  </div>
                </button>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile drawer */}
        <MobileDrawer
          isOpen={mobileMenuOpen}
          navItems={navItems}
          pathname={pathname}
          activeSection={activeSection}
          onScrollToSection={scrollToSection}
          onClose={() => setMobileMenuOpen(false)}
        />
      </header>
    </>
  )
}
