// eslint-disable-next-line react/prop-types
const CardSmall = ({ title, author, comments, imageSrc }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex items-center">
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