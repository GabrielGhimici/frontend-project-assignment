import { useContext } from "react";
import { AuthenticationContext } from "../contexts/AuthenticationContext";

export const useAuth = () => {
  return useContext(AuthenticationContext);
};
