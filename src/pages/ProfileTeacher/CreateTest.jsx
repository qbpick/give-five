import { useState } from "react";
import { Link } from "react-router-dom";
import { Task } from "../../components/Task";
import style from "./ProfileTeacher.module.css";

export const CreateTest = () => {
  const [task, setTask] = useState([]);
  const createTask = () => {
    setTask([...task, <Task />]);
  };
  return (
    <section className={style.createtest_section}>
      <h2>Создать тест</h2>
      <div className={style.section_input_title}>
        <span>Название: &nbsp;</span>
        <input type="text" placeholder="Введите название теста" />
      </div>
      <div className={style.section_input_title}>
        <span>Тема: &nbsp;</span>
        <input type="text" placeholder="Введите тему" />
      </div>
      {/*data.map((item) => ()) */}
      <div className={style}>
        {task.map((item) => {
          return item;
        })}
      </div>
      <p>Правильный ответ обозначьте галочкой</p>
      <button onClick={createTask}>Добавить вопрос</button>
      <button>
        <Link to="/profile/infouser" className={style.link_button}>
          Создать тест
        </Link>{" "}
      </button>
    </section>
  );
};
