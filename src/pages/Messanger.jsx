import axios from "axios";
import { useEffect, useState } from "react";
import { createSearchParams, NavLink, useSearchParams } from "react-router-dom";
import style from "./Pages.module.css";

export const Messanger = () => {
  const [message, setMessage] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const [wsData, setWsData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://high-five.site/api/get_dialog", {
          withCredentials: true,
        });
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  useEffect(() => {
    const cb = (e) => {
      if (e.key === "Escape") {
        setSearchParams({});
      }
    };
    window.addEventListener("keydown", cb);
    return () => {
      window.removeEventListener("keydown", cb);
    };
  }, [searchParams, setSearchParams]);
  return (
    <section className={style.section_messanger}>
      <div className={style.messanger_box}>
        <div className={style.dialogs_user}>
          <NavLink
            // to={`?chat=${el}`}
            to={`?${createSearchParams({ chat: "Серега" })}`}
            className={() =>
              "Серега" === searchParams.get("chat") ? "active" : ""
            }
            // style={() => ({
            //   color: "Серега" === searchParams.get("chat") ? "green" : "red",
            // })}
            key={"Серега"}
          >
            Серега
          </NavLink>
          <NavLink
            to={`?${createSearchParams({ chat: "Никита" })}`}
            className={() =>
              "Никита" === searchParams.get("chat") ? "active" : ""
            }
            // style={() => ({
            //   color: "Серега" === searchParams.get("chat") ? "green" : "red",
            // })}
            key={"Никита"}
          >
            НИкита
          </NavLink>
          <NavLink to="q">БорИс)</NavLink>
          <NavLink to="q">Серега</NavLink>
          <NavLink to="q">НИкита</NavLink>
          <NavLink to="q">БорИс)</NavLink>
          <NavLink to="q">Серега</NavLink>
          <NavLink to="q">НИкита</NavLink>
          <NavLink to="q">БорИс)</NavLink>
          <NavLink to="q">Серега</NavLink>
          <NavLink to="q">НИкита</NavLink>
          <NavLink to="q">БорИс)</NavLink>
        </div>
        <div className={style.box_messanger}>
          <p>Виталий</p>
          <div className={style.dialog_box}>
            <div>
              {/* <div className={style.message}>
                <div className={style.title_message}>
                  <p className={style.name_user__message}>Никита </p>&nbsp;
                  <p>23:24</p>
                </div>
                <p className={style.text_message}>
                  когда мы в клубе чиксы танцуют ферст
                </p>
              </div> */}
            </div>
          </div>
          <div className={style.send_message}>
            <textarea placeholder="Напишите сообщение" />
            <button>Отправить</button>
          </div>
        </div>
      </div>
    </section>
  );
};
