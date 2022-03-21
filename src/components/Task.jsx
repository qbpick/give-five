import style from "./Components.module.css";
import { Answer } from "./Answer";
import { useState } from "react";

let quest_id = 0;
let quest = {
  question_id: 0,
  question_name: "",
  question_answers: [],
};

export const Task = ({ setTask }) => {
  const [answers, setAnswers] = useState([]);
  const addAnswer = () => {
    setAnswers([...answers, <Answer setAnswer={setAnswer} />]);
    console.log(answers);
    setTask(quest);
  };
  const setAnswer = (value) => {
    console.log(value);
    quest.question_answers.push(value)
  };
  return (
    <div className={style.task_section} key={quest.question_id}>
      <div className={style.title_task}>
        <span>Вопрос №{1}</span>
        <input
          type="text"
          placeholder="Введите вопрос"
          onChange={(e) => (quest.question_name = e.target.value)}
        />
      </div>
      <div>
        {answers.map((items) => {
          return items;
        })}
      </div>
      <button onClick={addAnswer}>Добавить ответ</button>
    </div>
  );
};
