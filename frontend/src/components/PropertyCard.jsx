//Link
import { Link } from 'react-router-dom';

import productImg from '../assets/property-1.jpg';

import { AiOutlineRight } from 'react-icons/ai';

function PropertyCard({ property }) {
  return (
    <div className='group relative block md:h-96 w-auto overflow-hidden'>
      {/* BackGround Image */}
      <img
        src={property.images[0] ? property.images[0] : productImg}
        alt='imageOne'
        className='brightness-75 h-full w-full transition duration-1000 group-hover:scale-110'
      />
      <div className='absolute bottom-0  ease-in-out duration-500 text-white group-hover:bottom-14 group-hover:ease-in-out group-hover:duration-700 '>
        <div className=' mx-2 px-4 py-4'>
          <h1 className='text-xl font-semibold my-1 md:text-3xl'>
            {property.title}
          </h1>
          <div className='flex flex-col items-start gap-2 text-sm md:text-base'>
            <button className='border-2 border-green-500   px-2 rounded-full '>
              RENT | $: {property.price}
            </button>
            <Link to={`/property/${property._id}`}>
              Click Here to View <AiOutlineRight className='inline-flex' />
            </Link>
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
            <h6 className='text-white'>{property.bedrooms}</h6>
          </div>
          <div>
            <h6>Bath</h6>
            <h6 className='text-white'>{property.bathrooms}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
