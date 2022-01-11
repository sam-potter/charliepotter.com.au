import Document, { Head, Html, Main, NextScript } from 'next/document';
const isDev = process.env.NODE_ENV === 'development';

export default class NextSite extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="language" content="en" />
          <meta name="author" content="Sam Potter" />
          <meta name="robots" content="follow, all" />
          <link rel="canonical" href="http://charliepotter.com.au/" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta property="og:url" content="http://www.charliepotter.com.au/" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Charlie Potter Portfolio | Actor, Director" />
          <meta property="og:site_name" content="Charlie Potter Portfolio | Actor, Director" />
          <link as="font" rel="preload" type="font/woff2" crossOrigin="anonymous" href="/fonts/inter-var-latin.woff2" />
          <meta
            property="og:description"
            content="Charlie Potter is a Melbourne born actor and media creator. Armed with a sensitive soul and an electric energy, he’s your friendly Sydney-based teenager. Between acting studies and training Charlie’s exploring new angles and ideas with his camera, and continuing his growth in storytelling."
          />
          <meta
            name="description"
            content="Charlie Potter is a Melbourne born actor and media creator. Armed with a sensitive soul and an electric energy, he’s your friendly Sydney-based teenager. Between acting studies and training Charlie’s exploring new angles and ideas with his camera, and continuing his growth in storytelling."
          />
          <meta
            name="keywords"
            content="Charlie Potter, Charlie Potter Melbourne, Charlie Potter Actor, Charlie Potter Director"
          />
        </Head>

        <body className="overflow-y-scroll bg-slate-200">
          <Main />
          <NextScript />

          {!isDev && <script async data-api="/_hive" src="/bee.js"></script>}
        </body>
      </Html>
    );
  }
}
