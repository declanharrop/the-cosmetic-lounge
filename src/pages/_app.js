import Head from 'next/head';
import Header from '../Components/Header/Header';
import { PageProvider } from '../Context/PageContext';
import GlobalStyle from '../styles/Global.styles';
import Typography from '../styles/Typography.styles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Cosmetic Lounge</title>
      </Head>
      <Typography />
      <GlobalStyle />
      <PageProvider>
        <Header />
        <Component {...pageProps} />
      </PageProvider>
    </>
  );
}

export default MyApp;
