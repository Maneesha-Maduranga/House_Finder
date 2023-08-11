import { Link } from 'react-router-dom';

//Hook Form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//Toast
import { useState } from 'react';
//toast
import toast from 'react-hot-toast';

//redux
import { useSignUpMutation } from '../../features/Rtk/authApiSlice';

//Components
import Aleart from '../../components/Aleart';
import LoadingButton from '../../components/LoadingButton';

const schema = yup
  .object({
    email: yup.string().email().required(),
    username: yup.string().required(),
    password: yup.string().min(6).required(),
    confirmPassword: yup.string().required(),
  })
  .required();

function SignupPage() {
  const [show, setShow] = useState(true);
  const [loading, setLoding] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [signUp] = useSignUpMutation();

  async function onSubmit(values) {
    if (values.password !== values.confirmPassword) {
      return toast.error('Password Confirmation Failed');
    }
    try {
      setLoding(true);

      const { data, error } = await signUp(values);
      setLoding(false);
      if (data) {
        toast('Account Created', {
          icon: '👏',
        });
        reset();
        setShow(false);
        return;
      }
      if (error) {
        return toast.error(error.data.error);
      }
    } catch (error) {
      toast.error('Please Try Again');
    }
  }

  return (
    <div className='container mx-auto py-20 my-10 px-10'>
      {show ? (
        <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-lg text-center'>
            <h1 className='text-2xl font-bold sm:text-3xl'>
              Get started today!
            </h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='mx-auto mb-0 mt-8 max-w-md space-y-4'
          >
            <div>
              <div className='relative'>
                <input
                  type='email'
                  className='w-full rounded-lg border-gray-200 border-2 p-2 md:p-4 pe-12 text-sm shadow-sm'
                  placeholder='Enter Email'
                  {...register('email')}
                />
                <p className='text-sm text-red-500'>{errors.email?.message}</p>
              </div>
            </div>
            <div>
              <div className='relative'>
                <input
                  type='text'
                  className='w-full rounded-lg border-gray-200 border-2 p-2 md:p-4 pe-12 text-sm shadow-sm'
                  placeholder='Enter Username'
                  {...register('username')}
                />
                <p className='text-sm text-red-500'>
                  {errors.username?.message}
                </p>
              </div>
            </div>

            <div>
              <div className='relative'>
                <input
                  type='password'
                  className='w-full rounded-lg border-gray-200 border-2 p-2 md:p-4 pe-12 text-sm shadow-sm'
                  placeholder='Password'
                  {...register('password')}
                />
                <p className='text-sm text-red-500'>
                  {errors.password?.message}
                </p>
              </div>
            </div>
            <div>
              <div className='relative'>
                <input
                  type='password'
                  className='w-full rounded-lg border-gray-200 border-2 p-2 md:p-4 pe-12 text-sm shadow-sm'
                  placeholder='Password'
                  {...register('confirmPassword')}
                />
                <p className='text-sm text-red-500'>
                  {errors.confirmPassword?.message}
                </p>
              </div>
            </div>

            <div className='flex items-center justify-between flex-col md:flex-row gap-2'>
              <p className='text-sm text-gray-500'>
                Already have an account 😎?
                <Link className='underline' to='/signin'>
                  Sign in
                </Link>
              </p>
              {!loading ? (
                <button
                  type='submit'
                  className='inline-block rounded-lg bg-green-400 px-5  py-3 text-sm font-medium text-white'
                >
                  Sign up
                </button>
              ) : (
                <LoadingButton />
              )}
            </div>
          </form>
        </div>
      ) : (
        <Aleart
          color='sky-400'
          title='Activate Account'
          message='Thanks For Signning Up. Please Verify the Email to Activate Your Account '
        />
      )}
    </div>
  );
}

export default SignupPage;
