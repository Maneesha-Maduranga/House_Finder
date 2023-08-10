function Aleart({ color, title, message }) {
  return (
    <div
      role='alert'
      className={`rounded border-s-4 border-${color} bg-slate-100 p-4`}
    >
      <strong className={`block font-medium text-${color}`}>{title}</strong>

      <p className={`mt-2 text-sm text-${color}`}>{message}</p>
    </div>
  );
}

export default Aleart;
