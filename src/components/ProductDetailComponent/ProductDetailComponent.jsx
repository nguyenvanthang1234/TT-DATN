import { Col, Image, Rate, Row } from "antd";
import React, { useEffect, useState } from "react";

import * as ProductService from "../../services/ProductService";

import {
  WrapperAddressProduct,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperProductname,
  WrapperQualityProduct,
  WrapperStyleTextSell,
} from "./style";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useQuery } from "@tanstack/react-query";
import Loading from "../LoadingComponent/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addOrderProduct, resetOrder } from "../../redux/slices/orderSlice";
import { convertPrice } from "../../utils";
import * as message from "../Message/Message";
const ProductDetailComponent = ({ idProduct }) => {
  const [numProduct, setNumProduct] = useState(1);
  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [errorLimitOrder, setErrorLimitOrder] = useState(false);
  const onChange = (value) => {
    console.log("changed", value);
  };

  const fetchGetDetailsProduct = async (context) => {
    const id = context?.queryKey && context?.queryKey[1];
    if (id) {
      const res = await ProductService.getDetailsProduct(id);
      return res.data;
    }
  };
  useEffect(() => {
    const orderRedux = order?.orderItems?.find((item) => item.product === ProductDetails?._id);
    if (
      orderRedux?.amount + numProduct <= orderRedux?.countInstock ||
      (!orderRedux && ProductDetails?.countInStock > 0)
    ) {
      setErrorLimitOrder(false);
    } else if (ProductDetails?.countInStock === 0) {
      setErrorLimitOrder(true);
    }
  }, [numProduct]);

  useEffect(() => {
    if (order.isSuccessOrder) {
      message.success("đã thêm vào giỏ hàng");
    }
    return () => {
      dispatch(resetOrder());
    };
  }, [order.isSuccessOrder]);

  const handleChangeCount = (type, limited) => {
    if (type === "increase") {
      if (!limited) {
        setNumProduct(numProduct + 1);
      }
    } else {
      if (!limited) {
        setNumProduct(numProduct - 1);
      }
    }
  };

  const { isLoading, data: ProductDetails } = useQuery(["product-details", idProduct], fetchGetDetailsProduct, {
    enabled: !!idProduct,
  });

  const handleAddOrderProduct = () => {
    if (!user?.id) {
      navigate("/sign-in", { state: location?.pathname });
    } else {
      const orderRedux = order?.orderItems?.find((item) => item.product === ProductDetails?._id);
      if (
        orderRedux?.amount + numProduct <= orderRedux?.countInStock ||
        (!orderRedux && ProductDetails?.countInStock > 0)
      ) {
        dispatch(
          addOrderProduct({
            orderItem: {
              name: ProductDetails?.name,
              amount: numProduct,
              image: ProductDetails?.image,
              price: ProductDetails?.price,
              product: ProductDetails?._id,
              discount: ProductDetails?.discount,
              countInStock: ProductDetails?.countInStock,
            },
          })
        );
      } else {
        setErrorLimitOrder(true);
      }
    }
  };

  return (
    <Loading isLoading={isLoading}>
      <Row
        style={{
          padding: "16px",
          background: "#fff",
          borderRadius: "4px",
          height: "100%",
        }}
      >
        <Col span={10}>
          <Image src={ProductDetails?.image} alt="Product image" preview={false} />
        </Col>
        <Col span={14} style={{ paddingLeft: "10px" }}>
          <WrapperProductname>{ProductDetails?.name}</WrapperProductname>
          <div>
            <Rate allowHalf defaultValue={ProductDetails?.rating} value={ProductDetails?.rating}></Rate>

            <WrapperStyleTextSell>1000</WrapperStyleTextSell>
          </div>

          <WrapperPriceProduct>
            <WrapperPriceTextProduct>{convertPrice(ProductDetails?.price)}</WrapperPriceTextProduct>
          </WrapperPriceProduct>
          <WrapperAddressProduct>
            <span>Giao đến</span>
            <span className="address"> {user?.address} </span>
            <span className="change-address"> Đổi địa chỉ</span>
          </WrapperAddressProduct>
          <div style={{ margin: "10px 0 20px" }}>
            <div style={{ marginBottom: "6px" }}>Số lượng</div>
            <WrapperQualityProduct>
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
                onClick={() => handleChangeCount("decrease", numProduct === 1)}
              >
                <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
              </button>
              <WrapperInputNumber
                onChange={onChange}
                defaultValue={1}
                max={ProductDetails?.countInStock}
                min={1}
                value={numProduct}
                size="small"
              />
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
                onClick={() => handleChangeCount("increase", numProduct === ProductDetails?.countInStock)}
              >
                <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
              </button>
            </WrapperQualityProduct>
            {errorLimitOrder && <div style={{ color: "red" }}> sản phẩm hết hàng</div>}

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
                onClick={handleAddOrderProduct}
                styleTextButton={{ color: "#fff" }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Loading>
  );
};

export default ProductDetailComponent;
