import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

export default function SimpleSlider({ img }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,          // hide arrows
    autoplay: false,        // manual drag only
    draggable: true,        // drag with mouse
    swipeToSlide: true,     // enable touch swiping
    pauseOnHover: true,
    adaptiveHeight: false,
  };

  return (
    <div className="slider-container w-100 ">
      <Slider {...settings}>
        {img.map((item, index) => (
          <div key={index} className="slide vw-50 vh-75  ">
            <img src={item.img} alt="" className="slide-image w-50 h-75 " />
          </div>
        ))}
      </Slider>
    </div>
  );
}