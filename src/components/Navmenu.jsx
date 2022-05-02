import style from "./Components.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
export const Navmenu = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.localStorage.getItem("token") &&
    JSON.parse(window.localStorage.getItem("token"))?.role === "admin"
      ? (async () => {
          try {
            const res = await axios.get(
              "https://high-five.site/api/admin/info",
              {
                withCredentials: true,
              }
            );
          } catch (err) {
            let code = err.message;
            code = code.slice(code.length - 3, code.length);
            if (code == "401") {
              localStorage.clear("token");
              navigate("/login");
            }
          }
        })()
      : window.localStorage.getItem("token") &&
        JSON.parse(window.localStorage.getItem("token"))?.role === "teacher"
      ? (async () => {
          try {
            const res = await axios.get(
              "https://high-five.site/api/teacher/info",
              {
                withCredentials: true,
              }
            );
          } catch (err) {
            let code = err.message;
            code = code.slice(code.length - 3, code.length);
            if (code == "401") {
              localStorage.clear("token");
              navigate("/login");
            }
          }
        })()
      : window.localStorage.getItem("token") &&
        JSON.parse(window.localStorage.getItem("token"))?.role === "expert"
      ? (async () => {
          try {
            const res = await axios.get(
              "https://high-five.site/api/expert/info",
              {
                withCredentials: true,
              }
            );
          } catch (err) {
            let code = err.message;
            code = code.slice(code.length - 3, code.length);
            if (code == "401") {
              localStorage.clear("token");
              navigate("/login");
            }
          }
        })()
      : (async () => {
          try {
            const res = await axios.get(
              "https://high-five.site/api/user/info",
              {
                withCredentials: true,
              }
            );
          } catch (err) {
            let code = err.message;
            code = code.slice(code.length - 3, code.length);
            if (code == "401") {
              localStorage.clear("token");
              navigate("/login");
            }
          }
        })();
  }, []);
  const handleLogout = async () => {
    try {
      const res = await axios.post("https://high-five.site/api/logout", {
        withCredentials: true,
      });
      console.log(res);
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
      {window.localStorage.getItem("token") &&
      JSON.parse(window.localStorage.getItem("token"))?.role === "expert" ? (
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
      {window.localStorage.getItem("token") &&
      JSON.parse(window.localStorage.getItem("token"))?.role === "teacher" ? (
        <>
          <Link to="create_test" className={style.navmenu_link}>
            Создать тест
          </Link>
          <Link to="create_subject" className={style.navmenu_link}>
            Добавить предмет
          </Link>
          <Link to="statistics" className={style.navmenu_link}>
            Статистика
          </Link>
          <Link to="expert_statistics" className={style.navmenu_link}>
            Мои эксперты
          </Link>
        </>
      ) : (
        ""
      )}
      {window.localStorage.getItem("token") &&
      JSON.parse(window.localStorage.getItem("token"))?.role === "admin" ? (
        <>
          <Link to="give_permission_user" className={style.navmenu_link}>
            Дать Права
          </Link>
          {/* <Link to="find_expert" className={style.navmenu_link}>
            Найти эксперта
          </Link> */}
          <Link to="create_test" className={style.navmenu_link}>
            Создать тест
          </Link>
          {/* <Link to="create_test" className={style.navmenu_link}>
            Создать тест
          </Link> */}
          {/* <Link to="create_subject" className={style.navmenu_link}>
            Добавить предмет
          </Link> */}
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
