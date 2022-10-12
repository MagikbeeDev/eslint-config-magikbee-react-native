module.exports = {
  env: {
    'react-native/react-native': true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json' // Required for Standard plugin
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native'
  ],
  globals: {
    __DEV__: false,
    jasmine: false,
    beforeAll: false,
    afterAll: false,
    beforeEach: false,
    afterEach: false,
    test: false,
    expect: false,
    describe: false,
    jest: false,
    it: false,
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1, ignoreComments: true }],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
      },
    ],
    'brace-style': ['error', 'allman'],
    'prefer-promise-reject-errors': 'off',
    camelcase: 0,
    'comma-dangle': 0,
    'no-unused-vars': 0,
    'no-undef': 0,
    'space-before-function-paren': 0,

    'react/no-unescaped-entities': 0,
    'react/prop-types': 'off',
    'react-native/no-raw-text': 0,

    //disable some rules to avoid conflicts with eslint rules
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/camelcase': 0,
    "@typescript-eslint/brace-style": 0,
    "@typescript-eslint/naming-convention": 0,
    "@typescript-eslint/space-before-function-paren": 0,
    "@typescript-eslint/promise-function-async": 0,
    "@typescript-eslint/no-floating-promises": 0,
    "@typescript-eslint/array-type": 0
  },
}
