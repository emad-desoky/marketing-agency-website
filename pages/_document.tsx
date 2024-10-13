import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {" "}
      {/* Make sure to specify the language */}
      <Head>
        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Meta tags */}
        <meta charSet="UTF-8" /> {/* Ensures proper encoding */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />{" "}
        {/* For IE compatibility */}
        <meta name="robots" content="index, follow" />{" "}
        {/* Instructs search engines to index */}
        {/* Preload key fonts (if any) for performance */}
        <link
          rel="preload"
          href="/fonts/font-name.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Add default Open Graph image */}
        <meta property="og:image" content="/images/og-default-image.jpg" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
