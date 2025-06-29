import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <title>GoodLife Corretora de Seguros</title>
        <meta
          name="description"
          content="Seguro de Vida, Seguro Viagem e Plano Odontológico com atendimento digital e consultoria especializada. Proteja o que importa!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph */}
        <meta property="og:title" content="GoodLife Corretora de Seguros" />
        <meta
          property="og:description"
          content="Seguro de Vida, Seguro Viagem e Plano Odontológico com atendimento digital e consultoria especializada."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.seusite.com.br" />
        <meta property="og:image" content="/og-image.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GoodLife Corretora de Seguros" />
        <meta
          name="twitter:description"
          content="Seguro de Vida, Seguro Viagem e Plano Odontológico com atendimento digital e consultoria especializada."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
        {/* JSON-LD Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GoodLife Corretora de Seguros",
              url: "https://www.seusite.com.br",
              logo: "/og-image.jpg",
              sameAs: [
                "https://instagram.com/goodlife",
                "https://wa.me/5511999999999",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+55-11-99999-9999",
                  contactType: "customer service",
                  areaServed: "BR",
                  availableLanguage: ["Portuguese"],
                },
              ],
            }),
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `,
          }}
        />
        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `,
          }}
        />
        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'XXXXXXXXXXXXXXX');
          fbq('track', 'PageView');
        `,
          }}
        />
        {/* Google Ads Conversion */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-XXXXXXXXXX');
        `,
          }}
        />
      </Head>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
