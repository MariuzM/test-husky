const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  babel: require(__dirname + '/../.babelrc.js'),

  webpack: {
    configure: (webpackConfig) => ({
      ...webpackConfig,
      optimization: {
        ...webpackConfig.optimization,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              output: { comments: false },
            },
            extractComments: false,
          }),
        ],
      },
    }),
  },
}
