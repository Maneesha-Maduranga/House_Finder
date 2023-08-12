import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

//Image
import House from '../assets/house.png';

//Component
import SearchSection from '../components/SearchSection';
import PropertyCard from '../components/PropertyCard';

function PropertyPage() {
  const [searchSection, setSearchSection] = useState(false);

  function handleSearchSection() {
    setSearchSection(!searchSection);
  }

  return (
    <div className='container mx-auto py-20 my-10 px-10'>
      {/* heading Section */}
      <div className='w-full h-20 p-2 my-2 bg-white border-l-8 border-green-400 text-left flex items-center justify-between'>
        <img src={House} alt='house' className='inline-flex w-14 md:w-20' />

        <div className='cursor-pointer inline-flex rounded-full p-2 bg-green-400'>
          <BiSearch size={28} onClick={handleSearchSection} color='white' />
        </div>
      </div>

      <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3'>
        {Array.from([1, 2, 3, 4, 5, 6, 7, 8]).map((item) => {
          return (
            <div key={item}>
              <PropertyCard />
            </div>
          );
        })}
      </div>

      {/* SearchBar */}
      <div
        className={
          searchSection
            ? `fixed top-0 right-0 h-full w-full md:w-1/2  overflow-y-auto shadow-xl bg-white z-20 ease-in-out duration-1000`
            : `bg-white z-20 ease-in-out duration-100 fixed  top-0 right-[-100%]`
        }
      >
        <SearchSection handleSearchSection={handleSearchSection} />
      </div>
    </div>
  );
}

export default PropertyPage;
