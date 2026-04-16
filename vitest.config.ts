import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

/**
 * Vitest configuration for Next.js 16 + React 19 portfolio
 *
 * This config enables:
 * - React Testing Library for component tests
 * - TypeScript path aliases (@/...)
 * - jsdom environment for DOM testing
 * - Coverage reporting with v8
 */
export default defineConfig({
  plugins: [
    // Enable React support with automatic JSX runtime
    react(),
    // Support TypeScript path aliases from tsconfig.json
    tsconfigPaths(),
  ],
  test: {
    // Use jsdom for DOM testing (required for React components)
    environment: 'jsdom',

    // Setup file to run before each test file
    setupFiles: ['./tests/setup.ts'],

    // Include test files
    include: [
      'tests/unit/**/*.{test,spec}.{ts,tsx}',
      'tests/integration/**/*.{test,spec}.{ts,tsx}',
      'components/**/*.{test,spec}.{ts,tsx}',
      'app/**/*.{test,spec}.{ts,tsx}',
    ],

    // Exclude patterns
    exclude: ['node_modules', 'dist', '.next', 'out', 'tests/e2e/**', 'tests/helpers/**'],

    // Coverage configuration
    coverage: {
      provider: 'istanbul',
      // cobertura format required for GitLab MR coverage visualization
      reporter: ['text', 'json', 'html', 'lcov', 'cobertura'],
      include: [
        'app/**/*.{ts,tsx}',
        'components/**/*.{ts,tsx}',
        'data/**/*.ts',
        'lib/**/*.{ts,tsx}',
      ],
      exclude: [
        'app/layout.tsx',
        '**/*.config.{ts,js}',
        '**/*.d.ts',
        '**/types/**',
        'tests/**',
        'scripts/**',
      ],
      thresholds: {
        lines: 5,
        functions: 4,
        branches: 2,
        statements: 5,
      },
    },

    // Global test utilities available in all tests
    globals: true,

    // Test timeout for component tests
    testTimeout: 10000,

    // Mock browser APIs
    mockReset: true,
    restoreMocks: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
