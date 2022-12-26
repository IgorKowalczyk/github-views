import Head from "next/head";
import { Inter } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "/styles/globals.css";

const inter = Inter();

export default function App({ Component, pageProps, router }) {
 return (
  <>
   <Head>
    <title>Profile Views - Create your own badges</title>
   </Head>
   <main className={inter.className}>
    <Component {...pageProps} key={router.route} />
    <Analytics />
   </main>
  </>
 );
}
