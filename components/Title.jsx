import Link from 'next/link';
import {useNavContext} from '../context/NavbarContext';

const Title = () => {
  const {menuOpen} = useNavContext();
  return (
    <div
      className={`absolute top-60 left-10 transition-all
        duration-700 z-0
        ${menuOpen && 'opacity-0'}`}
    >
      <h1
        className="font-medium text-3xl
      xl:text-5xl sm:text-4xl dark:opacity-90"
      >
        Hi, I`m{' '}
        <span className="text-action dark:opacity-100">Oleksandr Lysakov</span>
      </h1>
      <p className="text-sm mb-4 dark:opacity-60 sm:text-base">
        a Frontend focused Web Developer
      </p>
      {/* <Link href="#projects">
        <a
          className="cursor-pointer text-action border-b border-action ml-4
            scroll-smooth opacity-90 font-semibold"
        >
          View Projects
        </a>
      </Link> */}
    </div>
  );
};
export default Title;
