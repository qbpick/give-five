import style from "./ProfileTeacher.module.css";
import icon_danger from "../../assets/images/attentn.png";
import { useEffect, useState } from "react";
import axios from "axios";

export const InfoTeacher = () => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://high-five.site/api/teacher/info", {
          withCredentials: true,
        });
        console.log(res);
        setUserData(res.data.data.user);
        window.localStorage.setItem("user", JSON.stringify(res.data.data));
      } catch (err) {
        console.log(err.error);
      }
    })();
  }, []);
  return (
    <section>
      <div className={style.profile_user_content}>
        <div className={style.info_pictures_and_fio}>
          <img src={icon_danger} alt="" />
          <input
            defaultValue={userData.first_name}
            type="text"
            name="first_name"
            placeholder="Имя"
            readOnly
          />
          <input
            defaultValue={userData.last_name}
            type="text"
            name="last_name"
            placeholder="Фамилия"
            readOnly
          />
          <input
            defaultValue={userData.middle_name}
            type="text"
            name="middle_name"
            placeholder="Отчество"
            readOnly
          />
        </div>
        <input
          defaultValue={userData.email}
          type="email"
          name="email"
          placeholder="example@mail.com"
          readOnly
        />
        {/* <input type="password" name="email" placeholder="Изменить пароль" /> */}
        <button className={style.profile_user_button}>
          Сохранить изменения
        </button>
        <div className={style.profile_user_confirm__email}>
          <img src={icon_danger} alt="danger" />
          <p>Ваша почта не подтверждена. Проверьте почту</p>
          <button>Отправить письмо</button>
        </div>
      </div>
    </section>
  );
};
