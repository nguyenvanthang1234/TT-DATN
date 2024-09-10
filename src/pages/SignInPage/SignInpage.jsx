import React, { useEffect, useState } from "react";
import InputFrom from "../../components/InputFrom/InputFrom";
import { WrapperContaierLeft, WrapperTextRight } from "./style";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slides/userSlide";
import jwt_decode from "jwt-decode";

const SignInpage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const mutation = useMutationHooks((data) => UserService.login(data));
  const { data, isLoading, isSuccess } = mutation;

  useEffect(() => {
    if (isSuccess) {
      if (location?.state) {
        navigate(location?.state);
      } else {
        navigate("/");
      }
      localStorage.setItem("access_token", JSON.stringify(data?.access_token));
      localStorage.setItem(
        "refresh_token",
        JSON.stringify(data?.refresh_token)
      );
      if (data?.access_token) {
        const decoded = jwt_decode(data?.access_token);
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token);
        }
      }
    }
  }, [isSuccess]);

  const handleGetDetailsUser = async (id, token) => {
    const storage = localStorage.getItem("refresh_token");
    const refreshToken = JSON.parse(storage);
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token, refreshToken }));
  };

  const handleSignUp = () => {
    navigate("/signUp");
  };

  const handleOnChangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnChangePasword = (value) => {
    setPassword(value);
  };

  const handleSignIn = () => {
    mutation.mutate({
      email,
      password,
    });
    console.log("sign-in", email, password);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "rgb(0,0,0,0.53)",
      }}
    >
      <div style={{ width: "600px", height: "450px", background: "#fff" }}>
        <WrapperContaierLeft>
          <h1>Xin chào</h1>
          <p>Đăng Nhập Tạo Tài khoản</p>
          <InputFrom
            style={{ marginBottom: "20px" }}
            placeholder="thang@gmail.com"
            value={email}
            onChange={handleOnChangeEmail}
          />
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputFrom
              placeholder="password"
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={handleOnChangePasword}
            />
          </div>

          {data?.status === "ERR" && (
            <span style={{ color: "red" }}>{data?.message}</span>
          )}
          <Loading isLoading={isLoading}>
            <ButtonComponent
              disabled={!email.length || !password.length}
              onClick={handleSignIn}
              size={20}
              styleButton={{
                background: "rgb(255,57,69)",
                height: "48px",
                width: "100%",
                border: "none",
                borderRadius: "4px",
                margin: "28px 0 10px",
              }}
              textButton={"Đăng Nhập"}
              styleTextButton={{ color: "#fff" }}
            />
          </Loading>
          <p>
            Chưa có tài khoản ?{" "}
            <WrapperTextRight onClick={handleSignUp}>
              Tạo tài khoản
            </WrapperTextRight>
          </p>
        </WrapperContaierLeft>
      </div>
    </div>
  );
};

export default SignInpage;
