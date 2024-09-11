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
        <CardMedium imageSrc="/marca/assets/image-4.webp" title="Título del CardMedium 1" text="Descripción del CardMedium 1" />
        <CardMedium imageSrc="/marca/assets/image-4.webp" title="Título del CardMedium 1" text="Descripción del CardMedium 1" />
        <CardMedium imageSrc="/marca/assets/image-4.webp" title="Título del CardMedium 1" text="Descripción del CardMedium 1" />
        <CardMedium imageSrc="/marca/assets/image-4.webp" title="Título del CardMedium 1" text="Descripción del CardMedium 1" />
        <CardMedium imageSrc="/marca/assets/image-4.webp" title="Título del CardMedium 1" text="Descripción del CardMedium 1" />
        <CardMedium imageSrc="/marca/assets/image-4.webp" title="Título del CardMedium 1" text="Descripción del CardMedium 1" />
      </Slider>
    </div>
  );
}

export default Carousel;