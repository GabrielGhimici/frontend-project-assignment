import { mockedHttp } from "../core/http";

const user = {
  userName: "user",
  firstName: "John",
  lastNmae: "Doe",
};

mockedHttp
  .onPost("/api/login", {
    userName: "user",
    password: "pass",
  })
  .reply(200, { ...user });

mockedHttp
  .onPost("/api/login")
  .reply(401, null, { "x-message": "You are not authorized!" });

mockedHttp.onPost("/api/logout").reply(200, { success: true });
