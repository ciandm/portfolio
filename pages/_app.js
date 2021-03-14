import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import * as gtag from '../lib/gtag';
import GlobalStyle from '../src/theme/GlobalStyle';
import theme from '../src/theme/theme';
import PageTemplate from '../src/components/shared/PageTemplate';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
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
