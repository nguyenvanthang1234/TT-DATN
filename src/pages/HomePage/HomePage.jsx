import React, { useEffect, useState } from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButton, WrapperProduct, WrapperTypeProduct } from "./style";
import image1 from "../../asset/vn-11134258-7r98o-lyxd0k3tevrh7e_xxhdpi.jfif";
import image2 from "../../asset/vn-11134258-7r98o-lyxd57fujfwt3a_xxhdpi.jfif";
import image3 from "../../asset/vn-11134258-7r98o-lyxdfg6axw2p16_xxhdpi (1).jfif";
import image4 from "../../asset/vn-11134258-7r98o-lyxdfg6axw2p16_xxhdpi.jfif";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { useSelector } from "react-redux";
import Loading from "../../components/LoadingComponent/Loading";
import { useDebounce } from "../../hooks/useDebounce";
import * as ProductService from "../../services/ProductService";
import { useQuery } from "@tanstack/react-query";
const HomePage = () => {
  const searchProduct = useSelector((state) => state?.product?.search);
  const searchDebounce = useDebounce(searchProduct, 500);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(6);

  const [typeProducts, setTypeProducts] = useState([]);

  const fetchProductAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1];
    const search = context?.queryKey && context?.queryKey[2];
    const res = await ProductService.getAllProduct(search, limit);
    return res;
  };

  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct();
    if (res?.status === "OK") {
      setTypeProducts(res?.data);
    }
  };
  const {
    isLoading,
    data: products,
    isPreviousData,
  } = useQuery(["products", limit, searchDebounce], fetchProductAll, {
    retry: 3,
    retryDelay: 1000,
    keepPreviousData: true,
  });

  useEffect(() => {
    fetchAllTypeProduct();
  }, []);

  return (
    <Loading isLoading={isLoading || loading}>
      <div style={{ width: "1270px", margin: "0 auto" }}>
        <WrapperTypeProduct>
          {Array.isArray(typeProducts) && typeProducts.map((item) => <TypeProduct name={item} key={item} />)}
        </WrapperTypeProduct>
      </div>
      <div className="body" style={{ width: "100%", backgroundColor: "#efefef" }}>
        <div
          id="container"
          style={{
            margin: "0 auto",
            height: "1000px",
            width: "1280px",
          }}
        >
          <SliderComponent arr={[image1, image2, image3, image4]} />
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "30px",
            }}
          >
            <WrapperProduct>
              {products?.data.map((product) => {
                return (
                  <CardComponent
                    key={product._id}
                    countInStock={product.countInStock}
                    description={product.description}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    rating={product.rating}
                    type={product.type}
                    selled={product.selled}
                    discount={product.discount}
                    id={product._id}
                  />
                );
              })}
            </WrapperProduct>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <WrapperButton
              textButton={isPreviousData ? "load more " : "Xem Thêm"}
              type="outline"
              styleButton={{
                border: "1px solid rgb(255,57,69)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "240px",
                height: "38px",
                borderRadius: "4px",
                color: "rgb(255,57,69)",
              }}
              styleTextButton={{ fontWeight: "500" }}
              onClick={() => setLimit((prev) => prev + 6)}
              disabled={products?.total === products?.data.length || products?.totalPage === 1}
            />
          </div>
        </div>
      </div>
    </Loading>
  );
};

export default HomePage;
