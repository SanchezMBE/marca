
const Navbar = () => {
  return (
    <nav className="">
      <div className="bg-gray-100 text-center text-sm text-gray-600">
        Es noticia: LA Rams - Lions EN VIVO Sultanes - Diablos Rams - Lions Eliminado LCDLF Sorteo Zodiaco Bienestar
      </div>
      <div className="pb-3 pt-2 text-center">
        <div className="text-4xl font-bold">
          MARCA
        </div>
      </div>
      <div className="bg-red-600 text-lg p-2 flex justify-center">
        <ul className="flex space-x-7 font-bold">
          <li>
            <a href="#" className="text-white hover:text-gray-300">Fútbol</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Baloncesto</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Motor</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Polideportivo</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Más+</a>
          </li>
        </ul>
      </div>
      <div className="bg-gray-200 text-center p-2">
        Equipos
      </div>
    </nav>
  );
};

export default Navbar;
