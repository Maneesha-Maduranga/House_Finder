import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//Hambeger
import { Spin as Hamburger } from 'hamburger-react';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../features/userSlice';
import { useSignOutMutation } from '../features/Rtk/authApiSlice';

//Toast
import toast from 'react-hot-toast';

function Navbar() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const [signOut] = useSignOutMutation();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  function handleNavBar() {
    setNav(!nav);
  }

  function handleNavigate() {
    navigate('/signin?redirect=/add-property');
  }

  async function handleSignout() {
    try {
      await signOut().unwrap();
      dispatch(removeUser());
      toast('Sign Out', {
        icon: '🙄',
      });
      navigate('/');
    } catch (error) {
      toast.error('Please  Try again');
      console.log(error);
    }
  }

  return (
    <>
      <div className='w-full bg-slate-50  fixed top-0 shadow-sm z-20'>
        <nav className='h-24 py-8  flex flex-row items-center justify-around font-semibold tracking-wide '>
          <h1 className='text-3xl tracking-wide '>
            Home<span className='text-green-500'>Finder</span>
          </h1>
          <div className='block cursor-pointer lg:hidden '>
            <Hamburger toggled={nav} toggle={handleNavBar} size={25} />
          </div>
          <div className='hidden text-sm lg:flex gap-10'>
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
            {user && (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-2 border-green-500 '
                    : 'cursor-pointer hover:border-b-2 border-green-500'
                }
                to='/dashboard'
              >
                Dashboard
              </NavLink>
            )}
            {!user ? (
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
            ) : (
              <button
                className='p-2 bg-green-300 hover:bg-green-200 text-sm'
                onClick={handleSignout}
              >
                Sign Out
              </button>
            )}

            <button className='p-2 bg-green-300'>
              + <span className='font-thin text-sm'>Post your Ad</span>
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
          {user && (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-green-500 '
                  : 'cursor-pointer hover:border-b-2 border-green-500'
              }
              to='/dashboard'
            >
              Dashboard
            </NavLink>
          )}
          {!user ? (
            <NavLink
              className='cursor-pointer py-1 hover:text-green-400'
              to='/signin'
            >
              SignIn
            </NavLink>
          ) : (
            <button
              className='cursor-pointer py-1 hover:text-green-400'
              onClick={handleSignout}
            >
              SignOut
            </button>
          )}

          <button className='p-2 bg-green-400'>
            + <span className='font-light'>Post your Ad</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
