import { Inter } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "/styles/globals.css";

const inter = Inter();

export default function App({ Component, pageProps, router }) {
 return (
  <>
    <main className={inter.className}>
     <Component {...pageProps} key={router.route} />
     <Analytics />
    </main>
  </>
 );
}