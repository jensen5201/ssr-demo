require('babel-core/register')({
  presets: [
    [
      'env',
      {
        targets: {
          node: true,
          browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
        }
      }
    ]
  ]
})
require('./app')
