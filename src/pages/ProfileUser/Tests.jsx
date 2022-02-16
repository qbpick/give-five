import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Profile.module.css";

export const Tests = () => {
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
  const [array] = useState([])
  const [disable, setDisable] = useState(true);
  const changeSubject = (e) => {
    setDisable(false);
    array.push(e.target.value);
  };
  const changeTheme = (e) => {
    array.push(e.target.value);
  };
  console.log();
  return (
    <section className={style.section_tests}>
      <h2>Поиск теста</h2>
      <div className={style.find_test}>
        <div className={style.tests_select}>
          <select name="subject" onChange={changeSubject}>
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
          <select name="theme" disabled={disable} onChange={changeTheme}>
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
        array[0] === data.tests_subject ? (
          <div className={style.block_test}>
            <p>Предмет: {data.tests_subject}</p>
            <p>Тема: {data.tests_theme}</p>
            <p>Кол-во вопросов: {data.tests_questions}</p>{" "}
            {/* Если нету, прст убери */}
            <button>
              <Link key={data.id} to={`${data.tests_id}`} className={style.link_button}>
                Начать
              </Link>
            </button>
          </div>
        ) : ""
      )}
    </section>
  );
};
