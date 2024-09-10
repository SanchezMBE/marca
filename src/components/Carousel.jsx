import Slider from "react-slick";
import CardMedium from "./CardMedium";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <CardMedium imageSrc="/marca/src/assets/image_4.webp" title="Título del CardMedium 1" text="Descripción del CardMedium 1" />
        <CardMedium imageSrc="/marca/src/assets/image_4.webp" title="Título del CardMedium 1" text="Descripción del CardMedium 1" />
        <CardMedium imageSrc="/marca/src/assets/image_4.webp" title="Título del CardMedium 1" text="Descripción del CardMedium 1" />
        <CardMedium imageSrc="/marca/src/assets/image_4.webp" title="Título del CardMedium 1" text="Descripción del CardMedium 1" />
        <CardMedium imageSrc="/marca/src/assets/image_4.webp" title="Título del CardMedium 1" text="Descripción del CardMedium 1" />
        <CardMedium imageSrc="/marca/src/assets/image_4.webp" title="Título del CardMedium 1" text="Descripción del CardMedium 1" />
      </Slider>
    </div>
  );
}

export default Carousel;