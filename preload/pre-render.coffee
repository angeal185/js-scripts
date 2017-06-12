app = 
  searchUniqueWithLimit: (selector, limit) ->
    # returns an array for selector
    hrefs = $(selector).map((index, domElement) ->
      $(this).attr 'href'
    )
    # returns the array of hrefs without duplicates
    $.unique(hrefs).slice 0, if limit then limit else 5
  addLinkTags: (selector, type, limit) ->
    # for each searchUniqueWithLimit(jquery selector, seach limit) ...
    self = this
    @searchUniqueWithLimit(selector, limit).each (index, Element) ->
      # check for array and create link element
      if $.isArray(type)
        $.map type, (Type, index) ->
          self.addLinkToHead Type, Element
          return
      else
        self.addLinkToHead type, Element
      return
    return
  addLinkToHead: (type, Element) ->
    console.log $('<link />',
      rel: type
      href: Element)
    $('<link />',
      rel: type
      href: Element).appendTo 'head'
    return
#add five pages for prefetch to head
app.addLinkTags 'a.prefetch', 'prefetch'
#prefetch google.com
app.addLinkToHead 'prefetch', 'http://www.google.com'
#prerender  first link on page with class prerender
app.addLinkTags 'a.prerender', 'prerender', 1
#prerender google.com
app.addLinkToHead 'prerender', 'http://www.google.com'
#load first three pages in backgroud, with class preload
app.addLinkTags 'a.preload', [
  'prefetch'
  'prerender'
], 3