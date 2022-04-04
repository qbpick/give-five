import { NavLink, useParams } from "react-router-dom";
import style from "./Pages.module.css";
import axios from "axios";
import { useEffect } from "react";
export const Test = ({testData}) => {
  const test = testData.json_data;
  console.log(test);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://high-five.site/api/user/find_tests",
          { withCredentials: true }
        );
        console.log(res.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  localStorage.setItem("questions", test.length);
  let count = 0;
  let array = JSON.parse(JSON.stringify(test));
  const { id } = useParams();
  const testCount = (e) => {
    if (e.target.checked && e.target.value === "true") {
      array.forEach((element) => {
        element.question_answers.forEach((item) => {
          if (e.target.id == item.id) {
            item.correct = 1;
          }
        });
      });
    }
  };
  const countRight = () => {
    array.forEach((element) => {
      console.log(array);
      element.question_answers.forEach((item) => {
        if (item.correct === 1) {
          count++;
        }
      });
    });
    localStorage.setItem("result", count);
  };
  return (
    <section className={style.section_test}>
      <h2>Грамматика</h2>
      {test.map((item) => (
        <div className={style.test_quetion}>
          <p>Вопрос №{item.question_id}</p>
          <p>{item.question_name}</p>
          {item.question_answers.map((answer) => (
            <div className={style.answer}>
              <input
                name={item.question_name}
                type="radio"
                id={answer.id}
                key={answer.id}
                value={answer.correct}
                onClick={testCount}
              />
              <label htmlFor={answer.id}>{answer.answer}</label>
            </div>
          ))}
        </div>
      ))}
      <button className={style.end_test_button}>
        <NavLink
          to={`/profile/tests/${id}/result`}
          onClick={countRight}
          className={style.link_button}
          name={{ count }}
        >
          Закончить тест
        </NavLink>{" "}
      </button>
    </section>
  );
};
