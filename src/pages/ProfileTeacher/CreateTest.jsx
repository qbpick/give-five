import { Link } from "react-router-dom";
import { useState } from "react";
import { Task } from "../../components/Task";
import style from "./ProfileTeacher.module.css";
import { task } from "./test";
const answ = (
  <div className={style.answer_input}>
    <button>X</button>
    <span>Ответ:</span>
    <input
      type="text"
      placeholder="Введите ответ"
      onChange={(e) => {
        answ.answer = e.target.value;
      }}
    />
    <input
      type="checkbox"
      id=""
      onChange={(e) => {
        answ.correct = e.target.checked;
      }}
    />
  </div>
);
export const CreateTest = () => {
  const test = task;
  console.log(test);
  const [questions, setQuestions] = useState([]);
  const addQuest = () => {
    setQuestions([...questions, <Task setTask={setTask} />]);
  };
  const setTask = (value) => {
    console.log(value);
    test.json_data.push(value);
  };
  return (
    <section className={style.createtest_section}>
      <h2>Создать тест</h2>
      <div className={style.section_input_title}>
        <span>Предмет: &nbsp;</span>
        <select name="subject">
          <option
            value="Выберите предмет"
            onChange={(e) => (test.test_subject = e.target.value)}
          >
            Выберите предмет
          </option>
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
      </div>
      <div className={style.section_input_title}>
        <span>Тема: &nbsp;</span>
        <input
          type="text"
          placeholder="Введите тему"
          onChange={(e) => (test.test_subject = e.target.value)}
        />
      </div>
      <div className={style}>
        {questions.map((item) => {
          return item;
        })}
      </div>
      <p>Правильный ответ обозначьте галочкой</p>
      <button onClick={addQuest}>Добавить вопрос</button>
      <button>
        <Link to="/profile/infouser" className={style.link_button}>
          Создать тест
        </Link>
      </button>
    </section>
  );
};
