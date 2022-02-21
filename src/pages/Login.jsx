import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import style from "./Pages.module.css";

export const Login = () => {
  const { isAuth, setAuth } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://high-five.site/api/login", form, {
        withCredentials: true,
      });
      console.log(res.data.data);
      setAuth(res);
      navigate("/profile", { replace: true });
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  useEffect(() => {
    if (isAuth) {
      navigate("/profile", { replace: true });
      console.log(213213123213);
    }
  }, []);

  return (
    <form onSubmit={(data) => handleSubmit(data)}>
      <section className={style.login}>
        <h2>Авторизация</h2>
        <label htmlFor="email">E-mail</label>
        <input
          className={style.input_text_auth}
          type="email"
          placeholder="Введите E-mail"
          name="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <label htmlFor="password">Пароль</label>
        <input
          className={style.input_text_auth}
          type="password"
          autoComplete="on"
          placeholder="Введите пароль"
          name="password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {error && (
          <span style={{ color: "red" }}>Не верно введены данные.</span>
        )}
        <button type="submit">Войти</button>
        <p>
          Вы еще не зарегистрированы? &nbsp;
          <Link to="/signup" className={style.login__link_authorization}>
            Зарегистрируйтесь
          </Link>
        </p>
      </section>
    </form>
  );
};
