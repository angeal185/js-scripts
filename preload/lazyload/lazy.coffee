###*
* {{lazy}}
* => {{lazy name="styles.min"}} --css development file helper
###

hbs = require('express-hbs')
config = require('../../config')
generateAssetHash = require('../../utils/asset-hash')

lazy = (options) ->
  options.hash = options.hash or {}
  #defaults
  cls = options.hash.cls or ''
  #file path and/or name eg. styles / prod/styles
  src = options.hash.name or 'http://placehold.it/350x150'
  #file path and/or name eg. styles / prod/styles
  width = options.hash.width or '650'
  height = options.hash.height or '280'
  if !config.assetHash
    config.set assetHash: generateAssetHash()
  #change file path to dev directory
  link = '<img class="materialboxed ' + cls + '" width="' + width + '" height="' + height + '" data-original="' + src + '">'
  new (hbs.SafeString)(link)

module.exports = lazy