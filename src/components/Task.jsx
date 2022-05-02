import style from "./Components.module.css";
import { Answer } from "./Answer";
import { useState } from "react";

// {
//   id: answers.id + 1,
//   answers: "",
//   correct: false,
// }
let last_id = 1;
export const Task = ({ onChange, task, id }) => {
  const [answers, setAnswers] = useState([]);
  const addAnswer = () => {
    setAnswers((prev) => [
      ...prev,
      {
        id: prev[prev.length - 1]?.id ? prev[prev.length - 1]?.id + 1 : last_id,
        answer: "",
        correct: false,
      },
    ]);
    last_id++;
  };
  // const setAnswer = (value) => {
  //   // quest.question_answers.push(value);
  // };
  // const changeText = (e) => {
  //   task.question_name = e.target.value;
  // };
  const changeTextAnswer = (value, idx) => {
    const ans = [...answers];
    ans[idx].answer = value;
    task.question_answers = [...ans];
  };
  const deleteAnswer = (id) => {
    const filtered = [...answers.filter((answer) => answer.id !== id)];
    task.question_answers = [...filtered];
    setAnswers([...filtered]);
  };
  const changeRightAnswer = (checked, idx) => {
    const ans = [...answers];
    ans[idx].correct = checked;
    task.question_answers = [...ans];
  };

  return (
    <div className={style.task_section}>
      <div className={style.title_task}>
        <span>Вопрос №{id}</span>
        <input
          type="text"
          placeholder="Введите вопрос"
          value={task.question_name}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        {answers.map((answer, idx) => (
          <Answer
            answer={answer}
            onChange={(e) => changeTextAnswer(e.target.value, idx)}
            handleDelete={(e) => deleteAnswer(answer.id)}
            onChangeRightAnswer={(e) =>
              changeRightAnswer(e.target.checked, idx)
            }
            key={answer.id}
          />
        ))}
      </div>
      <button onClick={() => addAnswer()}>Добавить ответ</button>
    </div>
  );
};
