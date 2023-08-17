function Aleart({ color, title, message }) {
  return (
    <div
      role='alert'
      className={`rounded border-s-4 border-${color} bg-slate-100 p-4`}
    >
      <strong className={`block font-medium text-lg text-${color}`}>
        {title}
      </strong>
      {message && <p className={`mt-2 text-base text-${color}`}>{message}</p>}
    </div>
  );
}

export default Aleart;
