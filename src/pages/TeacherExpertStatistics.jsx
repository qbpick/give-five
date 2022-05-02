import { useState, useEffect } from "react";
import axios from "axios";
import style from "./Pages.module.css";

export const TeacherExpertStatistics = () => {
  const [stat, setStat] = useState([]);

  useEffect(() => {
    window.localStorage.getItem("token") &&
    JSON.parse(window.localStorage.getItem("token"))?.role == "admin"
      ? (async () => {
          try {
            const res = await axios.get(
              `https://high-five.site/api/admin/teacher_statistics`,
              { withCredentials: true }
            );
            console.log(res.data.data);
            setStat(res.data.data.items);
          } catch (err) {
            console.log(err.error);
          }
        })()
      : (async () => {
          try {
            const res = await axios.get(
              `https://high-five.site/api/teacher/teacher_statistics`,
              { withCredentials: true }
            );
            console.log(res.data.data);
            setStat(res.data.data.items);
          } catch (err) {
            console.log(err.error);
          }
        })();
  }, []);
  return (
    <section className={style.section_tests_exp}>
    {stat.map((data) => (
      <div key={data.id} className={style.block_test_exp}>
        <p>
          ФИО: {data.first_name} {data.middle_name}{" "}
          {data.last_name}
        </p>
        <p>Предмет: {data.subject}</p>
        <p>Тема: {data.test_name}</p>
        {/* <p>Предмет: {data.test_subject}</p> */}
        <p>Кол-во баллов: {data.statistics_score}</p>
        <p>Email: {data.email}</p>
      </div>
    ))}
  </section>
  )
};
