import { useState, useEffect } from "react";
import style from "./Pages.module.css";
import axios from "axios";

export const StatisticsTest = ({ testData }) => {
  console.log(testData);
  const test_id = testData.id;
  const [statTest, setStatTest] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://high-five.site/api/teacher/test_statistics?test_id=${test_id}`,
          {
            withCredentials: true,
          }
        );
        console.log(res);
        setStatTest(res.data.data.items);
        window.localStorage.setItem("user", JSON.stringify(res.data.data));
      } catch (err) {
        console.log(err.error);
      }
    })();
  }, []);
  return (
    <section className={style.section_tests}>
      {statTest.map((data) => (
        <div key={data.id} className={style.block_test}>
          <p>
            ФИО: {data.first_name} {data.middle_name} {data.last_name}
          </p>
          {/* <p>Предмет: {data.test_subject}</p> */}
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
