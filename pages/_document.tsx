import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <script
            async
            defer
            data-website-id='e641a06f-ea57-4937-b162-2a56944ddf34'
            src='https://umami-snowy-iota.vercel.app/umami.js'
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
