/* eslint-disable react/display-name */
import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'
import React from 'react'

/**
 * Test setup file for Vitest
 *
 * This file runs before each test suite and sets up:
 * - jest-dom matchers (toBeInTheDocument, etc.)
 * - Automatic cleanup after each test
 * - Mock implementations for browser APIs
 */

// Cleanup after each test (unmount React trees, clear mocks)
afterEach(() => {
  cleanup()
})

// Mock Framer Motion to avoid window.matchMedia issues in jsdom
// Framer Motion accesses window.matchMedia during module initialization
vi.mock('framer-motion', () => ({
  motion: {
    div: React.forwardRef(({ children, ...props }: any, ref: any) =>
      React.createElement('div', { ...props, ref }, children),
    ),
    span: React.forwardRef(({ children, ...props }: any, ref: any) =>
      React.createElement('span', { ...props, ref }, children),
    ),
    button: React.forwardRef(({ children, ...props }: any, ref: any) =>
      React.createElement('button', { ...props, ref }, children),
    ),
    a: React.forwardRef(({ children, ...props }: any, ref: any) =>
      React.createElement('a', { ...props, ref }, children),
    ),
    p: React.forwardRef(({ children, ...props }: any, ref: any) =>
      React.createElement('p', { ...props, ref }, children),
    ),
    h1: React.forwardRef(({ children, ...props }: any, ref: any) =>
      React.createElement('h1', { ...props, ref }, children),
    ),
    h2: React.forwardRef(({ children, ...props }: any, ref: any) =>
      React.createElement('h2', { ...props, ref }, children),
    ),
    h3: React.forwardRef(({ children, ...props }: any, ref: any) =>
      React.createElement('h3', { ...props, ref }, children),
    ),
    ul: React.forwardRef(({ children, ...props }: any, ref: any) =>
      React.createElement('ul', { ...props, ref }, children),
    ),
    li: React.forwardRef(({ children, ...props }: any, ref: any) =>
      React.createElement('li', { ...props, ref }, children),
    ),
    nav: React.forwardRef(({ children, ...props }: any, ref: any) =>
      React.createElement('nav', { ...props, ref }, children),
    ),
    header: React.forwardRef(({ children, ...props }: any, ref: any) =>
      React.createElement('header', { ...props, ref }, children),
    ),
    section: React.forwardRef(({ children, ...props }: any, ref: any) =>
      React.createElement('section', { ...props, ref }, children),
    ),
    article: React.forwardRef(({ children, ...props }: any, ref: any) =>
      React.createElement('article', { ...props, ref }, children),
    ),
    aside: React.forwardRef(({ children, ...props }: any, ref: any) =>
      React.createElement('aside', { ...props, ref }, children),
    ),
    footer: React.forwardRef(({ children, ...props }: any, ref: any) =>
      React.createElement('footer', { ...props, ref }, children),
    ),
    img: React.forwardRef((props: any, ref: any) => React.createElement('img', { ...props, ref })),
    svg: React.forwardRef(({ children, ...props }: any, ref: any) =>
      React.createElement('svg', { ...props, ref }, children),
    ),
    path: React.forwardRef((props: any, ref: any) =>
      React.createElement('path', { ...props, ref }),
    ),
  },
  AnimatePresence: ({ children }: any) => children,
  useAnimation: () => ({
    start: vi.fn(),
    stop: vi.fn(),
    set: vi.fn(),
  }),
  useInView: () => true,
  useScroll: () => ({
    scrollY: { get: () => 0, onChange: vi.fn() },
    scrollYProgress: { get: () => 0, onChange: vi.fn() },
  }),
  useTransform: () => 0,
  useMotionValue: () => ({ get: () => 0, set: vi.fn(), onChange: vi.fn() }),
  useSpring: () => ({ get: () => 0, set: vi.fn() }),
  useReducedMotion: () => false,
}))

// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    pathname: '/',
    query: {},
    asPath: '/',
  })),
  usePathname: vi.fn(() => '/'),
  useSearchParams: vi.fn(() => new URLSearchParams()),
  useParams: vi.fn(() => ({})),
}))

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: (props: any) => {
    const { createElement } = require('react')
    return createElement('img', props)
  },
}))

// Mock Next.js Link component
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: any) => {
    const { createElement } = require('react')
    return createElement('a', { href, ...props }, children)
  },
}))

// Mock IntersectionObserver (used by Framer Motion and TableOfContents)
global.IntersectionObserver = class IntersectionObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  takeRecords = vi.fn()
  root = null
  rootMargin = ''
  thresholds = []

  constructor(
    public callback: IntersectionObserverCallback,
    public options?: IntersectionObserverInit,
  ) {}
} as any

// Mock ResizeObserver (used by some UI components)
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock window.matchMedia (used for dark mode detection)
// Use a factory function to ensure it always returns a valid MediaQueryList
const matchMediaMock = vi.fn().mockImplementation((query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}))

// Set on both window and globalThis to ensure it's available
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  configurable: true,
  value: matchMediaMock,
})

// Also set on global scope for SSR-like testing
if (typeof globalThis !== 'undefined') {
  Object.defineProperty(globalThis, 'matchMedia', {
    writable: true,
    configurable: true,
    value: matchMediaMock,
  })
}

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString()
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

// Mock scrollTo
window.scrollTo = vi.fn()

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn()

// Mock Clipboard API (for CopyButton)
// Create a proper vi.fn() spy that can be tracked
const writeTextMock = vi.fn().mockResolvedValue(undefined)
const readTextMock = vi.fn().mockResolvedValue('')

Object.defineProperty(navigator, 'clipboard', {
  configurable: true,
  writable: true,
  value: {
    writeText: writeTextMock,
    readText: readTextMock,
  },
})
