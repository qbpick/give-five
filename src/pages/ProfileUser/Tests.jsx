import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Profile.module.css";

const tests = [
  {
    tests_id: 0,
    tests_subject: "Английский язык",
    tests_theme: "Грамматика",
    tests_questions: 25,
  },
  {
    tests_id: 1,
    tests_subject: "Английский язык",
    tests_theme: "Причастие",
    tests_questions: 20,
  },
];
export const Tests = () => {
  const [test, setTest] = useState({});
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://high-five.site/api/user/find_tests",
          { withCredentials: true }
        );
        console.log(res.data.data);
        setTest(res.data.data.items);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const changeSubject = async (e) => {
    if (e.target.value === "Выберите предмет") {
      setTest({});
      setDisable(true);
      return;
    }
    setDisable(false);
    setTest((prev) => ({ ...prev, subject: e.target.value }));

    console.log(test);
  };
  const changeTheme = (e) => {
    e.target.value === "Выберите тему"
      ? setTest((prev) => ({ ...prev, theme: null }))
      : setTest((prev) => ({ ...prev, theme: e.target.value }));

    console.log(test);
  };
  return (
    <section className={style.section_tests}>
      <h2>Поиск теста</h2>
      <div className={style.find_test}>
        <div className={style.tests_select}>
          <select name="subject" onChange={(e) => changeSubject(e)}>
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
          <select
            name="theme"
            disabled={disable}
            onChange={(e) => changeTheme(e)}
          >
            <option value="Выберите тему">Выберите тему</option>
            <option name="english_grammatica" value="Грамматика">
              Грамматика
            </option>
            <option name="english_participle" value="Причастие">
              Причастие
            </option>
          </select>
        </div>
      </div>
      {tests.map((data) =>
        test.subject === data.tests_subject ? (
          <div key={data.tests_id} className={style.block_test}>
            <p>Предмет: {data.tests_subject}</p>
            <p>Тема: {data.tests_theme}</p>
            <p>Кол-во вопросов: {data.tests_questions}</p>{" "}
            {/* Если нету, прст убери */}
            <button>
              <Link to={`${data.tests_id}`} className={style.link_button}>
                Начать
              </Link>
            </button>
          </div>
        ) : (
          ""
        )
      )}
    </section>
  );
};
