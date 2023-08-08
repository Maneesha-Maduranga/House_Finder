import property from '../assets/property-1.jpg';
import agent from '../assets/agent-4.jpg';

//Component
import Badge from '../components/Badge';

function PropertyDetail() {
  return (
    <div className='container mx-auto py-20 my-10 px-10'>
      {/* Image Section and Quick summary */}
      <div className='flex flex-col lg:flex-row gap-8 items-center'>
        <img src={property} alt='' />
        {/* summary */}
        <div>
          <h4 className='text-3xl '>Property Summary</h4>
          <div className='border-2 border-green-400 w-32'></div>
          <div className='my-4'>
            <dl className='-my-3 divide-y divide-gray-100 text-base'>
              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                <dt className='font-bold text-gray-900'>Price</dt>
                <dd className='text-gray-700 sm:col-span-2 font-bold'>
                  $ 25000
                </dd>
              </div>
              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                <dt className='font-medium text-gray-900'>Id</dt>
                <dd className='text-gray-700 sm:col-span-2'>250</dd>
              </div>

              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                <dt className='font-medium text-gray-900'>Location</dt>
                <dd className='text-gray-700 sm:col-span-2'>
                  Chicago, IL 606543
                </dd>
              </div>

              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                <dt className='font-medium text-gray-900'>Property Type</dt>
                <dd className='text-gray-700 sm:col-span-2'>Single floor</dd>
              </div>

              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                <dt className='font-medium text-gray-900'>Status</dt>
                <dd className='text-gray-700 sm:col-span-2'>Sale</dd>
              </div>

              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                <dt className='font-medium text-gray-900'>Area</dt>
                <dd className='text-gray-700 sm:col-span-2'>320m*m</dd>
              </div>

              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                <dt className='font-medium text-gray-900'>Beds</dt>
                <dd className='text-gray-700 sm:col-span-2'>3</dd>
              </div>

              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                <dt className='font-medium text-gray-900'>Baths</dt>
                <dd className='text-gray-700 sm:col-span-2'>2</dd>
              </div>

              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                <dt className='font-medium text-gray-900'>Garage</dt>
                <dd className='text-gray-700 sm:col-span-2'>1</dd>
              </div>
              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                <dt className='font-medium text-gray-900'>Amenities</dt>
                <dd className='text-gray-700 sm:col-span-2'>
                  <Badge />
                  <Badge />
                  <Badge />
                </dd>
              </div>
              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                <dt className='font-medium text-gray-900'>Description</dt>
                <dd className='text-gray-700 sm:col-span-2'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                  facilis debitis explicabo doloremque impedit nesciunt dolorem
                  facere, dolor quasi veritatis quia fugit aperiam aspernatur
                  neque molestiae labore aliquam soluta architecto?
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
          <img src={agent} alt='' className='w-32 rounded-full' />
          <div>
            <h4 className='text-sm'>
              Name :<span className='mx-4 text-base'>Maneesha Maduranga</span>
            </h4>
            <h4 className='text-sm'>
              Phone Number :<span className='mx-4 text-base'> 0763565630</span>
            </h4>
            <h4 className='text-sm'>
              Email :<span className='mx-4 text-base'>Maduranga@gmail.com</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;
