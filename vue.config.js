const path = require('path');

// Handle the special prod-vs-dev pathing needs
function getPublicPath() {
  switch (process.env.NODE_ENV) {
    case 'dev': return path.join(__dirname, 'dist')
    case 'development': return path.join(__dirname, 'dist')
    default: return '/tree-id/'
  }
}

module.exports = {
  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(440000)
      .maxAssetSize(440000)
  },
  publicPath: getPublicPath(),
  pages: {
    'index': {
      entry: './src/entry/main.js',
      template: 'public/index.html',
      title: 'Identifying Trees',
    },
    'notes': {
      entry: './src/entry/notes/index.js',
      template: 'public/notes.html',
      title: 'Just my personal notes.',
    },
    'photogallery': {
      entry: './src/entry/photogallery/index.js',
      template: 'public/photogallery.html',
      title: 'Photos of a single tree species.',
    },
    'photos': {
      entry: './src/entry/photos/index.js',
      template: 'public/photos.html',
      title: 'Just my photos of trees.',
    },
    'family': {
      entry: './src/entry/family/index.js',
      template: 'public/family.html',
      title: 'Taxonomy of tree families.',
    },
    'species': {                                                                                                                                                                                                   
      entry: './src/entry/species/index.js',                                                                                                                                                                       
      template: 'public/species.html',                                                                                                                                                                             
      title: 'Taxonomy of tree species.',                                                                                                                                                                          
    },
    '404': {
      entry: "./src/entry/404/index.js",
      template: "public/404.html",
      title: "404",
      chunks: ["chunk-vendors", "chunk-common", "404"],
    },
  }
}
