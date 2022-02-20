import style from "./Components.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export const Navmenu = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      // const res = await axios.post("https://high-five.site/api/logout", {
      //   withCredentials: true,
      // });
      // console.log(res);
      window.localStorage.clear();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={style.navmenu}>
      <Link to="infouser" className={style.navmenu_link}>
        Мой профиль
      </Link>
      <Link to="tests" className={style.navmenu_link}>
        Тесты
      </Link>
      {window.localStorage.getItem("user") &&
      JSON.parse(window.localStorage.getItem("user"))?.data.role ===
        "expert" ? (
        <Link to="find_expert" className={style.navmenu_link}>
          Найти эксперта
        </Link>
      ) : (
        ""
      )}
      <Link to="find_expert" className={style.navmenu_link}>
        Найти эксперта
      </Link>
      {/* У эксперта видать те же самые линки, кроме найти эксперта */}

      {/* Дальше линки учителя идут */}
      {window.localStorage.getItem("user") &&
      JSON.parse(window.localStorage.getItem("user"))?.data.role ===
        "teacher" ? (
        <Link to="create_test" className={style.navmenu_link}>
          Создать тест
        </Link>
      ) : (
        ""
      )}
      {window.localStorage.getItem("user") &&
      JSON.parse(window.localStorage.getItem("user"))?.data.role === "admin" ? (
        <>
          <Link to="give_permission_user" className={style.navmenu_link}>
            Дать Права
          </Link>
          <Link to="find_expert" className={style.navmenu_link}>
            Найти эксперта
          </Link>
          <Link to="create_test" className={style.navmenu_link}>
            Создать тест
          </Link>
        </>
      ) : (
        ""
      )}
      <span
        onClick={handleLogout}
        className={style.navmenu_link}
        style={{ color: "red" }}
      >
        ВЫХОД
      </span>
    </section>
  );
};
