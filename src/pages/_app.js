import Head from 'next/head';
import Header from '../Components/Header/Header';
import { PageProvider } from '../Context/PageContext';
import GlobalStyle from '../styles/Global.styles';
import Typography from '../styles/Typography.styles';
import Footer from '../Components/Footer/Footer';

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
        <Footer />
      </PageProvider>
    </>
  );
}

export default MyApp;
