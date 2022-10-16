import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';
import Projects from '../components/Projects';
import ScrollToTopButton from '../components/ScrollToTopButton';
import {useNavContext} from '../context/NavbarContext';

export default function Home() {
  const {menuOpen} = useNavContext();

  return (
    <div className={`${menuOpen && 'fixed top-0 left-0 right-0'}`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Oleksandr Lysakov Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='text-primary'>
        <LandingPage />
        <Projects />
        <About />
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </main>
    </div>
  );
}
