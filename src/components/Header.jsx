import { NavLink } from "react-router-dom";
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
            <NavLink className={style.header_list_link} to="/">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink className={style.header_list_link} to="/messanger">
              Мессенджер
            </NavLink>
          </li>
          <li>
            <NavLink className={style.header_list_link} to="/QnA">
              Вопросы-ответы
            </NavLink>
          </li>
          <li>
            <NavLink className={style.header_list_link} to="/feedback">
              Обратная связь
            </NavLink>
          </li>
          <li>
            <NavLink className={style.header_list_link} to="/login">
              Вход
            </NavLink>
          </li>
          <li>
            <NavLink className={style.header_list_link} to="/profile/infouser">
              Профиль
            </NavLink>
          </li>
          <li>
            <NavLink className={style.header_list_link} to="/profile/tests">
              Тесты
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={style.header_list}>
        <NavLink className={style.header_list_link} to="/">
          Главная
        </NavLink>
        <NavLink className={style.header_list_link} to="/QnA">
          Вопросы-ответы
        </NavLink>
        <NavLink className={style.header_list_link} to="/feedback">
          Обратная связь
        </NavLink>
        <NavLink className={style.header_list_link} to="/login">
          Вход
        </NavLink>
        <NavLink className={style.header_list_link} to="/profile">
          Профиль
        </NavLink>
        <NavLink className={style.header_list_link} to="/messanger">
          Мессенджер
        </NavLink>
      </div>
    </header>
  );
};
