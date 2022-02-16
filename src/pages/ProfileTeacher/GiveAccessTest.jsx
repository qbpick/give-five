import style from "./ProfileTeacher.module.css";

export const GiveAccessTest = () => {
  return (
    <section className={style.giveaccess_section}>
      <h2>Найти пользователя</h2>
      <div className={style.find_to_user}>
        <div>
          <span>Введите e-mail</span>
          <input type="email" placeholder="Введите email" />
        </div>
        <button>Дать доступ к тесту пользователю</button>
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
