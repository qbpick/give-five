import style from "./ProfileAdmin.module.css";

export const ProfileAdmin = () => {
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
          <p>Имя: {"Максим"}</p>
          <p>Фамилия: {"Роздольский"}</p>
          <p>Роль: {"Пользователь"}</p>
          <button>{"Дать учителя"}</button>
          <button>{"Дать эксперта"}</button>
        </div>
        <div className={style.block_test}>
          <p>Имя: {"Андрей"}</p>
          <p>Фамилия: {"Куранов"}</p>
          <p>Роль: {"Эксперт"}</p>
          <button>{"Дать юзера"}</button>
          <button>{"Дать учителя"}</button>
        </div>
        <div className={style.block_test}>
          <p>Имя: {"Феликс"}</p>
          <p>Фамилия: {"Ли"}</p>
          <p>Роль: {"Учитель"}</p>
          <button>{"Дать юзера"}</button>
          <button>{"Дать эксперта"}</button>
        </div>
      </div>
    </section>
  );
};
