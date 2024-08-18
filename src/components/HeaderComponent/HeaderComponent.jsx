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

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>Nguyen van thang</WrapperTextHeader>
        </Col>

        <Col span={12}>
          <ButtonInputSearch
            size="large"
            placeholder="input search text"
            textButton="tim kiem"
          />
        </Col>

        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <WrapperHeaderAccount>
            <WapperUserOutlined />
            <div>
              <WrapperTextHeaderSmall>
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
