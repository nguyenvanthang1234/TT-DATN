import React from "react";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WapperUserOutlined,
  WrapperTextHeaderSmall,
} from "./styles";
import { Col } from "antd";

import { CaretDownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/signIn");
  };
  return (
    <div
      style={{
        heiht: "100%",
        width: "100%",
        display: "flex",
        background: "rgb(249, 78, 47)",
        justifyContent: "center",
      }}
    >
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader>Nguyen van thang</WrapperTextHeader>
        </Col>

        <Col span={13}>
          <ButtonInputSearch
            size="large"
            placeholder="input search text"
            textButton="tim kiem"
            bordered={false}
          />
        </Col>

        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <WrapperHeaderAccount>
            <WapperUserOutlined />
            <div>
              <WrapperTextHeaderSmall
                onClick={handleLogin}
                style={{ cursor: "pointer" }}
              >
                Đăng Nhập /Đăng Kí
              </WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            {/* <Badge count={4} size="small" /> */}
            <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
            <WrapperTextHeaderSmall />
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
