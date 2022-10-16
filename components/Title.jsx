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
      <h1 className="font-medium text-2xl xl:text-4xl">
        Hi, I`m <span className="text-action ">Oleksandr Lysakov</span>
      </h1>
      <p className="text-sm mb-4">a Frontend focused Web Developer</p>
      <Link href="#projects">
        <a
          className="cursor-pointer text-action border-b border-action ml-4
            scroll-smooth"
        >
          View Projects
        </a>
      </Link>
    </div>
  );
};
export default Title;
