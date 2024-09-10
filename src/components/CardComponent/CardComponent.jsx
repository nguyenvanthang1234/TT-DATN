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

const CardComponent = (props) => {
  const {
    countInStock,
    description,
    image,
    name,
    price,
    rating,
    type,
    discount,
    selled,
    id,
  } = props;

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
      <StyleNameProduct>{name}</StyleNameProduct>
      <WrapperText>
        <span style={{ marginRight: "4px" }}>
          <span>{rating}</span>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <WrapperStyleTextSell> | Da ban {selled || 1000}+</WrapperStyleTextSell>
      </WrapperText>

      <WrapperTextPrice>
        <span style={{ marginRight: "8px" }}>{price}</span>
        <WrapperTextDiscount> - {discount || 5} %</WrapperTextDiscount>
      </WrapperTextPrice>
    </WrapperCardStyle>
  );
};

export default CardComponent;
