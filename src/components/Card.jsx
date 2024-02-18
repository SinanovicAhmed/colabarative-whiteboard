// eslint-disable-next-line react/prop-types
const Card = ({ header, text }) => {
  return (
    <div className="w-[250px] sm:w-[300px] bg-white shadow-lg p-4 rounded-md">
      <h2 className="text-xl font-bold pb-2">{header}</h2>
      <p className="text-sm leading-6 text-gray-400">{text}</p>
    </div>
  );
};

export default Card;
