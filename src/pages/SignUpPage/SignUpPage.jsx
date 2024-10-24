import React, { useEffect } from "react";
import { WrapperContainerLeft, WrapperTextRight } from "./style";
import InputFrom from "../../components/InputFrom/InputFrom";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/LoadingComponent/Loading";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as message from "../../components/Message/Message";

const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signIn");
  };

  const handleOnChangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnChangePassword = (value) => {
    setPassword(value);
  };
  const handleOnChangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };

  const mutation = useMutationHooks((data) => UserService.signUpUser(data));

  const { data, isLoading, isSuccess, isError, error } = mutation;

  useEffect(() => {
    if (isSuccess) {
      message.success("Đăng kí thành công");
      setTimeout(handleSignIn, 2000);
    } else if (isError) {
      const errorMessage = error.response?.data?.message || "Đã xảy ra lỗi!";
      message.error(errorMessage);
    }
  }, [isSuccess, isError, data, error]);

  const handleSignUp = (value) => {
    mutation.mutate({
      email,
      password,
      confirmPassword,
    });
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
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p> Tạo Tài khoản</p>

          <div>
            <InputFrom
              style={{ marginBottom: "20px" }}
              placeholder="thang@gmail.com"
              value={email}
              onChange={handleOnChangeEmail}
            />
          </div>

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
              style={{ marginBottom: "10px" }}
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={handleOnChangePassword}
            />
          </div>

          <div style={{ position: "relative" }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
            >
              {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputFrom
              placeholder="confirm password"
              type={isShowConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleOnChangeConfirmPassword}
            />
          </div>
          {/* 
          {data?.status === "ERR" && (
            <span style={{ color: "red" }}>{data?.message}</span>
          )} */}
          <Loading isLoading={isLoading}>
            <ButtonComponent
              disabled={
                !email.length || !password.length || !confirmPassword.length
              }
              onClick={handleSignUp}
              size={20}
              styleButton={{
                background: "rgb(255,57,69)",
                height: "48px",
                width: "100%",
                border: "none",
                borderRadius: "4px",
                margin: "28px 0 10px",
              }}
              textButton={"Đăng Kí"}
              styleTextButton={{ color: "#fff" }}
            />
          </Loading>
          <p>
            Bạn có tài khoản ?{" "}
            <WrapperTextRight onClick={handleSignIn}>
              Đăng Nhập{" "}
            </WrapperTextRight>
          </p>
        </WrapperContainerLeft>
      </div>
    </div>
  );
};

export default SignUpPage;
