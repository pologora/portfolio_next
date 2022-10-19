import Link from 'next/link';
import {useNavContext} from '../context/NavbarContext';
import navData from '../public/data/navigation';

const Navbar = () => {
  const {menuOpen, setMenuOpen} = useNavContext();
  const navElements = navData.map((navElement, index) => {
    return (
      <Link href={navElement.src} key={index}>
        <a
          className="hover:text-action hover:border-b-action
          border-b-transparent hover:opacity-100
          border-b-2
          opacity-90 tracking-wider
          uppercase font-semibold z-30 sm:text-xs"
          onClick={() => setMenuOpen(false)}
        >
          {navElement.title}
        </a>
      </Link>
    );
  });
  return (
    <nav
      className={`h-screen pr-4
       transition-all duration-1000 absolute top-32 left-0 right-0 z-10
      ${!menuOpen ? '-translate-y-2full' : 'translate-y-0'} sm:h-auto 
      sm:static sm:translate-y-0 items-center sm:flex`}
    >
      <ul
        className="flex flex-col items-center gap-10
      sm:flex-row"
      >
        {navElements}
      </ul>
    </nav>
  );
};
export default Navbar;
