module.exports = {
  root: true,

  // parser: '@typescript-eslint/parser',

  extends: [
    'react-app',
    // 'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],

  // plugins: ['import'],

  rules: {
    // 'react/prop-types': 'off',
    // 'object-curly-newline': ['error', { multiline: true }],
    // 'react/no-array-index-key': 'off',
  },

  parserOptions: {
    project: './tsconfig.json',
  },

  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
}
