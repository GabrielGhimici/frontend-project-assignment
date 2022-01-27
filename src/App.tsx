import type { FunctionComponent } from "react";
import "./App.scss";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import "./mocks/authentication";
import "./mocks/product";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ProtectedRoute } from "./components/protected-route/ProtectedRoute";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path={"/login"} element={<Login />}></Route>
          <Route
            path={"/home"}
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
