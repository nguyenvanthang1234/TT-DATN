import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperStyleTextSell,
  WrapperText,
  WrapperTextDiscount,
  WrapperTextPrice,
} from "./style";
import image from "../../asset/tải xuống.webp";
import { StarFilled } from "@ant-design/icons";

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      style={{
        width: 200,
      }}
      bodyStyle={{ padding: "10px" }}
      cover={<img alt="example" src={image} />}
    >
      <StyleNameProduct>Androi</StyleNameProduct>
      <WrapperText>
        <span style={{ marginRight: "4px" }}>
          <span> 5.00</span>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <WrapperStyleTextSell> |Da ban 100</WrapperStyleTextSell>
      </WrapperText>

      <WrapperTextPrice>
        <span style={{ marginRight: "8px" }}>2.000.000</span>
        <WrapperTextDiscount>-5%</WrapperTextDiscount>
      </WrapperTextPrice>
    </WrapperCardStyle>
  );
};

export default CardComponent;
