import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from '../../src/App'

/* GET home page. */
var router = express.Router()
router.get('*', function (req, res, next) {
  const context = {}
  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
      >
      <App />
    </StaticRouter>
  )

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(renderPage(appHtml))
    res.end()
  }
  // res.sendFile(path.join(__dirname, '/../../public/index.html'))
})

function renderPage (appHtml) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width">
        <title>江户和装工房雅 - 浅草和服租赁</title>
        <link rel="shortcut icon" type="image/png" href="/images/logo1.png"/>
        <link rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel='stylesheet' href='/main.css' />
        <link rel='stylesheet' href='/conversational-form.min.css' />
        <link rel='stylesheet' href='/wallop.css' />
        <link rel='stylesheet' href='/wallop--fade.css' />
        <link rel='stylesheet' href='/wallop--slide.css' />
        <link rel='stylesheet' href='/wallop--rotate.css' />
        <link rel='stylesheet' href='/wallop--scale.css' />
        <link rel='stylesheet' href='/wallop--fold.css' />
        <link rel='stylesheet' href='/wallop--vertical-slide.css' />
      </head>

      <body>
        <div id=app>${appHtml}</div>
        <script src="/conversational-form.min.js"></script>
        <script src="/bundle.js"></script>
        <script src="https://fast.wistia.com/embed/medias/phknks26n7.jsonp" async></script>
        <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
      </body>
    </html>
   `
}

module.exports = router
