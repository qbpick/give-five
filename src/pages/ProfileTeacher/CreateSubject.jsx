import { useState } from "react";
import style from "./ProfileTeacher.module.css";
import axios from "axios";

export const CreateSubject = () => {
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");
  const createSubj = () => {
    const data = { subject: subject };
    try {
      const res =
        window.localStorage.getItem("token") &&
        JSON.parse(window.localStorage.getItem("token"))?.role === "admin"
          ? axios.post(
              `https://high-five.site/api/admin/create_subject`,
              data,
              {
                withCredentials: true,
              }
            )
          : axios.post(
              `https://high-five.site/api/teacher/create_subject`,
              data,
              {
                withCredentials: true,
              }
            );
      console.log(res);
    } catch (error) {
      console.log(error);
      setError(error.error.message);
    }
  };
  return (
    <section className={style.createtest_section}>
      <h2>Добавить предмет</h2>
      <div className={style.createsubject_input}>
        <span>Название: &nbsp;</span>
        <input
          onInput={subject}
          type="text"
          placeholder="Введите название предмета"
        />
      </div>
      <button onClick={createSubj}>Создать тест</button>
    </section>
  );
};
