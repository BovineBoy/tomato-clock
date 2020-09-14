const eslintLoader = {
  loader: 'eslint-loader',
  options: {
    fix: true
  }
}

const rules = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: 'node-loader'
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: [
      {
        loader: '@marshallofsound/webpack-asset-relocator-loader',
        options: {
          outputAssetBase: 'native_modules'
        }
      },
      eslintLoader,
      {
        loader: 'babel-loader'
      }
    ]
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: [
      {
        loader: 'babel-loader'
      },
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      },
      eslintLoader
    ]
  }
]

module.exports = rules
