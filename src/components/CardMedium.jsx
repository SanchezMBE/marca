// eslint-disable-next-line react/prop-types
const CardMedium = ({ imageSrc, title, text }) => {
  return (
    <div className="bg-white shadow-md">
      <img src={imageSrc} alt="Imagen del CardMedium" className="rounded-t-md" />
      <div className="p-4">
        <h5 className="text-gray-900 font-bold">{title}</h5>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default CardMedium;