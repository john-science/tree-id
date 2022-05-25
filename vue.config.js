
module.exports = {
  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(440000)
      .maxAssetSize(440000)
  },
  publicPath: './',
  pages: {
    'index': {
      entry: './src/entry/main.js',
      template: 'public/index.html',
      title: 'Hot Sauce Reviews',
    },
    'wanted': {
      entry: './src/entry/wanted/index.js',
      template: 'public/wanted.html',
      title: 'Sauces I Want',
    },
    'styles': {
      entry: './src/entry/styles/index.js',
      template: 'public/styles.html',
      title: 'Styles of Hot Sauces',
    },
    '404': {
      entry: "./src/entry/404/index.js",
      template: "public/404.html",
      title: "404",
      chunks: ["chunk-vendors", "chunk-common", "404"],
    },
  }
}
