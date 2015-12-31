module.exports = config:
  server:
    path: 'node_modules/brunch-static-tools/brunch-server'
  files:
    javascripts: joinTo: 'app.js'
    stylesheets: joinTo:
      'app.css' : ['app/styles/main.scss']
  plugins:
    static:
      processors: [
        require('react-brunch-static') {
          layout: 'app/layouts/main.static.hbs'
        }
        require('html-brunch-static') {
          handlebars:
            enableProcessor: true
          defaultContext:
            _options:
              layout: 'app/layouts/main.static.hbs'
        }
      ]
    babel:
      presets: ['es2015', 'react']
