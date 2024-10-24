import React from "react";
import NabarComponent from "../../components/NabarComponent/NabarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperProduct } from "./style";

const TypeProductPage = () => {
  return (
    <div style={{ padding: "0 120px", background: "#efefef" }}>
      <Row
        style={{
          background: "#efefef",
          paddingTop: "10px",
          flexWrap: "nowrap",
        }}
      >
        <WrapperNavbar
          span={4}
          style={{
            background: "#fff",
            paddingRight: "20px",
            borderRadius: "6px",
          }}
        >
          <NabarComponent />
        </WrapperNavbar>
        <Col span={20}>
          <WrapperProduct>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProduct>
          <Pagination
            total={50}
            defaultCurrent={2}
            style={{ textAlign: "center", margin: "10px" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TypeProductPage;
