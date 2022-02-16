import { Route } from "react-router-dom";

export const ProtectedRoute = ({ path, element, ...rest }) => {
  return <Route path={path} element={element}></Route>;
};
