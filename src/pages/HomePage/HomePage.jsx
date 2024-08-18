import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButton, WrapperProduct, WrapperTypeProduct } from "./style";
import image1 from "../../asset/vn-11134258-7r98o-lyxd0k3tevrh7e_xxhdpi.jfif";
import image2 from "../../asset/vn-11134258-7r98o-lyxd57fujfwt3a_xxhdpi.jfif";
import image3 from "../../asset/vn-11134258-7r98o-lyxdfg6axw2p16_xxhdpi (1).jfif";
import image4 from "../../asset/vn-11134258-7r98o-lyxdfg6axw2p16_xxhdpi.jfif";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";

const HomePage = () => {
  const arr = ["tv", "tu lanh", "laptop"];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        id="container"
        style={{
          backgroundColor: "#efefef",
          padding: "0 120px",
          height: "1000px",
        }}
      >
        <SliderComponent arr={[image1, image2, image3, image4]} />
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          <WrapperProduct>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProduct>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <WrapperButton
            textButton="Xem Thêm"
            type="outline"
            styleButton={{
              border: "1px solid rgb(255,57,69)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "240px",
              height: "38px",
              borderRadius: "4px",
              color: "rgb(255,57,69)",
            }}
            styleTextButton={{ fontWeight: "500" }}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
