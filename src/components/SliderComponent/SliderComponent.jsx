import React from "react";
import Slider from "react-slick";
import { Image } from "antd";

const SliderComponent = ({ arr }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <Slider {...settings}>
      {arr.map((image) => {
        return (
          <Image src={image} width="100%" height="250px" preview={false} />
        );
      })}
    </Slider>
  );
};

export default SliderComponent;
