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
    <meta name="msapplication-TileColor" content="#091430" />
    <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
    <meta name="theme-color" content="#091430" />
    <meta name="description" content="Create your own badges for your GitHub profile." />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Profile Views" />
    <meta property="og:title" content="Profile Views - Create your own badges" />
    <meta property="og:description" content="Create your own badges for your GitHub profile." />
    <meta property="og:url" content="https://views.igorkowalczyk.dev" />
    <meta property="og:image" content="https://views.igorkowalczyk.dev/og-image.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://views.igorkowalczyk.dev" />
    <meta property="twitter:title" content="Profile Views - Create your own badges" />
    <meta property="twitter:description" content="Create your own badges for your GitHub profile." />
    <meta property="twitter:image" content="https://views.igorkowalczyk.dev/og-image.png" />
    <meta property="twitter:creator" content="@igorkowalczyk" />
   </Head>
   <body>
    <Main {...props} />
    <NextScript />
   </body>
  </Html>
 );
}
