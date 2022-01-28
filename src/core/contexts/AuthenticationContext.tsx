import { createContext, useState } from "react";
import { useCookies } from "react-cookie";
import http from "../http";

interface User {
  userName: string;
  firstName: string;
  lastName: string;
}

interface Credentials {
  userName: string;
  password: string;
}

interface AuthenticationContextType {
  errorMessage: string;
  user: User | null;
  signIn: (payload: Credentials, callback?: VoidFunction) => void;
  signOut: (callback?: VoidFunction) => void;
  setErrorMessage: (message: string) => void;
}

export const AuthenticationContext = createContext<AuthenticationContextType>(
  null!
);

export const AuthenticationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [cookies, setCookie, removeCookie] = useCookies(["product-cookie"]);

  const signIn = (payload: Credentials, callback?: VoidFunction) => {
    setUser(null);
    setErrorMessage("");
    http
      .post("/api/login", payload)
      .then((response) => {
        setUser(response.data);
        setCookie("product-cookie", "loggedIn", { maxAge: 300 });
        if (callback) {
          callback();
        }
      })
      .catch((error: any) => {
        let errorMessage = "";
        if (error.response && error.response.headers["x-message"]) {
          errorMessage = error.response.headers["x-message"]
            ? error.response.headers["x-message"]
            : "Unknown error";
        } else {
          errorMessage = error.toJSON().message;
        }
        setErrorMessage(errorMessage);
      });
  };

  const signOut = () => {
    setErrorMessage("");
    http.post("/api/logout").then(() => {
      setUser(null);
      removeCookie("product-cookie");
    });
  };

  const value = { user, signIn, signOut, errorMessage, setErrorMessage };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};
