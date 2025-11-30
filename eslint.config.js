import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
]
