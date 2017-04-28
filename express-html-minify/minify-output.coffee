### ghost/core/server/middleware ###

Minifier = require('html-minifier')
module.exports =
exports = (req, res, next) ->
  res.oldRender = res.render

  res.render = (view, options) ->
    @oldRender view, options, (err, html) ->
      if err
        throw err
      html = Minifier.minify(html,
        caseSensitive: false
        removeComments: true
        removeCommentsFromCDATA: true
        collapseWhitespace: true
        collapseInlineTagWhitespace: true
        collapseBooleanAttributes: true
        removeAttributeQuotes: true
        removeEmptyAttributes: true
        minifyJS: true
        minifyCSS: true
        removeScriptTypeAttributes: false
        removeStyleLinkTypeAttributes: false
        sortClassName: false
        sortAttributes: false)
      res.send html
      return
    return

  next()
  return