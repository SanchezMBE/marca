const CardLarge = () => {
  return (
    <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
      <div className="absolute inset-0 bg-[url('/marca/src/assets/image_1.webp')] bg-cover bg-center bg-no-repeat shadow-md  transform transition duration-200 hover:scale-95 cursor-pointer">
        <div className="absolute inset-0 bg-black bg-opacity-30 p-4 flex flex-col justify-end">
          <p className="text-white text-sm mb-2">Descubre los ocho grandes favoritos</p>
          <h2 className="text-lg xs:text-3xl sm:text-5xl md:text-4xl font-bold text-white">¿Cuál es el mejor once para reinar en Europa?</h2>
        </div>
      </div>
    </div>
  )
};

export default CardLarge;