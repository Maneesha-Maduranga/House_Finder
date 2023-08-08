// Carosel background image component

function BgImage({ image }) {
  return (
    <div className='relative h-full'>
      <img src={image} alt='image' className='h-full w-full brightness-75' />
      <div className='absolute bottom-20 left-10 text-white'>
        <div className='text-4xl font-bold text-slate-100 md:text-5xl'>
          <h1>
            <span className='text-green-500'>204</span> Mount
          </h1>
          <h1>OLIVIE ROAD TWO</h1>
        </div>
        <button className='px-2 py-4 border-green-400 border-2 rounded-full uppercase text-lg my-2'>
          Rent | $12000
        </button>
      </div>
    </div>
  );
}

export default BgImage;
