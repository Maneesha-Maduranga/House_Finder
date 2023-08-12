import { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { storeUser } from '../../features/userSlice';
import { useSignInMutation } from '../../features/Rtk/authApiSlice';

//Hook Form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//Toast
import toast from 'react-hot-toast';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

function SigninPage() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [signIn] = useSignInMutation();
  const navigate = useNavigate();

  //redux
  const dispatch = useDispatch();

  //Get User FromStote
  const { user } = useSelector((state) => state.user);

  async function onSubmit(values) {
    try {
      const { data, error } = await signIn(values);
      if (data) {
        reset();
        dispatch(storeUser(data.data));
        toast.success(`Welcome Back ${data.data.name}`, {
          style: {
            minWidth: '300px',
          },
        });
        navigate('/dashboard');
      }
      if (error) {
        return toast.error(error.data.error);
      }
    } catch (error) {
      toast.error('Please Try Again');
    }
  }

  //Handle Redirect And Navigation
  let { search } = useLocation();
  const serachParms = new URLSearchParams(search);

  const redirect = serachParms.get('redirect') || '/';

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate(redirect);
      }, 1000);
    }
  }, [user, navigate, redirect]);

  return (
    <div className='container mx-auto py-20 my-10 px-10'>
      <div className='mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg'>
          <h1 className='text-center text-2xl font-bold text-green-400 sm:text-3xl'>
            Get started today
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'
          >
            <p className='text-center text-lg font-medium'>
              Sign in to your account
            </p>

            <div>
              <label htmlFor='email' className='sr-only'>
                Email
              </label>

              <div className='relative'>
                <input
                  type='email'
                  className='w-full rounded-lg border-gray-200 border-2 p-2 md:p-4 pe-12 text-sm shadow-sm'
                  placeholder='Enter email'
                  {...register('email')}
                />
                <p className='text-sm text-red-500'>{errors.email?.message}</p>
              </div>
            </div>

            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>

              <div className='relative'>
                <input
                  type='password'
                  className='w-full rounded-lg border-gray-200 border-2 p-2 md:p-4 pe-12 text-sm shadow-sm'
                  placeholder='Enter Password'
                  {...register('password')}
                />
                <p className='text-sm text-red-500'>
                  {errors.password?.message}
                </p>
              </div>
            </div>

            <button
              type='submit'
              className='block w-full rounded-lg bg-green-400 px-5 py-3 text-sm font-medium text-white'
            >
              Sign in
            </button>

            <p className='text-center text-sm text-gray-500'>
              No account?
              <Link className='underline' to='/signup'>
                Sign up
              </Link>
            </p>
            <p className='text-center text-sm text-gray-500'>
              <Link className='underline' to='/forgot-password'>
                forget password 😢
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
