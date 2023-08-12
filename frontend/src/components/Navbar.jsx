import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Spin as Hamburger } from 'hamburger-react';

function Navbar() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  function handleNavBar() {
    setNav(!nav);
  }

  function handleNavigate() {
    navigate('/signin?redirect=/add-property');
  }

  return (
    <>
      <div className='w-full bg-slate-50  fixed top-0 shadow-sm z-20'>
        <nav className='h-24 py-8  flex items-center justify-around font-semibold tracking-wide '>
          <h1 className='text-3xl tracking-wide '>
            Home<span className='text-green-500'>Finder</span>
          </h1>
          <div className='block cursor-pointer lg:hidden '>
            <Hamburger toggled={nav} toggle={handleNavBar} size={25} />
          </div>
          <div className='hidden text-base lg:flex gap-10'>
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
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-green-500 '
                  : 'cursor-pointer hover:border-b-2 border-green-500'
              }
              to='/property'
            >
              Property
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-green-500 '
                  : 'cursor-pointer hover:border-b-2 border-green-500'
              }
              to='/signin'
            >
              Sign in
            </NavLink>
            <button className='p-2 bg-green-400' onClick={handleNavigate}>
              + <span className='font-thin text-base'>Post your Ad</span>
            </button>
          </div>
        </nav>
        {/* Mobile Navbar */}
        <div
          className={
            nav
              ? 'flex flex-col  w-full py-2 h-full px-10  tracking-widest  uppercase divide-y divide-green-400 opacity-90 gap-5 shadow-md'
              : 'hidden'
          }
        >
          <NavLink className='cursor-pointer py-1 hover:text-green-400'>
            Home
          </NavLink>

          <NavLink
            className='cursor-pointer py-1  hover:text-green-400'
            to='/property'
          >
            Property
          </NavLink>

          <NavLink
            className='cursor-pointer py-1 hover:text-green-400'
            to='/signin'
          >
            SignIn
          </NavLink>
          <button className='p-2 bg-green-400' onClick={handleNavigate}>
            + <span className='font-light'>Post your Ad</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
