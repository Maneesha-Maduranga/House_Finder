import { AiOutlineClose } from 'react-icons/ai';
import Selection from './Selection';

function SearchSection({ handleSearchSection }) {
  function handleClick() {
    handleSearchSection();
  }

  return (
    <div className='flex flex-col py-8'>
      <div className='flex text-xl lg:text-2xl font-semibold justify-between px-8 '>
        <h1 className='border-b-4 border-green-400'>Fillter By Property</h1>
        <button onClick={handleClick}>
          <AiOutlineClose size={48} />
        </button>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 px-10 py-5 gap-4'>
        <Selection title='Type' />
        <Selection title='District' />
        <Selection title='City' />
        <Selection title='Bedrooms' />
        <Selection title='Bathrooms' />
      </div>
      <div className='px-10'>
        <button className='px-2 py-1 w-full bg-green-400 text-white'>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchSection;
