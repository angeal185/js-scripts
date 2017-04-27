###wait###

window.onload = ->
  preloadImages = undefined

  preloadImages = (array) ->
    i = undefined
    img = undefined
    list = undefined
    if !preloadImages.list
      preloadImages.list = []
    list = preloadImages.list
    i = 0
    while i < array.length
      img = new Image

      img.onload = ->
        index = undefined
        index = list.indexOf(this)
        if index != -1
          list.splice index, 1
        return

      list.push img
      img.src = array[i]
      i++
    return

  preloadImages [
    'url1.jpg'
    'url2.jpg'
    'url3.jpg'
  ]
  return
  
###wait###

###wait ###

window.onload = ->
  preloadImages = undefined

  preloadImages = (array, waitForOtherResources, timeout) ->
    imgs = undefined
    list = undefined
    loadNow = undefined
    loaded = undefined
    t = undefined
    timer = undefined
    loaded = false
    list = preloadImages.list
    imgs = array.slice(0)
    t = timeout or 15 * 1000
    timer = undefined

    loadNow = ->
      i = undefined
      img = undefined
      if !loaded
        loaded = true
        i = 0
        while i < imgs.length
          img = new Image
          img.onload = img.onerror =
          img.onabort = ->
            index = undefined
            index = list.indexOf(this)
            if index != -1
              list.splice index, 1
            return

          list.push img
          img.src = imgs[i]
          i++
      return

    if !preloadImages.list
      preloadImages.list = []
    if !waitForOtherResources or document.readyState == 'complete'
      loadNow()
    else
      window.addEventListener 'load', ->
        clearTimeout timer
        loadNow()
        return
      timer = setTimeout(loadNow, t)
    return

  preloadImages [
    'url1.jpg'
    'url2.jpg'
    'url3.jpg'
  ], true
  preloadImages [
    'url99.jpg'
    'url98.jpg'
  ], true
  return