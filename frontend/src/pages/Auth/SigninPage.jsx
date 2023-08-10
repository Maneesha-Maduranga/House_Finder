import { useState } from 'react';
import { Link } from 'react-router-dom';

//Redux
import { useSignINMutation } from '../../features/Rtk/authApiSlice';

function SigninPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signIN] = useSignINMutation();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await signIN({ email, password });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container mx-auto py-20 my-10 px-10'>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg text-center'>
          <h1 className='text-2xl font-bold sm:text-3xl'>Get started today!</h1>
        </div>

        <form
          className='mx-auto mb-0 mt-8 max-w-md space-y-4'
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>

            <div className='relative'>
              <input
                type='email'
                className='w-full rounded-lg border-gray-200 border-2 p-4 pe-12 text-sm shadow-sm'
                placeholder='Enter email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor='password' className='sr-only'>
              Password
            </label>

            <div className='relative'>
              <input
                type='password'
                className='w-full rounded-lg border-gray-200 border-2 p-4 pe-12 text-sm shadow-sm'
                placeholder='Enter password'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <p className='text-sm text-gray-500'>
              No account?
              <Link className='underline' to='/signup'>
                Sign up
              </Link>
            </p>

            <button
              type='submit'
              className='inline-block rounded-lg bg-green-400 px-5 py-3 text-sm font-medium text-white'
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SigninPage;
