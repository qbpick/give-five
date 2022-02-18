import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import style from "./Components.module.css";
// window.localStorage.setItem("token", JSON.stringify({ token: "zalupa" }));
export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo" className={style.header__logo} />
      <div className={style.hamburger_menu}>
        <input id="menutoggle" className={style.menu__toggle} type="checkbox" />
        <label className={style.menu__btn} htmlFor="menutoggle">
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

          {window.localStorage.getItem("token") &&
          JSON.parse(window.localStorage.getItem("token"))?.token ? (
            <>
              <li>
                <NavLink
                  className={style.header_list_link}
                  to="/profile/infouser"
                >
                  Профиль
                </NavLink>
              </li>
              <li>
                <NavLink className={style.header_list_link} to="/profile/tests">
                  Тесты
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink className={style.header_list_link} to="/login">
                Вход
              </NavLink>
            </li>
          )}
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

        {window.localStorage.getItem("token") &&
        JSON.parse(window.localStorage.getItem("token"))?.token ? (
          <>
            <NavLink className={style.header_list_link} to="/profile">
              Профиль
            </NavLink>
            <NavLink className={style.header_list_link} to="/messanger">
              Мессенджер
            </NavLink>
          </>
        ) : (
          <NavLink className={style.header_list_link} to="/login">
            Вход
          </NavLink>
        )}
      </div>
    </header>
  );
};
