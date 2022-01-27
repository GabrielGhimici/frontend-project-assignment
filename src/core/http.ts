import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

const http = axios.create();

export const mockedHttp = new AxiosMockAdapter(http, {
  delayResponse: 0,
  onNoMatch: "throwException",
});

export default http;
