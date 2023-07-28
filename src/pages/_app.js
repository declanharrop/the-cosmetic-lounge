import Head from 'next/head';
import Header from '../Components/Header/Header';
import { PageProvider } from '../Context/PageContext';
import GlobalStyle from '../styles/Global.styles';
import Typography from '../styles/Typography.styles';

import Footer from '../Components/Footer/Footer';
import PageWarning from '../Components/PageWarning';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Cosmetic Lounge</title>
      </Head>
      <Typography />
      <GlobalStyle />
      <PageProvider>
        {/* <PageWarning> */}
        <Header />
        <Component {...pageProps} />
        <Footer />
        {/* </PageWarning> */}
      </PageProvider>
    </>
  );
}

export default MyApp;
