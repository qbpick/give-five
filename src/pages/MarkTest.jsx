import { useState, useEffect } from "react";
import style from "./ProfileUser/Profile.module.css";
import axios from "axios";

export const MarkTest = ({ testData }) => {
  const id = testData.id;
  const [mark, setMark] = useState([]);
  useEffect(() => {
    window.localStorage.getItem("token") &&
    JSON.parse(window.localStorage.getItem("token"))?.role == "admin"
      ? (async () => {
          try {
            const res = await axios.get(
              `https://high-five.site/api/admin/get_result?id=${id}`,
              { withCredentials: true }
            );
            console.log(res);
            setMark(res.data.items);
          } catch (err) {
            console.log(err.error);
          }
        })()
      : window.localStorage.getItem("token") &&
        JSON.parse(window.localStorage.getItem("token"))?.role == "teacher"
      ? (async () => {
          try {
            const res = await axios.get(
              `https://high-five.site/api/teacher/get_result?id=${id}`,
              { withCredentials: true }
            );
            console.log(res.data.items);
            setMark(res.data.items);
          } catch (err) {
            console.log(err.error);
          }
        })()
      : (async () => {
          try {
            const res = await axios.get(
              `https://high-five.site/api/expert/get_result?id=${id}`,
              { withCredentials: true }
            );
            console.log(res);
            setMark(res.data.items);
          } catch (err) {
            console.log(err.error);
          }
        })();
  }, []);
  return (
    <section className={style.section_tests}>
      {mark.map((data) => (
        <div key={data.user.id} className={style.block_test}>
          <p>
            ФИО: {data.user.last_name} {data.user.first_name} {data.user.middle_name}
          </p>
          {/* <p>Предмет: {data.test_subject}</p> */}
          <p>Кол-во баллов: {data.mark}%</p>
          <p>Email: {data.email}</p>
        </div>
      ))}
    </section>
  );
};
