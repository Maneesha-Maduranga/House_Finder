import { Link, useNavigate } from 'react-router-dom';

//Redux
import { useDispatch } from 'react-redux';
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

  return (
    <div className='container mx-auto py-20 my-10 px-10'>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg text-center'>
          <h1 className='text-2xl font-bold sm:text-3xl'>Get started today!</h1>
        </div>

        <form
          className='mx-auto mb-0 mt-8 max-w-md space-y-4'
          onSubmit={handleSubmit(onSubmit)}
        >
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
              <p className='text-sm text-red-500'>{errors.password?.message}</p>
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
              className='inline-block rounded-lg bg-green-400 px-5  py-2 text-sm font-medium text-white'
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
