//Hook Form
import { useForm } from 'react-hook-form';

//Redux
import { useAddPropertyMutation } from '../../features/Rtk/propertyApiSlice';

//Toast
import toast from 'react-hot-toast';

function AddPropertyPage() {
  const [addProperty] = useAddPropertyMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  async function onSubmit(value) {
    const { data, error } = await addProperty(value);
    if (data) {
      reset();
      toast.success('Property Added');
    }
    if (error) {
      toast.error('Somthing went wrong');
    }
  }

  return (
    <div className='container mx-auto py-20 my-10 px-10'>
      <div className='rounded-lg bg-white p-8 shadow-xl lg:col-span-3 lg:p-12'>
        <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
          {/* Property Title */}
          <div>
            <label className='block text-sm font-medium text-gray-900'>
              Property Title
            </label>
            <input
              className='w-full rounded-lg border-gray-200 border-2  p-1 md:p-3  text-sm'
              placeholder='Property Title'
              type='text'
              {...register('title', { required: true })}
            />
            {errors.title?.type === 'required' && (
              <p className='text-sm text-red-500'>Title Is Required</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-900'>
              Districts
            </label>
            <input
              className='w-full rounded-lg border-gray-200 border-2  p-1 md:p-3  text-sm'
              placeholder='Propert located Districts'
              type='text'
              {...register('district', { required: true })}
            />
            {errors.district?.type === 'required' && (
              <p className='text-sm text-red-500'>District Is Required</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-900'>
              Address
            </label>
            <input
              className='w-full rounded-lg border-gray-200 border-2  p-1 md:p-3  text-sm'
              placeholder='Enter the street'
              type='text'
              {...register('address', { required: true })}
            />
            {errors.address?.type === 'required' && (
              <p className='text-sm text-red-500'>Address Is Required</p>
            )}
          </div>

          <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
            {/* Beds Selection */}
            <div>
              <label className='block text-sm font-medium text-gray-900'>
                Bedrooms
              </label>

              <select
                className='mt-1.5 w-full rounded-lg border-gray-300 border-2 p-1 text-sm font-medium text-gray-900 sm:text-sm'
                {...register('bedrooms', { required: true })}
              >
                <option defaultValue=''>Please select</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              {errors.bedrooms?.type === 'required' && (
                <p className='text-sm text-red-500'>Bedrooms Is Required</p>
              )}
            </div>

            {/* BathRooms Select */}
            <div>
              <label className='block text-sm font-medium text-gray-900'>
                Bathrooms
              </label>
              <select
                className='mt-1.5 w-full rounded-lg border-gray-300 border-2 p-1 text-sm font-medium text-gray-900  sm:text-sm'
                {...register('bathrooms', { required: true })}
              >
                <option defaultValue=''>Please select</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
              {errors.bathrooms?.type === 'required' && (
                <p className='text-sm text-red-500'>Bathrooms Is Required</p>
              )}
            </div>
          </div>

          <div className='grid grid-cols-3 gap-2 items-center '>
            {/* Property Land Size */}
            <div className='col-span-2'>
              <label className='block text-sm font-medium text-gray-900'>
                Land Size
              </label>
              <input
                className='w-full rounded-lg border-gray-200 border-2 p-1 md:p-3  text-sm'
                placeholder='Property Land Size'
                type='number'
                min='1'
                {...register('landsize', { required: true })}
              />
              {errors.landsize?.type === 'required' && (
                <p className='text-sm text-red-500'>Land Size Is Required</p>
              )}
            </div>
            {/* Unit */}
            <div>
              <label className='block text-sm font-medium text-gray-900'>
                Units
              </label>
              <select
                className='mt-1.5 w-full rounded-lg border-gray-300 border-2 p-1 text-sm font-medium text-gray-900 sm:text-sm'
                {...register('units', { required: true })}
              >
                <option value='perches'>perches</option>
                <option value='acres'>acres</option>
              </select>
              {errors.units?.type === 'required' && (
                <p className='text-sm text-red-500'>Units feild Is Required</p>
              )}
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-900'>
              House Size<span className='text-xs'>(sqft)</span>
            </label>
            <input
              className='w-full rounded-lg border-gray-200 border-2 p-1 md:p-3  text-sm'
              placeholder="What's the size of your property?"
              type='number'
              {...register('houseSize', { required: true })}
              min='1'
            />
            {errors.houseSize?.type === 'required' && (
              <p className='text-sm text-red-500'>HouseSize Is Required</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-900'>
              Description
            </label>
            <textarea
              className='w-full rounded-lg border-gray-200 border-2 p-3 text-sm'
              rows='8'
              placeholder='more details = more response'
              {...register('description', { required: true })}
            ></textarea>
            {errors.description?.type === 'required' && (
              <p className='text-sm text-red-500'>Description Is Required</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-900'>
              Rent<span className='text-xs'>(Rs/month)</span>
            </label>
            <input
              className='w-full rounded-lg border-gray-200 border-2 p-1 md:p-3  text-sm'
              placeholder="What's the rent of your property?"
              type='number'
              {...register('price', { required: true, min: 1000 })}
            />
            {errors.price?.type === 'required' && (
              <p className='text-sm text-red-500'>Price Is Required</p>
            )}
            {errors.price?.type === 'min' && (
              <p className='text-sm text-red-500'>
                Price Shuold be Greater Than Rs.1000{' '}
              </p>
            )}
          </div>
          {/* Negotiable Checkbox */}
          <div className='flex items-center mb-4'>
            <input
              id='default-checkbox'
              type='checkbox'
              value={true}
              {...register('negotiable', { required: true })}
              className='w-4 h-4 text-green-400 bg-gray-100 border-gray-300 rounded '
            />
            <label className='ml-2 text-sm font-medium text-gray-900'>
              Price Negotiable
            </label>
          </div>

          {/* Contact Details */}
          <div className='border-2 border-green-400 w-full'></div>

          <div className='flex flex-col gap-2'>
            <h1>Contact Details</h1>
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

          <div className='mt-4'>
            <button
              type='submit'
              className='block w-full rounded-lg bg-green-400 px-5 py-3 font-medium text-white '
            >
              Post Ad
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPropertyPage;

// <div className='mb-3'>
// <label className='mb-2 inline-block text-sm font-medium text-gray-900'>
//   Add upto 3 Photos(2 required)
// </label>
// <input
//   className='relative m-1 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem]'
//   {...register(`imageOne`, { required: true })}
//   type='file'
// />
// {errors.imageOne?.type === 'required' && (
//   <p className='text-sm text-red-500'>Image One Is Required</p>
// )}
// <input
//   className='relative m-1 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem]'
//   {...register(`imageTwo`, { required: true })}
//   type='file'
// />
// {errors.imageTwo?.type === 'required' && (
//   <p className='text-sm text-red-500'>Image Two Is Required</p>
// )}
// </div>
