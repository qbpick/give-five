import { Link } from "react-router-dom";
import style from "./Pages.module.css";

export const Login = () => {
  return (
    <section className={style.login}>
      <h2>Авторизация</h2>
      <label htmlFor="email">E-mail</label>
      <input
        className={style.input_text_auth}
        type="email"
        placeholder="Введите E-mail"
        name="email"
      />
      <label htmlFor="password">Пароль</label>
      <input
        className={style.input_text_auth}
        type="password"
        placeholder="Введите пароль"
        name="password"
      />
      <button>Войти</button>
      <p>
        Вы еще не зарегистрированы? &nbsp;
        <Link to="/signup" className={style.login__link_authorization}>
          Зарегистрируйтесь
        </Link>
      </p>
    </section>
  );
};
