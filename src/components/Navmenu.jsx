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
        ?????? ??????????????
      </Link>
      <Link to="tests" className={style.navmenu_link}>
        ??????????
      </Link>
      {window.localStorage.getItem("token") &&
      JSON.parse(window.localStorage.getItem("token"))?.role === "user" ? (
        <>
          <Link to="find_expert" className={style.navmenu_link}>
            ?????????? ????????????????
          </Link>
        </>
      ) : (
        ""
      )}
      {window.localStorage.getItem("token") &&
      JSON.parse(window.localStorage.getItem("token"))?.role === "teacher" ? (
        <>
          <Link to="create_test" className={style.navmenu_link}>
            ?????????????? ????????
          </Link>
          <Link to="create_subject" className={style.navmenu_link}>
            ???????????????? ??????????????
          </Link>
          <Link to="statistics" className={style.navmenu_link}>
            ????????????????????
          </Link>
          <Link to="expert_statistics" className={style.navmenu_link}>
            ?????? ????????????????
          </Link>
        </>
      ) : (
        ""
      )}
      {window.localStorage.getItem("token") &&
      JSON.parse(window.localStorage.getItem("token"))?.role === "admin" ? (
        <>
          <Link to="give_permission_user" className={style.navmenu_link}>
            ???????? ??????????
          </Link>
          <Link to="add_ip" className={style.navmenu_link}>
            ???????????????? ip
          </Link>
          <Link to="create_test" className={style.navmenu_link}>
            ?????????????? ????????
          </Link>
          <Link to="log" className={style.navmenu_link}>
            ?????? ??????????????
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
        ??????????
      </span>
    </section>
  );
};
