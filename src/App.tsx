import React, { useEffect } from "react";
import "./App.scss";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import "./mocks/authentication";
import "./mocks/product";
import http from "./core/http";

function App() {
  useEffect(() => {
    const test = async () => {
      try {
        const response = await http.get("/api/product/3");
        console.log(response.data);
      } catch (e: any) {
        console.log(e.response);
      }
    };

    test();
  }, []);
  return (
    <div className="App">
      <Login />
      <Home />
    </div>
  );
}

export default App;
