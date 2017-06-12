var app;

app = {
  searchUniqueWithLimit: function(selector, limit) {
    var hrefs;
    hrefs = $(selector).map(function(index, domElement) {
      return $(this).attr('href');
    });
    return $.unique(hrefs).slice(0, limit ? limit : 5);
  },
  addLinkTags: function(selector, type, limit) {
    var self;
    self = this;
    this.searchUniqueWithLimit(selector, limit).each(function(index, Element) {
      if ($.isArray(type)) {
        $.map(type, function(Type, index) {
          self.addLinkToHead(Type, Element);
        });
      } else {
        self.addLinkToHead(type, Element);
      }
    });
  },
  addLinkToHead: function(type, Element) {
    console.log($('<link />', {
      rel: type,
      href: Element
    }));
    $('<link />', {
      rel: type,
      href: Element
    }).appendTo('head');
  }
};

app.addLinkTags('a.prefetch', 'prefetch');

app.addLinkToHead('prefetch', 'http://www.google.com');

app.addLinkTags('a.prerender', 'prerender', 1);

app.addLinkToHead('prerender', 'http://www.google.com');

app.addLinkTags('a.preload', ['prefetch', 'prerender'], 3);