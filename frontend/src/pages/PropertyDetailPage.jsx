import property from '../assets/property-1.jpg';
import agent from '../assets/agent-4.jpg';

//React Router
import { useParams } from 'react-router-dom';

//Component
import Badge from '../components/Badge';
import Spinner from '../components/Spinner';

import { useGetSinglePropertyQuery } from '../features/Rtk/propertyApiSlice';

function PropertyDetail() {
  let { id } = useParams();
  const { data, isLoading, isError } = useGetSinglePropertyQuery(id);

  return (
    <div className='container mx-auto py-20 my-10 px-10'>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className='flex flex-col  gap-8 items-center'>
            <img
              src={data.data.images[0] ? data.data.images[0] : property}
              alt=''
            />

            <div>
              <h4 className='text-3xl '>Property Summary</h4>
              <div className='border-2 border-green-400 w-32'></div>
              <div className='my-4'>
                <dl className='-my-3 divide-y divide-gray-100 text-base'>
                  <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                    <dt className='font-bold text-gray-900'>Price</dt>
                    <dd className='text-gray-700 sm:col-span-2 font-bold'>
                      $:{data.data.price}
                    </dd>
                  </div>
                  <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                    <dt className='font-medium text-gray-900'>Id</dt>
                    <dd className='text-gray-700 sm:col-span-2'>
                      {data.data._id}
                    </dd>
                  </div>
                  <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                    <dt className='font-medium text-gray-900'>District</dt>
                    <dd className='text-gray-700 sm:col-span-2'>
                      {data.data.district}
                    </dd>
                  </div>

                  <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                    <dt className='font-medium text-gray-900'>Location</dt>
                    <dd className='text-gray-700 sm:col-span-2'>
                      {data.data.address}
                    </dd>
                  </div>

                  <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                    <dt className='font-medium text-gray-900'>Land Size </dt>
                    <dd className='text-gray-700 sm:col-span-2'>
                      {data.data.landsize} {data.data.units}
                    </dd>
                  </div>

                  <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                    <dt className='font-medium text-gray-900'>House Size </dt>
                    <dd className='text-gray-700 sm:col-span-2'>
                      {data.data.houseSize} (sqft)
                    </dd>
                  </div>

                  <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                    <dt className='font-medium text-gray-900'>Beds</dt>
                    <dd className='text-gray-700 sm:col-span-2'>
                      {data.data.bedrooms}
                    </dd>
                  </div>

                  <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                    <dt className='font-medium text-gray-900'>Baths</dt>
                    <dd className='text-gray-700 sm:col-span-2'>
                      {data.data.bathrooms}
                    </dd>
                  </div>

                  <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                    <dt className='font-medium text-gray-900'>
                      Price Negotiable
                    </dt>
                    {data.data.negotiable ? (
                      <dd className='text-gray-700 sm:col-span-2'>
                        <Badge message='yes' color='green-400' />
                      </dd>
                    ) : (
                      <dd className='text-gray-700 sm:col-span-2'>
                        <Badge message='no' color='red-400' />
                      </dd>
                    )}
                  </div>
                  <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                    <dt className='font-medium text-gray-900'>Description</dt>
                    <dd className='text-gray-700 sm:col-span-2'>
                      {data.data.description}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          {/* Contact Agent Details*/}
          <div className='flex items-center justify-items-center flex-col my-4'>
            <div className='my-4'>
              <h4 className='text-3xl '>Contact Agent</h4>
              <div className='border-2 border-green-400 w-32'></div>
            </div>
            <div className='flex gap-4 flex-col lg:flex-row items-center'>
              <img
                src={data.data.user.image ? data.data.user.image : agent}
                alt=''
                className='w-32 rounded-full'
              />
              <div>
                <h4 className='text-sm'>
                  Name :
                  <span className='mx-4 text-base'>
                    {data.data.user.username}
                  </span>
                </h4>
                <h4 className='text-sm'>
                  Phone Number :
                  <span className='mx-4 text-base'>
                    {data.data.user.phoneNumber}
                  </span>
                </h4>
                <h4 className='text-sm'>
                  Email :
                  <span className='mx-4 text-base'>{data.data.user.email}</span>
                </h4>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PropertyDetail;
