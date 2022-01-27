import { mockedHttp } from "../core/http";

const product = {
  id: 1,
  name: "product1",
  price: 3.14,
  color: "red",
};

mockedHttp.onGet("/api/product/1").reply(200, { ...product });

mockedHttp
  .onGet("/api/product/3")
  .reply(401, null, { "x-message": "You are not authorized!" });

mockedHttp
  .onGet(/\/api\/product\/\d+/)
  .reply(404, null, { "x-message": "Product not found" });
