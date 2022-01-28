import type { FunctionComponent } from "react";
import { useAuth } from "../../../core/hooks/useAuth";
import "./Header.scss";

export const Header: FunctionComponent = () => {
  const { user, signOut } = useAuth();
  return (
    <div className="header-container">
      <span className="user">
        Hello {user ? `${user.firstName} ${user.lastName}` : "..."}
      </span>
      <button
        onClick={() => {
          signOut();
        }}
      >
        LogOut
      </button>
    </div>
  );
};
