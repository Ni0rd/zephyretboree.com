module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prettier', 'react', 'jsx-a11y', 'import', 'graphql'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/core-modules': [],
  },
};
