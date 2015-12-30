var express = require('express')
var compression = require('compression')
var serveStatic = require('serve-static')
var Path = require('path');
var readChunk = require('read-chunk');
var GzipMagic = new Buffer([0x1f, 0x8b]); // gzip files start with this
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
    // if it's already a gzip file (based on magic number) then say so
    var magicNumber = readChunk.sync(path, 0, 2);
    if (magicNumber.equals(GzipMagic)) {
      res.setHeader('Content-Encoding', 'gzip')
    }
  }

  app.listen(port, callback);
  console.log(`Brunch development server running at http://localhost:${port}`);
  return app;
}
