// eslint-disable-next-line react/prop-types
const CardMedium = ({ imageSrc, title, text }) => {
  return (
    <div className="bg-red-200 shadow-md">
      <img src={imageSrc} alt="Imagen del CardMedium" className=""/>
      <div className="p-4">
        <h5 className="text-gray-900 font-bold">{title}</h5>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default CardMedium;