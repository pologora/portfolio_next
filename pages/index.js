import Head from 'next/head';
import {useEffect, useState} from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';
import Projects from '../components/Projects';
import ScrollToTopButton from '../components/ScrollToTopButton';
import {useNavContext} from '../context/NavbarContext';

export default function Home() {
  const {menuOpen} = useNavContext();
  const [darkMode, setDarkMode] = useState(true);

  const darkModeToggle = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`${menuOpen && 'fixed top-0 left-0 right-0'}`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Oleksandr Lysakov Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:text-primaryDark">
        <LandingPage darkModeToggle={darkModeToggle} darkMode={darkMode} />
        <Projects />
        <About />
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </main>
    </div>
  );
}
