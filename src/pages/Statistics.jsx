import { useState, useEffect } from "react";
import axios from "axios";
import style from "./Pages.module.css";

export const Statistics = () => {
  const [stat, setStat] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://high-five.site/api/teacher/all_test_statistics",
          {
            withCredentials: true,
          }
        );
        console.log(res);
        setStat(res.data.data.items);
      } catch (err) {
        console.log(err.error);
      }
    })();
  }, []);
  return (
    <section className={style.section_tests}>
      {stat.map((data) => (
        <div key={data.id} className={style.block_test}>
          <p>ФИО: {data.first_name} {data.middle_name} {data.last_name}</p>
          <p>Предмет: {data.test_subject}</p>
          <p>Кол-во баллов: {data.statistics_score}</p>
          <p>Email: {data.email}</p>
          {/* Если нету, прст убери */}
          {/* <button>
            <Link
              id={data.id}
              onClick={setTestToWork}
              to={`${data.id}`}
              className={style.link_button}
            >
              Начать
            </Link>
          </button> */}
        </div>
      ))}
    </section>
  );
};
