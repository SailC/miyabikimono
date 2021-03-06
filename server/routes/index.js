import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../../src/App';

/* GET home page. */
var router = express.Router();
var appHtml;
router.get('/', function(req, res, next) {
  const context = {};
  try {
    appHtml = ReactDOMServer.renderToString(
      <StaticRouter location={req.originalUrl} context={context}>
        <App />
      </StaticRouter>
    );
  } catch (e) {
    console.log(e);
  }

  res.set({ 'content-type': 'text/html; charset=utf-8' });

  try {
    if (context.url) {
      res.writeHead(301, {
        Location: context.url
      });
      res.end();
    } else {
      res.write(renderPage(appHtml));
      res.end();
    }
  } catch (e) {
    console.log(e);
  }
  // res.sendFile(path.join(__dirname, '/../../public/index.html'))
});

function renderPage(appHtml) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="江户和装工房~雅 是浅草知名的和服租赁店，这里提供最地道的和服着装，最贴心的服务团队，最专业的化妆师和摄影师。希望大家可以在这里留下美好的回忆。" />
        <meta name="keywords" content="浅草,和服,著物,出租,租借,浴衣,KIMONO,和服租赁,摄影，化妆，MIYABI,振袖,煙火,花火,和服外拍,和服推荐,櫻花,賞櫻,賞楓,楓葉,兒童和服,髮型,夢館,浅草寺" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hefumiyabi.com" />
        <meta property="og:title" content="江户和装工坊~雅 - 浅草和服租赁 Miyabi Kimono Rental in Asakusa" />
        <meta property="og:description" content="江户和装工房~雅 是浅草知名的和服租赁店，这里提供最地道的和服着装，最贴心的服务团队，最专业的化妆师和摄影师。希望大家可以在这里留下美好的回忆。" />
        <meta property="og:site_name" content="江户和装工房~雅" />
        <meta property="og:image" content="https://hefumiyabi.com/images/cover.jpg" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>江户和装工房雅 - 浅草和服租赁</title>
        <link rel="shortcut icon" type="image/png" href="/images/logo1.png"/>
        <link rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel='stylesheet' href='/main.css' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css' />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/space10-community/conversational-form@0.9.80/dist/conversational-form.min.js' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/wallop/2.4.1/css/wallop.min.css' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/wallop/2.4.1/css/wallop--fade.min.css' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/wallop/2.4.1/css/wallop--slide.min.css' />
        <link href='https://fonts.googleapis.com/css?family=Yeon+Sung' rel='stylesheet'>
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-100094140-1', 'auto');
          ga('send', 'pageview');
        </script>
        <script type='application/ld+json'>
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "url": "https://hefumiyabi.com",
            "logo": "https://hefumiyabi.com/images/logo1.png",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+81-03-6802-3566",
              "contactType": "customer service"
            }]
          }
        </script>
      </head>

      <body>

        <script>
          window.fbAsyncInit = function() {
            FB.init({
              appId      : '443330156103640',
              cookie     : true,
              xfbml      : true,
              version    : 'v2.12'
            });

            FB.AppEvents.logPageView();

          };

          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = "https://connect.facebook.net/en_US/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));
        </script>

        <div id="app" itemscope="" itemtype="http://schema.org/WebPage">${appHtml}</div>
        <script src="https://cf-4053.kxcdn.com/conversational-form/0.9.6/conversational-form.min.js"></script>
        <script src="/bundle.js"></script>
        <script src="https://fast.wistia.com/embed/medias/phknks26n7.jsonp" async></script>
        <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
      </body>
    </html>
   `;
}

module.exports = router;
