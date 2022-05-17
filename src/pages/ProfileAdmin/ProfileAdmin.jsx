import axios from "axios";
import { useState } from "react";
import style from "./ProfileAdmin.module.css";

const permission = {
  teacher: "work-with-experts",
  user: "standard-user",
  expert: "work-with-users",
};

const roles = {
  teacher: "teacher",
  user: "user",
  expert: "expert",
};
let form = {
  email: "",
  role: "",
  permission: "",
};

export const ProfileAdmin = () => {
  const [e_mail, setE_mail] = useState("");
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);

  const findUser = async () => {
    try {
      const response = await axios.get(
        `https://high-five.site/api/admin/find_for_admin?email=${e_mail}`,
        { withCredentials: true }
      );
      console.log(response);
      setUser(response.data.data.user_info);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await findUser();
  };

  const giveRole = async (e) => {
    if (e.target.name == roles.expert) {
      form = {
        email: user.email,
        role: e.target.name,
        permission: permission.expert,
      };
      console.log(form);
      try {
        const res = await axios.post(
          "https://high-five.site/api/admin/create_new_teacher",
          form,
          { withCredentials: true }
        );
        await findUser();
        console.log(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (e.target.name == roles.teacher) {
      form = {
        email: user.email,
        role: e.target.name,
        permission: permission.teacher,
      };
      try {
        const res = await axios.post(
          "https://high-five.site/api/admin/create_new_teacher",
          form,
          { withCredentials: true }
        );
        await findUser();
        console.log(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (e.target.name == roles.user) {
      form = {
        email: user.email,
        role: e.target.name,
        permission: permission.teacher,
      };
      try {
        const res = await axios.post(
          "https://high-five.site/api/admin/create_new_teacher",
          form,
          { withCredentials: true }
        );
        await findUser();
        console.log(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
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
            onInput={(e) => {
              setE_mail(e.target.value);
              console.log(e_mail);
            }}
          />
        </div>
        <button onClick={handleSubmit}>Найти пользователя</button>
      </div>
      <div className={style.tests_list_to_access}>
        {/* {user.map((user) => ( */}
        {user && (
          <div className={style.block_test}>
            <p>Имя: {user.first_name}</p>
            <p>Фамилия: {user.last_name}</p>
            <p>Роль: {user.role_slug}</p>
            {user.permission_slug == permission.user ? (
              <>
                <button name="teacher" onClick={giveRole}>
                  Дать учителя
                </button>
                <button name="expert" onClick={giveRole}>
                  Дать эксперта
                </button>
              </>
            ) : user.permission_slug == permission.expert ? (
              <>
                <button name="teacher" onClick={giveRole}>
                  Дать учителя
                </button>
                <button name="user" onClick={giveRole}>
                  Дать Юзера
                </button>
              </>
            ) : user.permission_slug == permission.teacher ? (
              <>
                <button name="expert" onClick={giveRole}>
                  Дать эксперта
                </button>
                <button name="user" onClick={giveRole}>
                  Дать Юзера
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        )}

        {/* ))} */}
        {/* <div className={style.block_test}>
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
        </div> */}
      </div>
    </section>
  );
};
