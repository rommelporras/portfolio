'use client'

import Link from 'next/link'

export interface NavItem {
  id: string
  label: string
  type: 'section' | 'route' | 'external'
  href?: string
}

interface NavLinkProps {
  item: NavItem
  pathname: string
  activeSection: string
  onScrollToSection: (id: string) => void
  onClose?: () => void
  mobile?: boolean
}

export default function NavLink({
  item,
  pathname,
  activeSection,
  onScrollToSection,
  onClose,
  mobile,
}: NavLinkProps) {
  const baseClass = mobile
    ? 'block px-4 py-3 rounded-lg text-base font-medium transition-colors'
    : 'text-sm font-medium transition-colors duration-150'

  const activeClass = mobile ? 'bg-cyan-400/10 text-cyan-400' : 'text-cyan-400'
  const inactiveClass = mobile
    ? 'text-gray-400 hover:text-white hover:bg-gray-800/50'
    : 'text-gray-400 hover:text-white'

  if (item.type === 'external') {
    return (
      <a
        href={item.href!}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        className={`${baseClass} ${inactiveClass}`}
      >
        {item.label}
      </a>
    )
  }

  if (item.type === 'route') {
    return (
      <Link
        href={item.href!}
        onClick={onClose}
        className={`${baseClass} ${pathname?.startsWith(item.href!) ? activeClass : inactiveClass}`}
      >
        {item.label}
      </Link>
    )
  }

  // Section type - from non-homepage
  if (pathname !== '/') {
    return (
      <Link href={`/#${item.id}`} onClick={onClose} className={`${baseClass} ${inactiveClass}`}>
        {item.label}
      </Link>
    )
  }

  // Section type - on homepage
  return (
    <button
      onClick={() => {
        onScrollToSection(item.id)
        onClose?.()
      }}
      className={`${mobile ? 'w-full text-left' : ''} ${baseClass} ${activeSection === item.id ? activeClass : inactiveClass}`}
    >
      {item.label}
    </button>
  )
}
