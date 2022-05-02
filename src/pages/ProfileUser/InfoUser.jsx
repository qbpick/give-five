import style from "./Profile.module.css";
// import icon_danger from "./attentn.png";
import { useEffect, useState } from "react";
import axios from "axios";
import icon_danger from "../../assets/images/attentn.png";

export const InfoUser = () => {
  const [userData, setUserData] = useState({});
  const [verifiedAt, setverifiedAt] = useState();
  useEffect(() => {
    window.localStorage.getItem("token") &&
    JSON.parse(window.localStorage.getItem("token"))?.role === "admin"
      ? (async () => {
          try {
            const res = await axios.get(
              "https://high-five.site/api/admin/info",
              {
                withCredentials: true,
              }
            );
            console.log(res);
            setUserData(res.data.data.items);
            setverifiedAt(res.data.data.email_verified_at);
            window.localStorage.setItem("user", JSON.stringify(res.data.data));
          } catch (err) {
            console.log(err.error);
          }
        })()
      : window.localStorage.getItem("token") &&
        JSON.parse(window.localStorage.getItem("token"))?.role === "teacher"
      ? (async () => {
          try {
            const res = await axios.get(
              "https://high-five.site/api/teacher/info",
              {
                withCredentials: true,
              }
            );
            console.log(res);
            setUserData(res.data.data.items);
            window.localStorage.setItem("user", JSON.stringify(res.data.data));
          } catch (err) {
            console.log(err.error);
          }
        })()
      : window.localStorage.getItem("token") &&
        JSON.parse(window.localStorage.getItem("token"))?.role === "expert"
      ? (async () => {
          try {
            const res = await axios.get(
              "https://high-five.site/api/expert/info",
              {
                withCredentials: true,
              }
            );
            console.log(res);
            setUserData(res.data.data.items);
            window.localStorage.setItem("user", JSON.stringify(res.data.data));
          } catch (err) {
            console.log(err.error);
          }
        })()
      : (async () => {
          try {
            const res = await axios.get(
              "https://high-five.site/api/user/info",
              {
                withCredentials: true,
              }
            );
            console.log(res);
            setUserData(res.data.data.items);
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
        {verifiedAt == null ? (
          <div className={style.profile_user_confirm__email}>
            <img src={icon_danger} alt="danger" />
            <p>Ваша почта не подтверждена. Проверьте почту</p>
            <button>Отправить письмо</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};
