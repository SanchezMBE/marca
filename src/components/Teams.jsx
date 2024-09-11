import Slider from "react-slick";

function Teams() {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    draggable: false,
    swipe: false,
    variableWidth: true,
  };

  // Generar automáticamente las rutas de las imágenes
  const logos = Array.from({ length: 28 }, (_, index) => `/marca/public/assets/teams/team_${index + 1}.png`);

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-item p-2 inline-block">
            <img src={logo} alt={`Logo ${index + 1}`} className="h-10" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Teams;
