import { useState } from 'react';
import { Link } from 'react-router-dom';

//redux
import { useForgetPasswordMutation } from '../../features/Rtk/authApiSlice';

//Toast
import toast from 'react-hot-toast';

//Components
import Aleart from '../../components/Aleart';
import LoadingButton from '../../components/LoadingButton';

function ForgetPasswordPage() {
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(true);
  const [loading, setLoding] = useState(false);

  const [forgetPassword] = useForgetPasswordMutation();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) {
      return toast.error('Enter Email');
    }
    try {
      setLoding(true);
      const { data } = await forgetPassword({ email: email });
      setLoding(false);
      if (data) {
        setShow(false);
        return;
      }
    } catch (error) {
      toast.error('somthing Went Wrong');
    }
  }

  return (
    <div className='container mx-auto py-20 my-10 px-10'>
      {show ? (
        <div className='mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-lg'>
            <h1 className='text-center text-2xl font-bold text-green-400 sm:text-3xl'>
              Forgot Password
            </h1>

            <p className='mx-auto mt-4 max-w-md text-center text-gray-500'>
              Enter Your Email Address To Get Password Reset Link
            </p>

            <form
              onSubmit={handleSubmit}
              className='mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'
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
              {!loading ? (
                <button
                  type='submit'
                  className='block w-full rounded-lg bg-green-400  px-5 py-3 text-sm font-medium text-white'
                >
                  Get Password Reset Link
                </button>
              ) : (
                <div className='flex items-center justify-center '>
                  <LoadingButton />
                </div>
              )}

              <p className='text-center text-sm text-gray-500'>
                Already have Account 😎?
                <Link className='underline' to='/signin'>
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      ) : (
        <Aleart
          color='sky-400'
          title='Forgot Password'
          message='Please Check You Email For Password Reset Link'
        />
      )}
    </div>
  );
}

export default ForgetPasswordPage;
