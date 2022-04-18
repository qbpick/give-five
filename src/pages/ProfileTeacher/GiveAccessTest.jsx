import axios from "axios";
import { useState, useEffect } from "react";
import style from "./ProfileTeacher.module.css";

export const GiveAccessTest = ({ testData }) => {
  const testDataItem = testData;
  console.log(testData);
  const [subj, setSubj] = useState();
  useEffect(() => {
    window.localStorage.getItem("token") &&
    JSON.parse(window.localStorage.getItem("token"))?.role === "expert"
      ? (async () => {
          try {
            const res = await axios.get(
              "https://high-five.site/api/expert/get_all_subject",
              { withCredentials: true }
            );
            setSubj(res.data.data.items);
            console.log(res.data.data.items);
          } catch (error) {
            console.log(error);
          }
        })()
      : window.localStorage.getItem("token") &&
        JSON.parse(window.localStorage.getItem("token"))?.role === "teacher"
      ? (async () => {
          try {
            const res = await axios.get(
              "https://high-five.site/api/teacher/get_all_subject",
              { withCredentials: true }
            );
            setSubj(res.data.data.items);
            console.log(res.data.data.items);
          } catch (error) {
            console.log(error);
          }
        })()
      : console.log("Что-то нечистое)");
  }, []);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);
  const setEmailForm = (e) => {
    setEmail(e.target.value);
  };
  const findUser = async () => {
    try {
      const res =
        window.localStorage.getItem("token") &&
        JSON.parse(window.localStorage.getItem("token"))?.role === "expert"
          ? await axios.get(
              `https://high-five.site/api/expert/find_for_admin?email=${email}`,
              { withCredentials: true }
            )
          : window.localStorage.getItem("token") &&
            JSON.parse(window.localStorage.getItem("token"))?.role === "teacher"
          ? await axios.get(
              `https://high-five.site/api/teacher/find_for_admin?email=${email}`,
              { withCredentials: true }
            )
          : "";
      console.log(res.data.data.user_info);
      if (
        JSON.parse(window.localStorage.getItem("token"))?.role === "teacher" &&
        res.data.data.user_info.role_slug == "expert"
      ) {
        setUser([res.data.data.user_info]);
      } else {
        if (
          JSON.parse(window.localStorage.getItem("token"))?.role === "expert" &&
          res.data.data.user_info.role_slug == "user"
        ) {
          setUser([res.data.data.user_info]);
        }
        alert("Вам нельзя дать права на тест этому пользователю!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const giveAccessTest = async () => {
    let name_subj;
    subj.forEach((element) => {
      if (testDataItem.id == element.test_id) {
        name_subj = element.subject_name;
      }
    });
    const dataItem = {
      id: user[0].id,
      name_test: testDataItem.name_test,
      name_subject: name_subj,
    };
    console.log(dataItem);
    try {
      const res =
        window.localStorage.getItem("token") &&
        JSON.parse(window.localStorage.getItem("token"))?.role === "expert"
          ? await axios.post(
              "https://high-five.site/api/expert/give_acces_expert",
              dataItem,
              { withCredentials: true }
            )
          : window.localStorage.getItem("token") &&
            JSON.parse(window.localStorage.getItem("token"))?.role === "teacher"
          ? await axios.post(
              "https://high-five.site/api/teacher/give_acces_expert",
              dataItem,
              { withCredentials: true }
            )
          : "";
      console.log(res.data.data);
      alert(res.data.data.message);
    } catch (error) {
      console.log(error);
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
            onChange={(e) => setEmailForm(e)}
          />
        </div>
        <button onClick={findUser}>Найти пользователя</button>
      </div>

      <div className={style.tests_list_to_access}>
        {user.map((item) => {
          return (
            <div className={style.block_test}>
              <p>Фамилия: {item.first_name}</p>
              <p>Имя: {item.last_name}</p>
              <p>Отчество: {item.middle_name}</p>
              <button onClick={giveAccessTest}>Дать доступ</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
