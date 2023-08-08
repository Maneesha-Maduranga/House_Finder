import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { BiSearch, BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { Spin as Hamburger } from 'hamburger-react';

//Components
import SearchSection from './SearchSection';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [searchSection, setSearchSection] = useState(false);

  function handleNavBar() {
    setNav(!nav);
  }

  function handleSearchSection() {
    setSearchSection(!searchSection);
  }

  return (
    <>
      <div className='w-full bg-slate-50 fixed top-0 shadow-md z-20'>
        <nav className='h-24 py-8  flex items-center justify-around font-semibold tracking-wide '>
          <div className='block cursor-pointer lg:hidden '>
            <Hamburger toggled={nav} toggle={handleNavBar} size={25} />
          </div>

          <h1 className='text-3xl tracking-wide '>
            Home<span className='text-green-500'>Finder</span>
          </h1>
          <div className='hidden text-lg lg:flex gap-10'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-green-500 '
                  : 'cursor-pointer hover:border-b-2 border-green-500'
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-green-500'
                  : 'cursor-pointer hover:border-b-2 border-green-500'
              }
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-green-500 '
                  : 'cursor-pointer hover:border-b-2 border-green-500'
              }
              to='/property'
            >
              Property
            </NavLink>
          </div>
          <div className='cursor-pointer'>
            <BiSearch size={28} onClick={handleSearchSection} />
          </div>
        </nav>
        {/* Mobile Navbar */}
        <div
          className={
            nav
              ? 'flex flex-col  w-full  h-40 px-10  tracking-widest  uppercase divide-y divide-green-400 opacity-90 gap-5'
              : 'hidden'
          }
        >
          <NavLink className='cursor-pointer hover:text-green-400'>
            Home
          </NavLink>
          <NavLink className='cursor-pointer  hover:text-green-400'>
            About
          </NavLink>
          <NavLink
            className='cursor-pointer  hover:text-green-400'
            to='/property'
          >
            Property
          </NavLink>
        </div>
      </div>
      {/* SearchBar */}
      <div
        className={
          searchSection
            ? `fixed top-0 right-0 h-full w-full md:w-1/2  overflow-y-auto shadow-xl bg-white z-20 ease-in-out duration-1000`
            : `bg-white z-20 ease-in-out duration-100 fixed  top-0 right-[-100%]`
        }
      >
        <SearchSection handleSearchSection={handleSearchSection} />
      </div>
    </>
  );
}

export default Navbar;
