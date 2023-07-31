import { AiOutlineClose } from 'react-icons/ai';

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
    </div>
  );
}

export default SearchSection;
