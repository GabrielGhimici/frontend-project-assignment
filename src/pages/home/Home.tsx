import type { FunctionComponent } from "react";
import Header from "../../components/home/header";
import "./Home.scss";

export const Home: FunctionComponent = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="content-container">
        <div className="menu">
          <button>Product 1</button>
          <button>Product 2</button>
          <button>Product 3</button>
        </div>
        <div className="card content"></div>
      </div>
    </div>
  );
};
