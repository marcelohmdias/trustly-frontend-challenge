import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from './../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=no"
        />
        <title>Trustly Front-End Challenge</title>
        <link
          rel="icon"
          href="https://www.trustly.net/static/favicon/32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="https://www.trustly.net/static/favicon/128x128.png"
          sizes="128x128"
        />
        <link
          rel="shortcut icon"
          href="https://www.trustly.net/static/favicon/196x196.png"
          sizes="196x196"
        />
        <link
          rel="apple-touch-icon"
          href="https://www.trustly.net/static/favicon/180x180.png"
          sizes="180x180"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
