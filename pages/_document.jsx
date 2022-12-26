import { Html, Head, Main, NextScript } from "next/document";

export default function Document({ props }) {
 return (
  <Html lang="en">
   <Head>
    <meta name="robots" content="follow, index" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
    <link rel="manifest" href="/favicons/site.webmanifest" />
    <link rel="shortcut icon" href="/favicons/favicon.ico" />
    <meta name="msapplication-TileColor" content="#00aba9" />
    <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
    <meta name="theme-color" content="#000000" />
   </Head>
   <body>
    <Main {...props} />
    <NextScript />
   </body>
  </Html>
 );
}
