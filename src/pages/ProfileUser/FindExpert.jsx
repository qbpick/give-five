import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Profile.module.css";
import axios from "axios";

export const FindExpert = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res =
          window.localStorage.getItem("token") &&
          JSON.parse(window.localStorage.getItem("token"))?.role === "admin"
            ? await axios.get(
                "https://high-five.site/api/admin/get_all_expert",
                { withCredentials: true }
              )
            : await axios.get(
                "https://high-five.site/api/teacher/get_all_expert",
                { withCredentials: true }
              );
        setData(res.data.data.personal_data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const [disable, setDisable] = useState(true);
  const changeDisable = (e) => {
    e.target.value !== "Выберите предмет"
      ? setDisable(false)
      : setDisable(true);
  };
  return (
    <section className={style.find_expert__section}>
      <h2>Поиск эксперта</h2>
      <div className={style.find_expert_select}>
        <select name="subject" onChange={changeDisable}>
          <option value="Выберите предмет">Выберите предмет</option>
          <option name="english" value="Английский язык">
            Английский язык
          </option>
          <option name="mathematics" value="Математика">
            Математика
          </option>
          <option name="information" value="Информатика">
            Информатика
          </option>
          <option name="russia" value="Русский язык">
            Русский язык
          </option>
        </select>
        <select name="theme" disabled={disable}>
          <option value="Выберите тему">Выберите тему</option>
          <option name="english_grammatica" value="Грамматика">
            Грамматика
          </option>
          <option name="english_participle" value="Причастие">
            Причастие
          </option>
        </select>
      </div>
      {data &&
        data.map((item) => {
          return (
            <div className={style.block_expert}>
              <p>
                ФИО: {item.first_name} {item.last_name} {item.middle_name}
              </p>
              <button>
                <Link to="/messanger" className={style.link_button}>
                  {" "}
                  {/*мб можно сделать сразу ссылку к диалогу через id */}
                  Написать эксперту
                </Link>
              </button>
            </div>
          );
        })}
    </section>
  );
};
