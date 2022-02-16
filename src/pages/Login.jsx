import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Pages.module.css";

export const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const res = await axios.post("/login", { data });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

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
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label htmlFor="password">Пароль</label>
        <input
          className={style.input_text_auth}
          type="password"
          placeholder="Введите пароль"
          name="password"
          required
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
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
