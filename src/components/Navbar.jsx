
const Navbar = () => {
  return (
    <nav className="">
      <div className="bg-gray-100 text-center text-sm text-gray-600">
        Es noticia: LA Rams - Lions EN VIVO Sultanes - Diablos Rams - Lions Eliminado LCDLF Sorteo Zodiaco Bienestar
      </div>
      <div className="p-2 flex flex-col items-center">
          <img src="/marca/src/assets/logo.svg" alt="Marca" className="aspect-auto w-[145px]" />
      </div>
      <div className="bg-red-300 sm:bg-red-400 md:bg-red-500 lg:bg-red-600 xl:bg-red-700 text-lg flex justify-center">
        <ul className="flex space-x-2 font-bold">
          <a href="#" className="text-white hover:bg-gray-800 p-2 ">
            Fútbol
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 ml-2 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
          <a href="#" className="text-white hover:bg-gray-800 p-2 ">
            Baloncesto
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 ml-2 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
          <a href="#" className="text-white hover:bg-gray-800 p-2 ">
            Motor
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 ml-2 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
          <a href="#" className="text-white hover:bg-gray-800 p-2 ">
            Polodeportivo
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 ml-2 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
          <a href="#" className="text-white hover:bg-gray-800 p-2 ">
            Más+
          </a>
        </ul>
      </div>
      <div className="bg-gray-200 text-center p-2">
        Equipos
      </div>
    </nav>
  );
};

export default Navbar;
