// user Profile
import user from '../../assets/user.png';

function DashBoardPage() {
  return (
    <div className='container mx-auto py-20 my-10 px-10'>
      <div className='flex flex-col gap-4 divide-y-2 divide-green-300'>
        {/* User Details */}

        <div className='min-w-min mx-auto bg-white p-8 shadow-lg rounded-lg'>
          <div className='flex flex-col gap-2'>
            <div className='mb-4'>
              <img
                src={user}
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
              />
            </div>
            {/* Email */}
            <label
              htmlFor='UserEmail'
              className='block overflow-hidden rounded-md border border-gray-200 p-1 shadow-sm'
            >
              <span className='text-xs font-medium text-gray-700'> Email </span>

              <input
                readOnly
                type='email'
                placeholder='anthony@rhcp.com'
                className='mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
              />
            </label>
            {/* Name */}
            <label
              htmlFor='UserName'
              className='block overflow-hidden rounded-md border border-gray-200 p-1 shadow-sm'
            >
              <span className='text-xs font-medium text-gray-700'> Name </span>

              <input
                type='text'
                readOnly
                placeholder='Maneesha Maduranga'
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
                placeholder='0763565630'
                className='mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
              />
            </label>
          </div>
        </div>

        {/* Listing */}
        <div className='text-left'>
          <h1 className='text-2xl font-normal p-2'>My Listing (2) </h1>
        </div>
      </div>
    </div>
  );
}

export default DashBoardPage;
