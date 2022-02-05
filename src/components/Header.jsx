import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import style from "./Components.module.css";

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo" className={style.header__logo} />
      <div className={style.hamburger_menu}>
        <input id="menutoggle" className={style.menu__toggle} type="checkbox" />
        <label class={style.menu__btn} for="menutoggle">
          <span></span>
        </label>

        <ul className={style.menu__box}>
          <li>
            <Link className={style.header_list_link} to="/">
              Главная
            </Link>
          </li>
          <li>
            <Link className={style.header_list_link} to="/QnA">
              Вопросы-ответы
            </Link>
          </li>
          <li>
            <Link className={style.header_list_link} to="/feedback">
              Обратная связь
            </Link>
          </li>
          <li>
            <Link className={style.header_list_link} to="/login">
              Вход
            </Link>
          </li>
          <li>
            <Link className={style.header_list_link} to="/profile/infouser">
              Профиль
            </Link>
          </li>
          <li>
            <Link to="/profile/tests" className={style.header_list_link}>
              Тесты
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.header_list}>
        <Link className={style.header_list_link} to="/">
          Главная
        </Link>
        <Link className={style.header_list_link} to="/QnA">
          Вопросы-ответы
        </Link>
        <Link className={style.header_list_link} to="/feedback">
          Обратная связь
        </Link>
        <Link className={style.header_list_link} to="/login">
          Вход
        </Link>
        <Link className={style.header_list_link} to="/profile/infouser">
          Профиль
        </Link>
      </div>
    </header>
  );
};
