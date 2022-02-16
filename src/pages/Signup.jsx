import { Link } from "react-router-dom";
import style from "./Pages.module.css";

export const Signup = () => {
  return (
    <section className={style.signup_section}>
      <h2>Регистрация</h2>
      <input
        className={style.input_text_auth}
        type="text"
        placeholder="Введите Имя"
        name="first_name"
      />
      <input
        className={style.input_text_auth}
        type="text"
        placeholder="Введите Фамилию"
        name="last_name"
      />
      <input
        className={style.input_text_auth}
        type="text"
        placeholder="Введите Отчество"
        name="middle_name"
      />
      <input
        className={style.input_text_auth}
        type="email"
        placeholder="Введите E-mail"
        name="email"
      />
      <input
        className={style.input_text_auth}
        type="password"
        placeholder="Введите Пароль"
        name="password"
      />
      <button>Зарегистрироваться</button>
      <p>
        Уже имеется аккаунт? &nbsp;
        <Link className={style.login__link_authorization} to="/login">
          Авторизуйтесь
        </Link>
      </p>
    </section>
  );
};
