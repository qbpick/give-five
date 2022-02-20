import style from "./ProfileAdmin.module.css";

const roles = {
  teacher: "work-with-experts",
  user: "standard-user",
  admin: "administration",
  expert: "work-with-users",
};

const govnoLARAVEL = [
  {
    first_name: "John",
    last_name: "Fam",
    middle_name: "Fsa",
    email: "john@gay.com",
    role: "admin",
  },
  {
    first_name: "John",
    last_name: "Fam",
    middle_name: "Fsa",
    email: "john@gay.com",
    role: "admin",
  },
  {
    first_name: "John",
    last_name: "Fam",
    middle_name: "Fsa",
    email: "john@gay.com",
    role: "admin",
  },
  {
    first_name: "John",
    last_name: "Fam",
    middle_name: "Fsa",
    email: "john@gay.com",
    role: "admin",
  },
];
const godlikeREACT = {
  email: "john@gay.com",
  role: "teacher",
  permission: "teacher",
};

export const ProfileAdmin = () => {
  return (
    <section className={style.giveaccess_section}>
      <h2>Найти пользователя</h2>
      <div className={style.find_to_user}>
        <div>
          <span>Введите e-mail</span>
          <input type="email" placeholder="Введите email" />
        </div>
        <button>Найти пользователя</button>
      </div>
      <div className={style.tests_list_to_access}>
        <div className={style.block_test}>
          <p>Имя: {"мИША"}</p>
          <p>Фамилия: {"ГЕй"}</p>
          <p>Роль: {"Пользователь"}</p>
          <button>{"Дать учителя"}</button>
          <button>{"Дать эксперта"}</button>
        </div>
        <div className={style.block_test}>
          <p>Имя: {"МИШа"}</p>
          <p>Фамилия: {"геЙ"}</p>
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
