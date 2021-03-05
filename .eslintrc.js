module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier/prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx']
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      {
        extensions: ['.tsx', '.ts', '.js']
      }
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/prop-types': 'off',
    'comma-dangle': ['error', 'never'],
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'off',
    'implicit-arrow-linebreak': ['error', 'below'],
    'function-paren-newline': 'off',
    'react/button-has-type': 'off',
    'object-curly-newline': 'off'
  }
};
