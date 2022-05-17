import { useEffect, useState } from "react";
import style from "./ProfileTeacher.module.css";
import axios from "axios";

export const CreateSubject = () => {
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");
  const [subj, setSubj] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://high-five.site/api/teacher/all_subject",
          { withCredentials: true }
        );
        setSubj(res.data.items);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const createSubj = () => {
    const data = { name: subject };
    try {
      console.log(data);
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
      setError(error.error.message);
    }
  };
  const deleteSubject = async (id) => {
    console.log("ID=======================" + id);
    console.log(subj);
    const fil = subj.filter((item) => item.id !== id);
    setSubj(fil);
    console.log(subj);
    try {
      const res = await axios.delete(
        `https://high-five.site/api/teacher/delete_subject/${id}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className={style.createtest_section}>
      <h2>Добавить предмет</h2>
      <div className={style.createsubject_input}>
        <span>Название: &nbsp;</span>
        <input
          onInput={(e) => setSubject(e.target.value)}
          type="text"
          placeholder="Введите название предмета"
        />
      </div>
      <button onClick={createSubj}>Создать предмет</button>
      <div className={style.tests_list_to_subj}>
        {subj.map((item) => {
          return (
            <div key={item.id} className={style.block_subj}>
              <p>{item.name}</p>
              <button onClick={(_) => deleteSubject(item.id)}>Удалить</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
