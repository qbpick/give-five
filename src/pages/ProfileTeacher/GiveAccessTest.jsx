import axios from "axios";
import { useState, useEffect } from "react";
import style from "./ProfileTeacher.module.css";

export const GiveAccessTest = () => {
  const [email, setEmail] = useState();
  const findUser = () => {
    try {
      const res = axios.post(
        "high-five.site/api/find_for_admin",
        { email: email },
        { withCredentials: true }
      );
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const setEmailForm = (e) => {
    setEmail(e.target.value);
  };
  return (
    <section className={style.giveaccess_section}>
      <h2>Найти пользователя</h2>
      <div className={style.find_to_user}>
        <div>
          <span>Введите e-mail</span>
          <input
            type="email"
            placeholder="Введите email"
            onChange={(e) => setEmailForm(e)}
          />
        </div>
        <button onClick={findUser}>Дать доступ к тесту пользователю</button>
      </div>

      <div className={style.tests_list_to_access}>
        <div className={style.block_test}>
          <p>Предмет: {"Английский"}</p>
          <p>Тема: {"Грамматика"}</p>
          <button>Дать доступ</button>
        </div>
        <div className={style.block_test}>
          <p>Предмет: {"Английский"}</p>
          <p>Тема: {"Грамматика"}</p>
          <button>Дать доступ</button>
        </div>
        <div className={style.block_test}>
          <p>Предмет: {"Английский"}</p>
          <p>Тема: {"Грамматика"}</p>
          <button>Дать доступ</button>
        </div>
        <div className={style.block_test}>
          <p>Предмет: {"Английский"}</p>
          <p>Тема: {"Грамматика"}</p>
          <button>Дать доступ</button>
        </div>
        <div className={style.block_test}>
          <p>Предмет: {"Английский"}</p>
          <p>Тема: {"Грамматика"}</p>
          <button>Дать доступ</button>
        </div>
        <div className={style.block_test}>
          <p>Предмет: {"Английский"}</p>
          <p>Тема: {"Грамматика"}</p>
          <button>Дать доступ</button>
        </div>
        <div className={style.block_test}>
          <p>Предмет: {"Английский"}</p>
          <p>Тема: {"Грамматика"}</p>
          <button>Дать доступ</button>
        </div>
      </div>
    </section>
  );
};
