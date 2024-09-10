import React, { useEffect } from "react";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WapperUserOutlined,
  WrapperTextHeaderSmall,
  WrapperContentPopup,
} from "./styles";
import { Col, Popover } from "antd";
import * as UserService from "../../services/UserService";

import { CaretDownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../../redux/slides/userSlide";
import { useState } from "react";
import Loading from "../LoadingComponent/Loading";

const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const [userAvatar, setUserAvatar] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    navigate("/signIn");
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await UserService.logoutUser();
      localStorage.removeItem("access_token");
      dispatch(resetUser());
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setUserName(user?.name);
    setUserAvatar(user?.avatar);
    setLoading(false);
  }, [user?.name, user?.avatar]);

  const content = (
    <div>
      <WrapperContentPopup onClick={handleLogout}>
        Đăng xuất
      </WrapperContentPopup>
      <WrapperContentPopup onClick={() => navigate("/profile-user")}>
        Thông tin người dùng
      </WrapperContentPopup>
      {user?.isAdmin && (
        <WrapperContentPopup onClick={() => navigate("/system/admin")}>
          Quản Lý Hệ Thống
        </WrapperContentPopup>
      )}
    </div>
  );

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
      <WrapperHeader
        style={{
          justifyContent:
            isHiddenSearch && isHiddenSearch ? "space-between" : "unset",
        }}
      >
        <Col span={5}>
          <WrapperTextHeader>Nguyen van thang</WrapperTextHeader>
        </Col>
        {!isHiddenSearch && (
          <Col span={13}>
            <ButtonInputSearch
              size="large"
              placeholder="input search text"
              textButton="tim kiem"
              bordered={false}
            />
          </Col>
        )}

        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <Loading isLoading={loading}>
            <WrapperHeaderAccount>
              {userAvatar ? (
                <img
                  src={userAvatar}
                  alt="avatar"
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <WapperUserOutlined style={{ fontSize: "30px" }} />
              )}
              {user?.access_token ? (
                <>
                  <Popover placement="bottom" content={content}>
                    <div> {userName?.length ? userName : user?.email}</div>
                  </Popover>
                </>
              ) : (
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
              )}
            </WrapperHeaderAccount>
          </Loading>
          {!isHiddenCart && (
            <div>
              {/* <Badge count={4} size="small" /> */}
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "#fff" }}
              />
              <WrapperTextHeaderSmall />
            </div>
          )}
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
