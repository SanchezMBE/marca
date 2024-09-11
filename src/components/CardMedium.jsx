// eslint-disable-next-line react/prop-types
const CardMedium = ({ imageSrc, title, text }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6 shadow-md transform transition duration-200 hover:scale-95 cursor-pointer">
      <img src={imageSrc} alt={title} className="w-full xs-h-48 object-cover mb-4 rounded-sm" />
      <h2 className="text-xl font-bold text-center">{title}</h2>
      <p className="text-sm text-center">{text}</p>
    </div>
  );
};

export default CardMedium;

