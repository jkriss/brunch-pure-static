var express = require('express')
var compression = require('compression')
var serveStatic = require('serve-static')
var Path = require('path');
var fs = require('fs');
var isGzip = require('is-gzip-file');
var app = express();

module.exports = function(port, path, callback) {

  app.use(compression());
  app.use(serveStatic(path, {
    extensions: ['html'],
    setHeaders: setHeaders
  }))

  function setHeaders(res, path) {
    if (Path.extname(path) === '') {
      res.setHeader('Content-Type', 'text/html')
    }
    // if it's fingerprinted, use that as the etag
    if (Path.basename(path).match(/[0-9a-f]{32}-/)) {
      var hash = Path.basename(path).split('-')[0];
      res.setHeader('Etag', '"'+hash+'"');
      res.setHeader('Cache-Control', 'public, max-age=2592000'); // 1 month
    }
    // if it's already a gzip file then say so
    console.log("is", path, "gzipped?", isGzip(path))
    if (isGzip(path)) {
      res.setHeader('Content-Encoding', 'gzip')
    }
  }

  app.listen(port, callback);
  console.log(`Brunch development server running at http://localhost:${port}`);
  return app;
}
