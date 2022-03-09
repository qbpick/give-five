import { NavLink, useParams } from "react-router-dom";
import style from "./Pages.module.css";
const test = [
  {
    question_id: 1,
    question_name: "Кто такой Ленин?",
    question_answers: [
      { id: 0, answer: "Негр", correct: false },
      { id: 1, answer: "Русский", correct: true },
      { id: 2, answer: "Негритянка", correct: false },
      { id: 3, answer: "Максим", correct: false },
    ],
  },
  {
    question_id: 2,
    question_name: "Кто такой Путин?",
    question_answers: [
      { id: 4, answer: "Бог", correct: true },
      { id: 5, answer: "Русский", correct: false },
      { id: 6, answer: "Нигер", correct: false },
      { id: 7, answer: "Максим", correct: false },
    ],
  },
  {
    question_id: 3,
    question_name: "Вы знали, что айтипедию разбанили??",
    question_answers: [
      { id: 8, answer: "Да", correct: true },
      { id: 9, answer: "Нет", correct: false },
    ],
  },
  {
    question_id: 4,
    question_name: "А вы знаете, кто такой айтипедия?",
    question_answers: [
      { id: 10, answer: "Да", correct: true },
      { id: 11, answer: "Нет", correct: false },
    ],
  },
  {
    question_id: 5,
    question_name: "Точно не знаете?",
    question_answers: [
      { id: 12, answer: "Да", correct: false },
      { id: 13, answer: "Нет", correct: true },
    ],
  },
];
export const Test = () => {
  localStorage.setItem("questions", test.length)
  let count = 0
  let array = JSON.parse(JSON.stringify(test))
  const { id } = useParams();
  const testCount = (e) => {
    if (e.target.checked && e.target.value === "true") {
      array.forEach(element => {
        element.question_answers.forEach(item => {
          if(e.target.id == item.id) {
              item.correct = 1
          } else {
            item.correct = 0
          }
        })
      })
      console.log(array);
    }
  };
  const countRight = () => {
    array.forEach(element => {
      console.log(array);
      element.question_answers.forEach(item => {
        if(item.correct === 1) {
          console.log(array);
          count++
          console.log(count);
        }
      })
    })
    localStorage.setItem("result", count)
  }
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
          name={{count}}
        >
          Закончить тест
        </NavLink>{" "}
      </button>
    </section>
  );
};
