import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from 'react-icons/hi2';
import logo from './../assets/images/logo.png';
import { Theme } from '../utils/constants';

const Header = ({ theme, setTheme }) => {
  return (
    <div className="flex items-center p-3 w-full gap-2">
      <img src={logo} alt="Logo" className="w-10" />
      <div className="flex bg-slate-200 p-2 items-center rounded-full gap-2 grow">
        <HiOutlineMagnifyingGlass className="text-black" />
        <input
          type="text"
          className="bg-transparent outline-none text-black w-full"
          placeholder="Search Games"
        />
      </div>
      <div>
        {theme === Theme.light ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme(Theme.dark);
            }}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme(Theme.light);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
