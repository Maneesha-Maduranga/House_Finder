function Selection({ title }) {
  return (
    <div>
      <label
        htmlFor='HeadlineAct'
        className='block text-base font-medium text-gray-900'
      >
        {title}
      </label>

      <select
        name='HeadlineAct'
        id='HeadlineAct'
        className='mt-1.5 w-full rounded-md py-2 border-2 text-gray-700 sm:text-sm'
      >
        <option value=''>Please select</option>
        <option value='JM'>John Mayer</option>
        <option value='SRV'>Stevie Ray Vaughn</option>
        <option value='JH'>Jimi Hendrix</option>
        <option value='BBK'>B.B King</option>
        <option value='AK'>Albert King</option>
        <option value='BG'>Buddy Guy</option>
        <option value='EC'>Eric Clapton</option>
      </select>
    </div>
  );
}

export default Selection;
