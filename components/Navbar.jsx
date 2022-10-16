import Link from 'next/link';
import {useNavContext} from '../context/NavbarContext';
import navData from '../public/data/navigation';

const Navbar = () => {
  const {menuOpen, setMenuOpen} = useNavContext();
  const navElements = navData.map((navElement, index) => {
    return (
      <Link href={navElement.src} key={index}>
        <a
          className="text-action uppercase font-semibold z-30"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {navElement.title}
        </a>
      </Link>
    );
  });
  return (
    <nav
      className={`h-screen
       transition-all duration-1000 absolute top-32 left-0 right-0 z-10
      ${!menuOpen ? '-translate-y-2full' : 'translate-y-0'}`}
    >
      <ul className="flex flex-col items-center gap-10">{navElements}</ul>
    </nav>
  );
};
export default Navbar;
