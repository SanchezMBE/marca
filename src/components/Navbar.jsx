import Teams from './Teams';
import TopNews from './TopNews'
const Navbar = () => {
  return (
    <nav className="">
      {/* Noticias destacadas */}
      <TopNews/>
      {/* Logo */}
      <div className="p-2 flex flex-row justify-around">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
        <img src="/marca/src/assets/logo.svg" alt="Marca" className="aspect-auto w-[145px]" />
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
      </div>
      {/* Navbar principal */}
      <div className="bg-red-300 sm:bg-red-400 md:bg-red-500 lg:bg-red-600 xl:bg-red-700 text-lg flex justify-around items-center px-4">
        <div className="flex space-x-2 font-bold">
          <a className="text-white hover:bg-gray-800 p-2 cursor-pointer">
            Fútbol
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 ml-2 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
          <a className="text-white hover:bg-gray-800 p-2 cursor-pointer">
            Baloncesto
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 ml-2 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
          <a className="text-white hover:bg-gray-800 p-2 cursor-pointer">
            Motor
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 ml-2 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
          <a className="text-white hover:bg-gray-800 p-2 cursor-pointer">
            Polideportivo
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 ml-2 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
          <a className="text-white hover:bg-gray-800 p-2 cursor-pointer">
            Más+
          </a>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar en marca.com"
            className="py-1 px-3 pr-10 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 hidden md:block">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 block md:hidden">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
      </div>
      {/* Equipos */}
      <Teams/>
    </nav>
  );
};

export default Navbar;