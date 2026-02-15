'use client'

import { motion, AnimatePresence } from 'framer-motion'
import NavLink from './NavLink'
import type { NavItem } from './NavLink'

interface MobileDrawerProps {
  isOpen: boolean
  navItems: NavItem[]
  pathname: string
  activeSection: string
  onScrollToSection: (id: string) => void
  onClose: () => void
}

export default function MobileDrawer({
  isOpen,
  navItems,
  pathname,
  activeSection,
  onScrollToSection,
  onClose,
}: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          className="lg:hidden bg-ghd-surface backdrop-blur-md border-b border-gray-800/50 overflow-hidden"
        >
          <nav className="container mx-auto px-6 py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <div key={item.id}>
                  <NavLink
                    item={item}
                    pathname={pathname}
                    activeSection={activeSection}
                    onScrollToSection={onScrollToSection}
                    onClose={onClose}
                    mobile
                  />
                </div>
              ))}
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
