
const Footer = () => {
  return (
    <footer>
      {/* Primera sección */}
      <div className="bg-stone-900 text-white p-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center max-w-6xl">
          <div>
            <h4 className="text-xl font-bold mb-4">Marca</h4>
            <ul>
              <li><a href="#" className="hover:underline">App Marca</a></li>
              <li><a href="#" className="hover:underline">Apuestas Deportivas</a></li>
              <li><a href="#" className="hover:underline">Clasificación LaLiga</a></li>
              <li><a href="#" className="hover:underline">Sobre nosotros</a></li>
              <li><a href="#" className="hover:underline">Equipo</a></li>
              <li><a href="#" className="hover:underline">Carreras</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Ocio y Moda</h4>
            <ul>
              <li><a href="#" className="hover:underline">Preguntas frecuentes</a></li>
              <li><a href="#" className="hover:underline">Contacto</a></li>
              <li><a href="#" className="hover:underline">Ayuda</a></li>
              <li><a href="#" className="hover:underline">Reportar un problema</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Unidad Editorial</h4>
            <ul>
              <li><a href="#" className="hover:underline">Consultoría</a></li>
              <li><a href="#" className="hover:underline">Desarrollo</a></li>
              <li><a href="#" className="hover:underline">Diseño</a></li>
              <li><a href="#" className="hover:underline">Marketing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Formación y Empleo</h4>
            <ul>
              <li><a href="#" className="hover:underline">Escuela Unidad Editorial</a></li>
              <li><a href="#" className="hover:underline">Unidad Editorial</a></li>
              <li><a href="#" className="hover:underline">Expanción y Empleo</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Segunda sección (Gris) */}
      <div className="bg-gray-200 p-4">
        <div className="container mx-auto text-center">
          <p className="text-sm font-bold">&copy; Septiembre 2024 Unidad Editorial Información Deportiva, S.L.U. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
