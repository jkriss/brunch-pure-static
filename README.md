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

`brunch watch --server`

Load it up at [http://localhost:3333](http://localhost:3333).

## Development server

The server will automatically look for files with an `.html` suffix.
This means you can use paths like `/about` in your pages, and it will load
`about.html`.

This is handy if you deploy to S3 with stripped suffixes.

## Building for production

If you use the `--production` flag with `brunch build` or `brunch watch`,
the brunch-static-tools plugin will run, and will do the following:

- generate fingerprints for your static asset
- strip .html from your html file names
- rewrite your html pages to use the new asset and html files paths
- gzip everything

This will set you up for deploying to S3, but don't forget to set the
'Content-Type' and 'Content-Encoding' headers accordingly.

## Deploying to S3

If you want to get fancy, set up an S3 bucket for website hosting, then change
the following line in `package.json` to match your S3 bucket name:

`"_s3BucketName" : "example-brunch-static-site",`

Once you've done this, you can run `npm run deploy` to build for production and
upload to S3 in one shot. The Content-Type and Content-Encoding headers will be
set appropriately.
