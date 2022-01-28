import { FunctionComponent, useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "../../components/home/header";
import { useHttp } from "../../core/hooks/useHttp";
import "./Home.scss";

export const Home: FunctionComponent = () => {
  const [productPath, setproductPath] = useState("");
  const [product, productError, productLoading] = useHttp(productPath, "get");

  let children = null;
  if (product) {
    children = (
      <div className="product-container">
        <div className="circle" style={{ background: product.color }} />
        <span>Product name: {product.name}</span>
        <span>Price: {product.price}</span>
      </div>
    );
  } else if (productError && productError["status"] === 404) {
    children = (
      <div className="card error">{productError.headers["x-message"]}</div>
    );
  } else if (productError && productError["status"] === 401) {
    children = <Navigate to="/login" replace={true} />;
  }

  return (
    <div className="home-container">
      <Header />
      <div className="content-container">
        <div className="menu">
          <button
            onClick={() => {
              setproductPath("/api/product/1");
            }}
          >
            Product 1
          </button>
          <button
            onClick={() => {
              setproductPath("/api/product/2");
            }}
          >
            Product 2
          </button>
          <button
            onClick={() => {
              setproductPath("/api/product/3");
            }}
          >
            Product 3
          </button>
        </div>
        <div className="card content">{children}</div>
      </div>
    </div>
  );
};
