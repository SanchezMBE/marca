/*
import React from "react";
import Slider from "react-slick";
import CardSmall from "./CardSmall";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSmallCarousel = () => {
  // Configuración del carrusel
  const settings = {
    dots: true, // Muestra puntos de navegación
    infinite: true, // Hacer que el carrusel sea infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 3, // Número de tarjetas visibles
    slidesToScroll: 1, // Número de tarjetas que se desplazan en cada transición
    responsive: [
      {
        breakpoint: 1024, // Para pantallas medianas y grandes
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Para pantallas pequeñas
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Para pantallas muy pequeñas
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Slider {...settings}>
        <CardSmall
          title="Título 1"
          author="Autor 1"
          comments="10"
          imageSrc="/marca/src/assets/image_2.webp"
        />
        <CardSmall
          title="Título 2"
          author="Autor 2"
          comments="20"
          imageSrc="/marca/src/assets/image_3.webp"
        />
        <CardSmall
          title="Título 3"
          author="Autor 3"
          comments="30"
          imageSrc="/marca/src/assets/image_2.webp"
        />
        <CardSmall
          title="Título 4"
          author="Autor 4"
          comments="40"
          imageSrc="/marca/src/assets/image_4.webp"
        />
        <CardSmall
          title="Título 5"
          author="Autor 5"
          comments="50"
          imageSrc="/marca/src/assets/image_4.webp"
        />
      </Slider>
    </div>
  );
};

export default CardSmallCarousel;
*/


import CardMedium from "./CardMedium";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionB = () => {

  return (
    <div className=" max-w-[980px] mx-auto p-4">
      {/* Sección de CardMedium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <CardMedium
          imageSrc="/marca/src/assets/image_4.webp"
          title="Título del CardMedium 1"
          text="Descripción del CardMedium 1"
        />
        <CardMedium
          imageSrc="/marca/src/assets/image_4.webp"
          title="Título del CardMedium 2"
          text="Descripción del CardMedium 2"
        />
        <CardMedium
          imageSrc="/marca/src/assets/image_4.webp"
          title="Título del CardMedium 3"
          text="Descripción del CardMedium 3"
        />
      </div>
    </div>
  );
};

export default SectionB;
