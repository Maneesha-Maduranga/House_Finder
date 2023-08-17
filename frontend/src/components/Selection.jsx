function Selection({ title, data }) {
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
        <option value=''></option>
        {data.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Selection;
