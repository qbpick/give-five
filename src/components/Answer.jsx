import { useEffect } from "react";
import style from "./Components.module.css";

let answ = {
  id: 0,
  answer: "",
  correct: false
}
export const Answer = ({setAnswer}) => {
  useEffect(() => {
    setAnswer(answ)
    answ = {
      id: 0,
      answer: "",
      correct: false
    }
  })
  return (
    <div className={style.answer_input}>
      <button>X</button>
      <span>Ответ:</span>
      <input type="text" placeholder="Введите ответ" onChange={(e) => {answ.answer = e.target.value}} />
      <input type="checkbox" id="" onChange={(e) => {answ.correct = e.target.checked}} />
    </div>
  );
};
