function Spinner() {
  return (
    <div className='text-center'>
      <div
        className='animate-spin inline-block w-20 h-20 border-[3px] border-current border-t-transparent text-green-400 rounded-full'
        role='status'
        aria-label='loading'
      >
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
