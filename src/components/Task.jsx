import { useState } from "react";
import style from "./Components.module.css";

export const Task = () => {
  const answ = (
    <div className={style.answer_input}>
      <span>Ответ:</span>
      <div>
      <input type="text" placeholder="Введите ответ" />
      <input type="checkbox" id="" />
      </div>
    </div>
  );
  const [answer, setAnswer] = useState([answ]);
  const addAnswer = () => {
    setAnswer([...answer, answ])
    console.log(answer);
  };
  return (
    <div className={style.task_section}>
      <div className={style.title_task}>
        <span>Вопрос №{1}</span>
        <input type="text" placeholder="Введите вопрос" />
      </div>
      <button onClick={addAnswer}>Добавить ответ</button>
      {answer.map((item) => {
            return item;
          })} 
    </div>
  );
};
