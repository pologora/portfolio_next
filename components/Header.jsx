import Logo from './Logo';
import {AiOutlineMenu} from 'react-icons/ai';
import {IoMdClose} from 'react-icons/io';
import {useNavContext} from '../context/NavbarContext';

const Header = () => {
  const {menuOpen, setMenuOpen} = useNavContext();
  return (
    <header className="flex justify-between items-center px-4 py-2">
      <Logo />
      <div
        className="text-action text-3xl cursor-pointer"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <IoMdClose /> : <AiOutlineMenu />}
      </div>
    </header>
  );
};
export default Header;
