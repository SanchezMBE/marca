import PropTypes from 'prop-types';

const CardSmall = ({ title, author, topic, imageSrc }) => {
  return (
    <div className="relative w-full h-0 pb-[66.67%]"> {/* Aspect ratio 3:2 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat shadow-md  transform transition duration-200 hover:scale-95 cursor-pointer"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-sm">
          {topic}
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-20 p-4 flex flex-col justify-end">
          <p className="text-white text-xs mb-1">{author}</p>
          <h2 className="text-lg xs:text-3xl sm:text-base font-bold text-white">{title}</h2>
        </div>
      </div>
    </div>
  );
};

CardSmall.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default CardSmall;