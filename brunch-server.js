var express = require('express')
var compression = require('compression')
var serveStatic = require('serve-static')
var op = require('openport');

var app = express();

app.use(compression());
app.use(serveStatic('public', {
  extensions: ['html']
}))

op.find({ startingPort: 3000, endingPort: 3999 }, function(err, port) {
    if(err) { console.log(err); return; }
    app.listen(port);
    console.log(`Brunch development server running at http://localhost:${port}`)
  }
);
