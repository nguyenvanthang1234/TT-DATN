import React from "react";
import { Image } from "antd";
import { WrapperSliderStyle } from "./style";

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
    <WrapperSliderStyle {...settings}>
      {arr.map((image) => {
        return (
          <Image
            key={image}
            src={image}
            width="100%"
            height="250px"
            preview={false}
          />
        );
      })}
    </WrapperSliderStyle>
  );
};

export default SliderComponent;
