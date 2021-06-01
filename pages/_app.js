import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import GlobalStyle from '../src/theme/GlobalStyle';
import theme from '../src/theme/theme';
import PageTemplate from '../src/components/shared/PageTemplate';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="IcZripUzDXho7MJPBqpU1Io3FLgddIDA1sPRo0UyPxE"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <PageTemplate>
          <Component {...pageProps} />
        </PageTemplate>
      </ThemeProvider>
    </>
  );
}
