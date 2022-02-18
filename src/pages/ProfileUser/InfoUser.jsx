import style from "./Profile.module.css";
// import icon_danger from "./attentn.png";
import { useEffect, useState } from "react";
import axios from "axios";
import icon_danger from "../../assets/images/attentn.png";

export const InfoUser = () => {
  const [userData, setUserData] = useState({});
 

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://high-five.site/api/user/info");
        console.log(res);
        setUserData(res);
        // window.localStorage.setItem("user", res.data.personal_data.user_id);
      } catch (err) {
        console.log(err.error);
      }
    })();
  }, [userData, setUserData]);

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
          />
          <input
            defaultValue={userData.last_name}
            type="text"
            name="last_name"
            placeholder="Фамилия"
          />
          <input
            defaultValue={userData.middle_name}
            type="text"
            name="middle_name"
            placeholder="Отчество"
          />
        </div>
        <input type="email" name="email" placeholder="example@mail.com" />
        <input type="password" name="email" placeholder="Изменить пароль" />
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
