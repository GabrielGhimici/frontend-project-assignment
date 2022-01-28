import type { FunctionComponent } from "react";
import { useState } from "react";
import "./Login.scss";
import Input, { InputVariant } from "../../components/input/Input";

export const Login: FunctionComponent = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-container">
      <div className="card">
        <div className="title align-center">Log In</div>
        <Input
          value={userName}
          variant={InputVariant.Text}
          className="full-width"
          name={"userName"}
          label={"Username"}
          onChange={(value: string) => {
            setUserName(value)
          }}
        />
        <Input
          value={password}
          variant={InputVariant.Password}
          className="full-width"
          name={"password"}
          label={"Password"}
          onChange={(value: string) => {
            setPassword(value)
          }}
        />
        <button className="align-center">Login</button>
      </div>
    </div>
  );
};
