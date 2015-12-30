# brunch-pure-static

A [brunch](http://brunch.io/) skeleton with:

- static pre-rendering of pages using Handlebars
- Babel ES2015 preprocessing
- [Pure.css](http://purecss.io/)

## Getting started

Install Brunch if you haven't already:

`npm install -g brunch`

Start a new Brunch project using this skeleton:

`brunch new -s gh:jkriss/brunch-pure-static`

Start a development server and watch for changes:

`brunch watch`

The server will start at the first open port starting at 3000.

## Development server

The server will automatically look for files with an `.html` suffix.
This means you can use paths like `/about` in your pages, and it will load
`about.html`.

This is handy if you deploy to S3 with stripped suffixes.
