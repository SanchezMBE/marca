import { useState } from 'react';
import Teams from './Teams';
import TopNews from './TopNews';

const Navbar = () => {
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleCountryDropdown = () => {
    setShowCountryDropdown(!showCountryDropdown);
    setActiveDropdown(null); // Cierra otros dropdowns
  };

  const toggleDropdown = (category) => {
    setActiveDropdown(activeDropdown === category ? null : category);
    setShowCountryDropdown(false); // Cierra el dropdown de país
  };

  const handleOptionClick = () => {
    setShowCountryDropdown(false);
    setActiveDropdown(null);
  };

  const dropdownOptions = {
    Fútbol: ['España', 'Internacional', 'América'],
    Baloncesto: ['España', 'Internacional', 'América'],
    Motor: ['España', 'Internacional', 'América'],
    Polideportivo: ['España', 'Internacional', 'América'],
  };

  return (
    <>
    <nav className="hidden sm:block relative">
      <TopNews />
      <div className="pt-2 px-4 flex flex-row justify-between md:justify-around items-center">
        {/* Enlaces */}
        <div className="flex">
          <div className='pr-2 text-[0.75rem] font-semibold border-r border-gray-300 cursor-pointer'>
            <img className='inline-block mr-2'  src="/marca/public/assets/links/portada.jpg" width="30" alt="Portada" />
            <p className='hidden lg:inline-block'>La portada de hoy</p>
          </div>
          <div className='px-2 pt-0.5 text-[0.75rem] font-semibold border-r border-gray-300 cursor-pointer'>
            <img className='inline-block lg:mr-2'  src="/marca/public/assets/links/radio_marca.png" width="35" alt="Portada" />
            <p className='hidden lg:inline-block'>Radio Marca</p>
          </div>          
          <div className='h-[35] px-2 pt-0.5 text-[0.75rem] font-semibold cursor-pointer'>
            <img className='inline-block mr-2' src="/marca/public/assets/links/cuidateplus.ico" width="35" alt="CuidatePlus" />
            <p className='hidden lg:inline-block'>Cuídate Plus</p>
          </div>
        </div>
        {/* Logo */}
        <img className="aspect-auto w-[145px] cursor-pointer" src="/marca/public/assets/logo.svg" alt="Marca" />
        {/* Botones inicio */}
        <div className="flex space-x-4">
          <div className="relative">
            <button
              onClick={toggleCountryDropdown}
              className="bg-white border hover:bg-gray-100 border-gray-300 px-4 rounded h-[32px]"
            >
              <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" role="img" aria-hidden="true"><path fill="#FFC400" d="M3,6h18v12H3V6z"></path><path fill="#C60B1E" d="M3,6h18v3H3V6z M3,15h18v3H3V15z"></path></svg>
              <p className='hidden lg:inline-block lg:ml-3'>ES</p>
            </button>
            {showCountryDropdown && (
              <div className="absolute top-full left-0 bg-white border border-gray-300 mt-1 rounded shadow-lg z-50">
                <button onClick={handleOptionClick} className="block w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300">
                  <svg className='inline-block mr-3' xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" role="img" aria-hidden="true"><path fill="#FFC400" d="M3,6h18v12H3V6z"></path><path fill="#C60B1E" d="M3,6h18v3H3V6z M3,15h18v3H3V15z"></path></svg>
                  ES (España)
                </button>
                <button onClick={handleOptionClick} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  <svg className='inline-block mr-3' xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" role="img" aria-hidden="true"><circle fill="#AED6F1" cx="12" cy="12" r="8.5"></circle><g><path fill="#34495E" d="M16.116,7.003l0.018,0.134l-0.2,0.042l-0.026,0.284h0.239l0.319-0.03l0.164-0.197l-0.174-0.067l-0.097-0.11 l-0.144-0.234l-0.069-0.33l-0.271,0.056L15.8,6.667v0.131l0.132,0.089L16.116,7.003z"></path><path fill="#34495E" d="M15.887,7.113l0.012-0.178l-0.157-0.069L15.52,6.917l-0.166,0.265v0.172h0.192L15.887,7.113z M11.313,7.871 l-0.049,0.126h-0.236v0.122h0.056l0.008,0.06l0.146-0.012l0.091-0.056l0.023-0.113l0.117-0.01l0.047-0.095l-0.107-0.022H11.313z M10.704,8.093l-0.009,0.119l0.171-0.014l0.018-0.12l-0.103-0.081L10.704,8.093z"></path><path fill="#34495E" d="M20.998,11.907c-0.007-1.108-0.223-2.205-0.635-3.233l-0.068-0.172c-0.434-1.023-1.055-1.958-1.829-2.755 C16.773,3.991,14.439,3,12,3C9.741,2.998,7.565,3.85,5.907,5.384C5.533,5.729,5.188,6.104,4.878,6.508 C3.659,8.079,2.999,10.012,3,12c0,4.963,4.038,9,9,9c3.491,0,6.521-2,8.014-4.911C20.662,14.823,21,13.422,21,12L20.998,11.907z M19.305,8.311l0.053-0.059c0.067,0.133,0.133,0.268,0.192,0.404l-0.085-0.003l-0.16,0.022V8.311z M18.003,6.739l0.002-0.401 c0.142,0.149,0.278,0.304,0.408,0.464l-0.163,0.24l-0.566-0.004L17.648,6.92L18.003,6.739z M7.147,5.74V5.726h0.18l0.016-0.063 h0.295v0.128L7.554,5.905H7.146L7.147,5.74z M7.435,6.142c0,0,0.181-0.031,0.195-0.031c0.016,0,0,0.179,0,0.179L7.224,6.317 L7.147,6.225L7.435,6.142z M19.878,9.715h-0.659l-0.4-0.299l-0.422,0.041v0.258h-0.135l-0.145-0.103l-0.73-0.185V8.953 l-0.928,0.072l-0.288,0.154h-0.366l-0.181-0.018l-0.447,0.248v0.466l-0.913,0.66l0.075,0.281h0.187l-0.049,0.267l-0.131,0.048 l-0.007,0.7l0.789,0.899h0.345l0.021-0.056h0.616l0.18-0.165h0.35l0.192,0.193l0.522,0.054l-0.07,0.694l0.58,1.023l-0.307,0.582 l0.021,0.274l0.24,0.239v0.66l0.315,0.426v0.549h0.271c-1.565,1.932-3.92,3.054-6.406,3.054c-4.552,0-8.257-3.704-8.257-8.26 c0-1.146,0.234-2.239,0.658-3.232V8.51l0.296-0.358c0.103-0.194,0.212-0.383,0.329-0.566l0.014,0.149L4.696,8.151 c-0.107,0.2-0.207,0.405-0.297,0.616v0.47l0.344,0.165v0.654l0.329,0.562l0.268,0.041l0.034-0.192L5.059,9.979L4.997,9.506h0.186 l0.078,0.487l0.455,0.666l-0.117,0.214l0.291,0.445l0.721,0.178V11.38l0.287,0.041L6.87,11.627l0.227,0.041l0.351,0.096 l0.494,0.563l0.632,0.047l0.061,0.517l-0.432,0.301l-0.02,0.459L8.12,13.932l0.625,0.783l0.046,0.268c0,0,0.227,0.063,0.255,0.063 c0.028,0,0.509,0.364,0.509,0.364v1.414l0.17,0.048l-0.115,0.65l0.287,0.385l-0.053,0.646l0.381,0.671l0.489,0.426l0.491,0.011 l0.049-0.159l-0.361-0.305l0.021-0.15l0.065-0.186l0.013-0.188l-0.245-0.007l-0.123-0.154l0.203-0.195l0.027-0.147l-0.227-0.063 l0.014-0.139l0.323-0.049l0.491-0.234l0.164-0.303l0.516-0.658l-0.117-0.516l0.158-0.273l0.473,0.014l0.318-0.252L13.07,14.7 l0.354-0.45l0.063-0.289l-0.323-0.104l-0.213-0.349L12.224,13.5l-0.576-0.22l-0.027-0.411l-0.193-0.336l-0.521-0.008l-0.301-0.474 l-0.268-0.131l-0.014,0.145l-0.487,0.029l-0.179-0.249L9.15,11.743l-0.42,0.484l-0.659-0.111l-0.047-0.743L7.542,11.29l0.193-0.364 L7.68,10.717l-0.632,0.422l-0.397-0.048L6.509,10.78l0.088-0.32l0.219-0.404L7.32,9.801L8.294,9.8l-0.002,0.298l0.35,0.162 L8.614,9.752l0.252-0.254l0.509-0.333l0.036-0.236L9.919,8.4l0.539-0.299l-0.046-0.04l0.365-0.344l0.135,0.036l0.061,0.077 l0.139-0.154l0.035-0.015L10.995,7.64l-0.154-0.051v-0.15l0.082-0.067h0.18l0.082,0.037l0.072,0.144l0.087-0.013V7.527l0.025,0.008 l0.253-0.039l0.035-0.124L11.8,7.409v0.133l-0.133,0.093l0.02,0.146l0.459,0.142v0.006l0.106-0.009l0.007-0.199l-0.363-0.165 L11.874,7.46l0.303-0.104l0.014-0.288l-0.317-0.192l-0.02-0.487l-0.433,0.212h-0.158l0.042-0.37l-0.589-0.139l-0.243,0.184v0.561 l-0.438,0.139L9.858,7.343L9.669,7.374V6.906L9.257,6.849L9.052,6.715L8.969,6.412L9.704,5.98l0.361-0.109l0.036,0.242l0.2-0.011 l0.016-0.121l0.21-0.03l0.004-0.043L10.44,5.871l-0.02-0.129l0.259-0.021l0.155-0.162l0.009-0.012h0.002l0.047-0.049l0.543-0.068 l0.239,0.204l-0.629,0.335l0.8,0.188l0.104-0.268H12.3l0.124-0.233l-0.248-0.063V5.3l-0.775-0.344l-0.535,0.062l-0.303,0.158 l0.021,0.385l-0.316-0.048L10.219,5.3l0.302-0.275L9.972,4.998L9.814,5.045L9.746,5.23l0.206,0.035L9.911,5.471l-0.35,0.021 L9.507,5.629L8.999,5.643c0,0-0.014-0.288-0.035-0.288l0.398-0.007l0.302-0.295L9.499,4.97L9.28,5.183L8.915,5.162L8.696,4.86 H8.229L7.742,5.224h0.446l0.041,0.131L8.113,5.462l0.495,0.014l0.074,0.178l-0.556-0.02L8.1,5.497L7.75,5.421L7.564,5.318 L7.147,5.321C8.556,4.292,10.255,3.739,12,3.74c2.089,0,3.997,0.78,5.452,2.063l-0.099,0.176l-0.381,0.149l-0.16,0.174l0.037,0.203 l0.196,0.027l0.118,0.296l0.34-0.136l0.055,0.396h-0.102L17.18,7.047L16.871,7.1l-0.299,0.422l-0.428,0.067l-0.063,0.365 l0.182,0.043L16.21,8.232l-0.424-0.086l-0.39,0.086l-0.082,0.217l0.066,0.454l0.229,0.107l0.384-0.003l0.259-0.022l0.078-0.207 l0.404-0.525l0.268,0.054l0.262-0.237l0.049,0.185l0.645,0.436L17.88,8.797l-0.291-0.016L17.7,8.94l0.18,0.039l0.209-0.088 L18.084,8.64l0.092-0.047l-0.074-0.079l-0.43-0.24l-0.111-0.319h0.356l0.114,0.113l0.309,0.265l0.014,0.321l0.318,0.34l0.119-0.465 l0.221-0.121l0.043,0.381l0.215,0.237L19.7,9.018c0.084,0.214,0.157,0.433,0.225,0.655L19.878,9.715z M7.909,7.089l0.216-0.103 l0.196,0.047L8.253,7.295L8.042,7.362L7.909,7.089z M9.056,7.707v0.17H8.563L8.378,7.825l0.045-0.119l0.238-0.098h0.324v0.098 L9.056,7.707L9.056,7.707z M9.284,7.944v0.165L9.16,8.188L9.006,8.217V7.944H9.284L9.284,7.944z M9.145,7.877V7.681l0.17,0.155 L9.145,7.877z M9.222,8.273v0.161L9.104,8.552H8.841l0.041-0.18l0.125-0.011l0.025-0.063L9.222,8.273z M8.567,7.944H8.84 L8.49,8.433L8.347,8.355l0.031-0.206L8.567,7.944L8.567,7.944z M9.685,8.217v0.16H9.423L9.351,8.273V8.124h0.021L9.685,8.217z M9.442,7.997l0.075-0.08l0.126,0.08L9.542,8.08L9.442,7.997z M20.012,10.132l0.026-0.03l0.03,0.141L20.012,10.132z"></path><path fill="#34495E" d="M4.399,8.51v0.258c0.09-0.21,0.189-0.415,0.297-0.616L4.399,8.51z"></path></g></svg>
                  EN (English)
                </button>
                <button onClick={handleOptionClick} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  <svg className='inline-block mr-3' xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" role="img" aria-hidden="true"><path fill="#FFFFFF" d="M3,6h18v12H3V6z"></path><path fill="#006847" d="M3,6h6v12H3V6z"></path><path fill="#CE1126" d="M15,6h6v12h-6V6z"></path><circle fill="#C0C2A3" cx="12" cy="12" r="2"></circle></svg>
                  MX (México)
                </button>
              </div>
            )}
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 rounded h-[32px]">
            <p className='hidden md:inline-block'>Suscribirse</p>
            <p className='inline-block md:hidden pt-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </p>
          </button>
          <button className="bg-white hover:bg-gray-100 text-red-600 border border-gray-300 px-4 rounded h-[32px]">
            <p className='hidden md:inline-block'>Iniciar sesión</p>
            <p className='inline-block md:hidden pt-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </p>
          </button>
        </div>
      </div>
      {/* Navbar principal */}
      <div className="h-[44px] bg-red-200 xs:bg-red-300 sm:bg-red-400 md:bg-red-500 lg:bg-red-600 xl:bg-red-700 text-lg flex justify-end md:justify-around items-center px-4">
        {/* Opciones */}
        <div className="hidden md:inline-flex space-x-2 font-bold">
          {Object.keys(dropdownOptions).map((category) => (
            <div key={category} className="relative">
              <button
                onClick={() => toggleDropdown(category)}
                className="text-white hover:bg-gray-900 p-2 cursor-pointer flex items-center"
              >
                {category}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-3 ml-2 inline-block"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {activeDropdown === category && (
                <div className="absolute top-full left-0 bg-gray-900 text-white mt-1 rounded shadow-lg flex z-50">
                  {dropdownOptions[category].map((option) => (
                    <div key={option} className="p-4">
                      <h3 className="font-bold mb-2">{option}</h3>
                      <ul>
                        <li onClick={handleOptionClick} className="hover:text-red-500 p-1 font-normal cursor-pointer">Opción 1</li>
                        <li onClick={handleOptionClick} className="hover:text-red-500 p-1 font-normal cursor-pointer">Opción 2</li>
                        <li onClick={handleOptionClick} className="hover:text-red-500 p-1 font-normal cursor-pointer">Opción 3</li>
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="text-white hover:bg-gray-800 p-2 cursor-pointer flex items-center">
            Más+
          </button>
        </div>
        {/* Buscador */}
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar en marca.com"
            className="block md:hidden lg:block py-1 px-3 pr-10 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-500 md:text-white lg:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
        <svg className="inline-block md:hidden size-6 ml-4 text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <div className='overflow-hidden h-14'>
        <Teams />
      </div>
    </nav>

    {/* MOVIL */}
    <nav className='sm:hidden bg-red-600 text-lg flex justify-between items-center px-5'>   
      {/* Logo */}
      <div className='bg-white p-2 border-b border-red-600'>
        <img className="aspect-auto h-[30px] cursor-pointer" src="/marca/public/assets/logo.svg" alt="Marca" />
      </div>
      {/* Botones inicio */}
      <div className=''>
        <svg className="inline-block mr-4 size-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        <svg className="inline-block size-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </nav>
    </>
  );
};

export default Navbar;