import { Route } from "react-router-dom";
import { Login } from "../pages/Login";

export const ProtectedRoute = ({ path, element, ...rest }) => {
  return (
    <>
      {window.localStorage.getItem("token") &&
      JSON.parse(window.localStorage.getItem("token"))?.token ? (
        <Route path={path} element={<element />}></Route>
      ) : (
        <Route path="/login" element={<Login />} />
      )}
    </>
  );
};
