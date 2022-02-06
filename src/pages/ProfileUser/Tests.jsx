import { useState } from "react";
import style from "./Profile.module.css";

export const Tests = () => {
  const [disable, setDisable] = useState(true);
  const changeTheme = () => {
    setDisable(false);
  };
  return (
    <section className={style.section_tests}>
      <h2>Поиск теста</h2>
      <div className={style.find_test}>
      <div className={style.tests_select}>
        <select name="subject" onChange={changeTheme}>
          <option value="Выберите предмет">
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
        <select name="theme" disabled={disable}>
          <option value="Выберите тему">
            Выберите тему
          </option>
          <option name="english_grammatica" value="Грамматика">
            Грамматика
          </option>
          <option name="english_participle" value="Причастие">
            Причастие
          </option>
        </select>
      </div>
      <button disabled={disable}>Найти</button>
      </div>
      <div className={style.block_test} >
        <p>Предмет: {"Английский язык"}</p>
        <p>Тема: {"Грамматика"}</p>
        <p>Кол-во вопросов: {"25"}</p> {/* Если нету, прст убери */}
        <button>Начать</button>
      </div>
    </section>
  );
};
