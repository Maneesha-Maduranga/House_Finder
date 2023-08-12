import { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';

//Hook Form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//redux
import { useResetPasswordMutation } from '../../features/Rtk/authApiSlice';

//Toast
import toast from 'react-hot-toast';

//Components
import Aleart from '../../components/Aleart';

const schema = yup
  .object({
    password: yup.string().required().min(6),
    confirmPassword: yup.string().required(),
  })
  .required();

function ResetPasswordPage() {
  let [searchParams, setSearchParams] = useSearchParams();
  let [sucess, setSucess] = useState(false);
  let token = searchParams.get('token');
  let email = searchParams.get('email');

  let navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [resetPassword] = useResetPasswordMutation();

  //Navigate User to Sign in
  useEffect(() => {
    if (sucess) {
      setTimeout(() => {
        navigate('/signin');
      }, 10000);
    }
  }, [sucess, navigate]);

  async function onSubmit(values) {
    if (values.password !== values.confirmPassword) {
      return toast.error('Password Confirmation Failed');
    }
    try {
      const { error } = await resetPassword({
        email: email,
        token: token,
        password: values.password,
      });

      if (error) {
        return toast.error(error.data.error);
      }
      toast('Password Updated', {
        icon: '🎉',
      });
      setSucess(true);
    } catch (er) {
      toast.error('Please Try Again');
    }
  }

  return (
    <div className='container mx-auto py-20 my-10 px-10'>
      {!sucess ? (
        <div className='mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-lg'>
            <h1 className='text-center text-2xl font-bold text-green-400 sm:text-3xl'>
              Reset Password
            </h1>

            <form
              className='mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>

                <div className='relative'>
                  <input
                    type='password'
                    className='w-full rounded-lg border-gray-200 border-2 p-2 md:p-4 pe-12 text-sm shadow-sm'
                    placeholder='Enter New Password'
                    {...register('password')}
                  />
                  <p className='text-sm text-red-500'>
                    {errors.password?.message}
                  </p>
                </div>
              </div>
              <div>
                <label htmlFor='confirm password' className='sr-only'>
                  Confirm Password
                </label>

                <div className='relative'>
                  <input
                    type='password'
                    className='w-full rounded-lg border-gray-200 border-2  p-2 md:p-4 pe-12 text-sm shadow-sm'
                    placeholder='Confirm New Password'
                    {...register('confirmPassword')}
                  />
                  <p className='text-sm text-red-500'>
                    {errors.confirmPassword?.message}
                  </p>
                </div>
              </div>

              <button
                type='submit'
                className='block w-full rounded-lg bg-green-400  px-5 py-3 text-sm font-medium text-white'
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      ) : (
        <Aleart
          title='Password Updated'
          message='Password Updated Suceefully 😎, Redirect To Sign in Page'
          color='blue-500'
        />
      )}
    </div>
  );
}

export default ResetPasswordPage;
