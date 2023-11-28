// eslint-disable-next-line react/prop-types
export default function Button({ title, className, icon }) {
  return (
    <button className={`${className} rounded-full p-3`}>
      {title}
      {icon}
    </button>
  );
}
