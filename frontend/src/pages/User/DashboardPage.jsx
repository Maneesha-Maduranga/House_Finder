// user Profile
import userImg from '../../assets/user.png';
//redux
import { useSelector } from 'react-redux';
import {
  useShowMeQuery,
  useUplaodPhotoMutation,
  useUpdatePhotoMutation,
} from '../../features/Rtk/userApiSlice';

//Toast
import toast from 'react-hot-toast';

//Components
import Spinner from '../../components/Spinner';
import Aleart from '../../components/Aleart';

function DashBoardPage() {
  const { user } = useSelector((store) => store.user);

  const { data, error, isLoading } = useShowMeQuery();
  const [uplaodPhoto] = useUplaodPhotoMutation();
  const [updatePhoto] = useUpdatePhotoMutation();

  async function handleImageUpload(e) {
    try {
      const formData = new FormData();
      formData.append('profilePicture', e.target.files[0]);
      let { data } = await uplaodPhoto(formData);

      if (data) {
        try {
          const res = await updatePhoto({ image: data.image.src });
          toast.success(res.data.message);
        } catch (e) {
          toast.error('Please Try Again');
        }
      }
    } catch (e) {
      toast.error('Please Try Again');
    }
  }

  return (
    <div className='container mx-auto py-20 my-10 px-10'>
      <div className='flex flex-col gap-4 divide-y-2 divide-green-300'>
        {/* User Details */}

        {error ? (
          <Aleart
            color='red-400'
            title='Something Went Wrong. Please Try Again'
          />
        ) : isLoading ? (
          <Spinner />
        ) : (
          <div className='min-w-min mx-auto bg-white p-8 shadow-lg rounded-lg'>
            <div className='flex flex-col gap-2'>
              <div className='mb-4'>
                <img
                  src={data.data.image ? `${data.data.image}` : userImg}
                  alt='Profile'
                  className='mx-auto h-24 w-24 rounded-full object-cover'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Update Profile Photo
                </label>
                <input
                  className='relative m-1 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem]'
                  type='file'
                  accept='image/*'
                  onChange={handleImageUpload}
                />
              </div>
              {/* Email */}
              <label
                htmlFor='UserEmail'
                className='block overflow-hidden rounded-md border border-gray-200 p-1 shadow-sm'
              >
                <span className='text-xs font-medium text-gray-700'>
                  {' '}
                  Email{' '}
                </span>

                <input
                  readOnly
                  type='email'
                  value={user.email}
                  className='mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                />
              </label>
              {/* Name */}
              <label
                htmlFor='UserName'
                className='block overflow-hidden rounded-md border border-gray-200 p-1 shadow-sm'
              >
                <span className='text-xs font-medium text-gray-700'>
                  {' '}
                  Name{' '}
                </span>

                <input
                  type='text'
                  readOnly
                  value={user.name}
                  className='mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                />
              </label>
              {/* Telphone */}
              <label
                htmlFor='phone'
                className='block overflow-hidden rounded-md border border-gray-200 p-1 shadow-sm'
              >
                <span className='text-xs font-medium text-gray-700'>
                  Phone Number
                </span>

                <input
                  readOnly
                  type='tel'
                  value={user.phoneNumber}
                  className='mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                />
              </label>
            </div>
          </div>
        )}

        {/* Listing */}
        <div className='text-left'>
          <h1 className='text-2xl font-normal p-2'>My Listing (2) </h1>
        </div>
      </div>
    </div>
  );
}

export default DashBoardPage;
