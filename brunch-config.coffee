module.exports = config:
  files:
    javascripts: joinTo: 'app.js'
    stylesheets: joinTo:
      'app.css' : ['app/styles/main.scss']
  plugins:
    static:
      processors: [
        require('html-brunch-static') {
          handlebars:
            enableProcessor: true
          defaultContext:
            _options:
              layout: 'app/layouts/main.static.hbs'
        }
      ]
    babel:
      presets: ['es2015']
