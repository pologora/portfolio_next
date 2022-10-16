import '../styles/globals.css';
import '../styles/fireflies.css';
import '../styles/animatedToggle.css';
import {NavbarContextWraper} from '../context/NavbarContext';

function MyApp({Component, pageProps}) {
  return (
    <NavbarContextWraper>
      <Component {...pageProps} />
    </NavbarContextWraper>
  );
}

export default MyApp;
