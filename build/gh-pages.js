var ghpages = require('gh-pages')
var path = require('path')

ghpages.publish('gh-pages', function (err) {
    if (err) throw err
})
