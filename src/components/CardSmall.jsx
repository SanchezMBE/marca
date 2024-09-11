// eslint-disable-next-line react/prop-types
/*const CardSmall = ({ title, author, comments, imageSrc }) => {
  return (
    <div className="bg-white p-4 shadow-md flex items-center">
      <img
        src={imageSrc}
        alt={title}
        className="aspect-auto h-20 object-covermr-4"
      />
      <div className="ml-4">
        <h3 className="text-sm font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{author}</p>
        <div className="flex items-center mt-2">
          <span className="text-xs text-gray-500">{comments} comments</span>
        </div>
      </div>
    </div>
  );
};

export default CardSmall;
*/
const CardSmall = ({ title, author, comments, imageSrc }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md transform transition duration-200 hover:scale-95 cursor-pointer">
      <img src={imageSrc} alt={title} className="w-full h-32 object-cover mb-4 rounded-md" />
      <h2 className="text-lg font-bold text-center">{title}</h2>
      <p className="text-sm text-gray-600 text-center">{author}</p>
      <p className="text-sm text-gray-600 text-center">{comments} comentarios</p>
    </div>
  );
};

export default CardSmall;