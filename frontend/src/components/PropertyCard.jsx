import producImg from '../assets/property-1.jpg';
import photo from '../assets/photo.jpg';
import { AiOutlineRight } from 'react-icons/ai';

function PropertyCard() {
  return (
    <div className='group relative block md:h-96 w-auto overflow-hidden'>
      {/* BackGround Image */}
      <img
        src={producImg}
        alt='imageOne'
        className='brightness-75 h-full w-full transition duration-1000 group-hover:scale-110'
      />
      <div className='absolute bottom-0  ease-in-out duration-500 text-white group-hover:bottom-14 group-hover:ease-in-out group-hover:duration-700 '>
        <div className=' mx-2 px-4 py-4'>
          <h1 className='text-3xl font-semibold my-1'>
            204 Mount Olive Road Two
          </h1>
          <div className='flex flex-col items-start gap-2'>
            <button className='border-2 border-green-500   px-2 rounded-full '>
              RENT | $12.000
            </button>
            <button>
              Click Here to View <AiOutlineRight className='inline-flex' />
            </button>
          </div>
        </div>
      </div>
      {/* Property    Details */}
      <div className='absolute text-center px-4 py-2 ease-in-out duration-500 -bottom-full bg-green-500 w-full h-16 group-hover:bottom-0 group-hover:ease-in-out group-hover:duration-700'>
        <div className='flex justify-around items-center  text-black font-semibold'>
          <div>
            <h6>Area</h6>
            <h6 className='text-white'>
              380<sup className='font-features sups'>m2</sup>
            </h6>
          </div>
          <div>
            <h6>Beds</h6>
            <h6 className='text-white'>3</h6>
          </div>
          <div>
            <h6>Bath</h6>
            <h6 className='text-white'>2</h6>
          </div>
          <div>
            <h6>Garage</h6>
            <h6 className='text-white'>1</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
