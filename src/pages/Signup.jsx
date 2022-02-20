import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Pages.module.css";

export const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const res = await axios.post(
        "https://high-five.site/api/register",
        form,
        { withCredentials: true }
      );
      console.log(res);
      navigate("/login");
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
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
          value={form.first_name}
          onChange={(e) => setForm({ ...form, first_name: e.target.value })}
        />
        <input
          className={style.input_text_auth}
          type="text"
          placeholder="Введите Фамилию"
          name="last_name"
          required
          value={form.last_name}
          onChange={(e) => setForm({ ...form, last_name: e.target.value })}
        />
        <input
          className={style.input_text_auth}
          type="text"
          placeholder="Введите Отчество"
          name="middle_name"
          required
          value={form.middle_name}
          onChange={(e) => setForm({ ...form, middle_name: e.target.value })}
        />
        <input
          className={style.input_text_auth}
          type="email"
          placeholder="Введите E-mail"
          name="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className={style.input_text_auth}
          type="password"
          autoComplete="on"
          placeholder="Введите Пароль"
          name="password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {error && (
          <span style={{ color: "red" }}>Не верно введены данные.</span>
        )}
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
