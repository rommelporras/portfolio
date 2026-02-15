import nextConfig from 'eslint-config-next'
import prettierConfig from 'eslint-config-prettier'

const config = [
  ...nextConfig,
  {
    ignores: ['node_modules', '.next', 'out', 'dist', 'coverage', '.turbo', '.bun-cache'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'prefer-const': 'error',
      'no-var': 'error',
      'no-console': 'warn',
      'no-unused-vars': 'off',
      'react/no-unescaped-entities': 'error',
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'warn',
      'import/no-anonymous-default-export': 'warn',
    },
  },
  {
    files: ['tests/**', '**/*.test.*', '**/*.spec.*'],
    rules: {
      'no-console': 'off',
    },
  },
  prettierConfig,
]

export default config
