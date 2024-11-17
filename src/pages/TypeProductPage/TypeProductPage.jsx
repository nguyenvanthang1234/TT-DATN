import React, { useEffect, useState } from "react";
import NabarComponent from "../../components/NabarComponent/NabarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperProduct } from "./style";
import { useLocation } from "react-router-dom";
import * as ProductService from "../../services/ProductService";
import Loading from "../../components/LoadingComponent/Loading";
import { useDebounce } from "../../hooks/useDebounce";
import { useSelector } from "react-redux";
const TypeProductPage = () => {
  const searchProduct = useSelector((state) => state?.product?.search);
  const searchDebounce = useDebounce(searchProduct, 500);

  const { state } = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);

  const [panigate, setPanigate] = useState({
    page: 0,
    limit: 10,
    total: 1,
  });
  const fetchProductType = async (type) => {
    setLoading(true);
    const res = await ProductService.getProductType(type);
    if (res?.status === "OK") {
      setLoading(false);
      setProducts(res?.data);
      setPanigate({ ...panigate, total: res?.total });
    }
    return res;
  };

  useEffect(() => {
    if (state) {
      fetchProductType(state, panigate.page, panigate.limit);
    }
  }, [state]);

  const onChange = (current, pageSize) => {
    setPanigate({ ...panigate, page: current - 1, limit: pageSize });
  };
  return (
    <Loading isLoading={loading}>
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
              {products
                ?.filter((pro) => {
                  if (searchDebounce === "") {
                    return pro;
                  } else if (pro?.name?.toLowerCase()?.includes(searchDebounce?.toLowerCase())) {
                    return pro;
                  }
                })
                ?.map((product) => {
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
            <Pagination
              onChange={onChange}
              total={panigate?.total}
              defaultCurrent={panigate.page + 1}
              style={{ textAlign: "center", margin: "10px" }}
            />
          </Col>
        </Row>
      </div>
    </Loading>
  );
};

export default TypeProductPage;
