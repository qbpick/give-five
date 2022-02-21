import { useState } from "react";

export const useAuth = () => {
  const checkAuth = () => {
    return window.localStorage.getItem("token")
      ? JSON.parse(window.localStorage.getItem("token"))?.token
      : "";
  };
  const [isAuth, setAuth] = useState(checkAuth());
  const setUser = (res) => {
    window.localStorage.setItem("token", JSON.stringify(res.data.data));
    setAuth(res.data.data);
  };
  return {
    setAuth: setUser,
    isAuth,
  };
};
