const eslint = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  },
  overrides: [
    {
      files: ['webpack.*.js'],
      rules: { '@typescript-eslint/no-var-requires': 'off' }
    }
  ]
}

module.exports = eslint
