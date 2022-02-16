import { NavLink, useParams } from "react-router-dom";
import style from "./Pages.module.css";

export const Test = () => {
  const { id } = useParams();
  console.log({ id });
  const test = [
    {
      test_id: 1,
      test_quetion: "Кто такой Ленин?",
      test_answers: ["Негр", "Русский", "Негритянка", "Максим"],
    },
    {
      test_id: 2,
      test_quetion: "Кто такой Путин?",
      test_answers: ["Бог", "Руский", "Нигер"],
    },
    {
      test_id: 3,
      test_quetion: "Вы знали, что айтипедию разбанили??",
      test_answers: ["Да", "Нет"],
    },
    {
      test_id: 4,
      test_quetion: "А вы знаете, кто такой айтипедия?",
      test_answers: ["Да", "Нет"],
    },
  ];

  return (
    <section className={style.section_test}>
      <h2>Грамматика</h2>
      {test.map((item) => (
        <div className={style.test_quetion}>
          <p>Вопрос №{item.test_id}</p>
          <p>{item.test_quetion}</p>
          {item.test_answers.map((answer, index) => (
            <div className={style.answer}>
              <input type="checkbox" id={answer} />
              <label htmlFor={answer}>{answer}</label>
            </div>
          ))}
        </div>
      ))}
      <button className={style.end_test_button}>
        <NavLink
          to="/profile/infouser"
          onClick={(e) => alert("Тест выполен и отправлен на проверку")}
          className={style.link_button}
        >
          Закончить тест
        </NavLink>{" "}
      </button>
    </section>
  );
};
