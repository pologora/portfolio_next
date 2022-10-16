import Logo from './Logo';
import {AiOutlineMenu} from 'react-icons/ai';
import {IoMdClose} from 'react-icons/io';
import {useNavContext} from '../context/NavbarContext';

const Header = ({darkModeToggle, darkMode}) => {
  const {menuOpen, setMenuOpen} = useNavContext();
  return (
    <header
      id="home"
      className={`flex justify-between items-center px-4 py-2
       top-0 left-0 right-0`}
    >
      <Logo darkMode={darkMode}/>
      <div className="flex gap-4 items-center">
        <input
          className="toggle"
          type="checkbox"
          checked={darkMode}
          onChange={darkModeToggle}
        />
        <div
          className="text-action text-3xl cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <IoMdClose /> : <AiOutlineMenu />}
        </div>
      </div>
    </header>
  );
};
export default Header;
