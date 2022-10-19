import '../styles/globals.css';
import '../styles/fireflies.css';
import '../styles/animatedToggle.css';
import {NavbarContextWraper} from '../context/NavbarContext';
import Layout from '../components/Layout';

function MyApp({Component, pageProps}) {
  return (
    <NavbarContextWraper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NavbarContextWraper>
  );
}

export default MyApp;
