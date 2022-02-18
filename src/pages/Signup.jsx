import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Pages.module.css";

export const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const reqData = JSON.stringify(data);
    try {
      const res = await axios.post("https://high-five.site/api/register", {
        reqData,
      });
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error.error);
      setError(error.error.message);
    }
  };

  return (
    <form onSubmit={(data) => handleSubmit(data)}>
      <section className={style.signup_section}>
        <h2>Регистрация</h2>
        <input
          className={style.input_text_auth}
          type="text"
          placeholder="Введите Имя"
          name="first_name"
          required
          value={data.first_name}
          onChange={(e) => setData({ ...data, first_name: e.target.value })}
        />
        <input
          className={style.input_text_auth}
          type="text"
          placeholder="Введите Фамилию"
          name="last_name"
          required
          value={data.last_name}
          onChange={(e) => setData({ ...data, last_name: e.target.value })}
        />
        <input
          className={style.input_text_auth}
          type="text"
          placeholder="Введите Отчество"
          name="middle_name"
          required
          value={data.middle_name}
          onChange={(e) => setData({ ...data, middle_name: e.target.value })}
        />
        <input
          className={style.input_text_auth}
          type="email"
          placeholder="Введите E-mail"
          name="email"
          required
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          className={style.input_text_auth}
          type="password"
          placeholder="Введите Пароль"
          name="password"
          required
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        {error}
        <button type="submit">Зарегистрироваться</button>
        <p>
          Уже имеется аккаунт? &nbsp;
          <Link className={style.login__link_authorization} to="/login">
            Авторизуйтесь
          </Link>
        </p>
      </section>
    </form>
  );
};
