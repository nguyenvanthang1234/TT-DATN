import React from "react";
import ProductDetailComponent from "../../components/ProductDetailComponent/ProductDetailComponent";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div
      style={{ padding: "0 120px", background: "#efefef", height: "1000px" }}
    >
      <h5>
        <span
          style={{ cursor: "pointer", fontWeight: "bold" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Trang chủ
        </span>{" "}
        - Chi tiết sản phẩm
      </h5>
      <ProductDetailComponent idProduct={id} />
    </div>
  );
};

export default ProductDetailPage;
