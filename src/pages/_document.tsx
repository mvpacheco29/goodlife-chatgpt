import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Headers de segurança */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline'; connect-src *;"
        />
        <meta
          httpEquiv="Strict-Transport-Security"
          content="max-age=63072000; includeSubDomains; preload"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
