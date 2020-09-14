const eslintLoader = {
  loader: 'eslint-loader',
  options: {
    fix: true
  }
}

module.exports = [
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
      eslintLoader
    ]
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: [
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
