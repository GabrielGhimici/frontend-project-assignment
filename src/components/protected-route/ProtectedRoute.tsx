import type { FunctionComponent } from "react";
import { useAuth } from "../../core/hooks/useAuth";
import { Navigate } from "react-router-dom";

export const ProtectedRoute: FunctionComponent = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }
  return <>{children}</>;
};
