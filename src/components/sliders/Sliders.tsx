"use client";
import { Carousel as Slider } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  slider1 from "../../../public/images/Slider1.jpeg"
import  slider2 from "../../../public/images/Galeria/EDITADAS/5.png"
import  slider3 from "../../../public/images/Galeria/EDITADAS/14.png"
import  slider4 from "../../../public/images/Galeria/EDITADAS/6.png"
import  slider5 from "../../../public/images/Galeria/EDITADAS/26.png"
import Image from "next/image";

const imagesCarousel = [
  { id: 1, image: slider1 },
  { id: 2, image: slider2 },
  { id: 3, image: slider3 },
  { id: 4, image: slider4 },
  { id: 5, image: slider5 },
];

const Sliders = () => {
  return (
    <Slider
      autoPlay={true}
      interval={3000}
      dynamicHeight={true}
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}
      infiniteLoop={true}
    >
      {imagesCarousel.map((image) => (
        <div key={image.id}>
          <Image
            src={image.image}
            alt={`Imagen de Carousel${image.id}`}
            className="image-slider"
            width={1280}
            height={420}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Sliders;
