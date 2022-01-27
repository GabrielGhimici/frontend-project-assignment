import type { FunctionComponent } from "react";
import "./Login.scss";
import "../../styles/globals.scss";
import Input, { InputVariant } from "../../components/input/Input";

export const Login: FunctionComponent = () => {
  return (
    <div className="login-container">
      <div className="card">
        <div className="title align-center">Log In</div>
        <Input
          value={""}
          variant={InputVariant.Text}
          className="full-width"
          name={"userName"}
          label={"Username"}
          onChange={(value: string) => {
            console.log(value);
          }}
        />
        <Input
          value={""}
          variant={InputVariant.Password}
          className="full-width"
          name={"password"}
          label={"Password"}
          onChange={(value: string) => {
            console.log(value);
          }}
        />
        <button className="align-center">Login</button>
      </div>
    </div>
  );
};
