import { Col, Image, Row } from "antd";
import React from "react";
import imageTest from "../../asset/test.webp";
import imageSmall from "../../asset/imagesmall.webp";
import {
  WrapperAddressProduct,
  WrapperColImage,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperProductname,
  WrapperQualityProduct,
  WrapperSmall,
  WrapperStyleTextSell,
} from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductDetailComponent = () => {
  const onChange = (value) => {
    console.log("changed", value);
  };

  return (
    <Row
      style={{
        padding: "16px",
        background: "#fff",
        borderRadius: "4px",
        height: "100%",
      }}
    >
      <Col span={10}>
        <Image src={imageTest} alt="Product image" preview={false} />
        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
          <WrapperColImage span={4}>
            <WrapperSmall
              src={imageSmall}
              alt="Small image 1"
              preview={false}
            />
          </WrapperColImage>
          <WrapperColImage span={4}>
            <WrapperSmall
              src={imageSmall}
              alt="Small image 2"
              preview={false}
            />
          </WrapperColImage>
          <WrapperColImage span={4}>
            <WrapperSmall
              src={imageSmall}
              alt="Small image 3"
              preview={false}
            />
          </WrapperColImage>
          <WrapperColImage span={4}>
            <WrapperSmall
              src={imageSmall}
              alt="Small image 4"
              preview={false}
            />
          </WrapperColImage>
          <WrapperColImage span={4}>
            <WrapperSmall
              src={imageSmall}
              alt="Small image 5"
              preview={false}
            />
          </WrapperColImage>
          <WrapperColImage span={4}>
            <WrapperSmall
              src={imageSmall}
              alt="Small image 6"
              preview={false}
            />
          </WrapperColImage>
        </Row>
      </Col>
      <Col span={14} style={{ paddingLeft: "10px" }}>
        <WrapperProductname>Sách - Thám Tử Lừng Danh Conan</WrapperProductname>
        <div>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <WrapperStyleTextSell> | Đã bán 100</WrapperStyleTextSell>
        </div>

        <WrapperPriceProduct>
          <WrapperPriceTextProduct>100.000</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span>Giao đến</span>
          <span className="address">Hồng Minh, Hưng Hà, Thái Bình</span>
          <span className="change-address">Đổi địa chỉ</span>
        </WrapperAddressProduct>
        <div style={{ margin: "10px 0 20px" }}>
          <div style={{ marginBottom: "6px" }}>Số lượng</div>
          <WrapperQualityProduct>
            <button style={{ border: "none", background: "transparent" }}>
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>

            <WrapperInputNumber
              size="small"
              defaultValue={3}
              min={1}
              max={10}
              onChange={onChange}
            />
            <button style={{ border: "none", background: "transparent" }}>
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
          </WrapperQualityProduct>
          <div>
            <ButtonComponent
              size={20}
              styleButton={{
                background: "rgb(255,57,69)",
                height: "48px",
                width: "220px",
                border: "none",
                borderRadius: "4px",
                marginTop: "10px",
              }}
              textButton={"Mua"}
              styleTextButton={{ color: "#fff" }}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailComponent;
