
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
    'notes': {
      entry: './src/entry/notes/index.js',
      template: 'public/notes.html',
      title: 'Just my personal notes.',
    },
    'photos': {
      entry: './src/entry/photos/index.js',
      template: 'public/photos.html',
      title: 'Just my photos of trees.',
    },
    '404': {
      entry: "./src/entry/404/index.js",
      template: "public/404.html",
      title: "404",
      chunks: ["chunk-vendors", "chunk-common", "404"],
    },
  }
}
