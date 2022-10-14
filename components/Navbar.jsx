import Link from 'next/link';
import {useNavContext} from '../context/NavbarContext';
import navData from '../public/data/navigation';

const Navbar = () => {
  const {menuOpen} = useNavContext();
  const navElements = navData.map((navElement, index) => {
    return (
      <Link href={navElement.src} key={index}>
        <a className="text-action uppercase">{navElement.title}</a>
      </Link>
    );
  });
  return (
    <nav className={`pt-10 h-screen ${!menuOpen && 'hidden'}`}>
      <ul className="flex flex-col items-center gap-10">{navElements}</ul>
    </nav>
  );
};
export default Navbar;
