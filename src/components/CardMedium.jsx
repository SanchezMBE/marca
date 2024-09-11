const CardMedium = ({ imageSrc, title, text }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-red-500 p-6 rounded-lg shadow-md transform transition duration-200 hover:scale-95 cursor-pointer">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover mb-4 rounded-md" />
      <h2 className="text-xl font-bold text-center text-white">{title}</h2>
      <p className="text-sm text-center text-white">{text}</p>
    </div>
  );
};

export default CardMedium;

