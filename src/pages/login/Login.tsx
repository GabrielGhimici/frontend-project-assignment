import type { FunctionComponent } from "react";
import { useState } from "react";
import "./Login.scss";
import Input, { InputVariant } from "../../components/input/Input";
import { useAuth } from "../../core/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Login: FunctionComponent = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, errorMessage } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="login-container">
      {errorMessage && (
        <div className="card error align-center">{errorMessage}</div>
      )}
      <div className="card">
        <div className="title align-center">Log In</div>
        <Input
          value={userName}
          variant={InputVariant.Text}
          className="full-width"
          name={"userName"}
          label={"Username"}
          onChange={(value: string) => {
            setUserName(value);
          }}
        />
        <Input
          value={password}
          variant={InputVariant.Password}
          className="full-width"
          name={"password"}
          label={"Password"}
          onChange={(value: string) => {
            setPassword(value);
          }}
        />
        <button
          className="align-center"
          onClick={() => {
            signIn({ userName, password }, () => {
              navigate("../home");
            });
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};
