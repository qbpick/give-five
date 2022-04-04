import style from "./Pages.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const ResultTest = ({ testData }) => {
  console.log(testData);
  const id_test = testData;
  const data = {
    max: localStorage.getItem("questions"),
    right: localStorage.getItem("result"),
  };
  let all_right = (data.right / data.max) * 100;
  all_right = Math.round(all_right, -1);
  useEffect(() => {
    (async () => {
      let array = [];
      try {
        const res = await axios.get(
          "https://high-five.site/api/user/get_all_subject",
          { withCredentials: true }
        );
        array = res.data.data.items;
      } catch (error) {
        console.log(error);
      }
      let subject_id;
      console.log(array);
      array.forEach((elem) => {
        if (id_test.id == elem.test_id) {
          subject_id = elem.subject_id;
        }
      });
      const dataReq = {
        mark: all_right,
        subject_id: subject_id,
        test_id: id_test.id,
      }; //данные, которые зависят от первого запроса, посылаются сюда
      console.log(dataReq);
      try {
        const res = await axios.post(
          "https://high-five.site/api/user/accept_result",
          dataReq,
          { withCredentials: true }
        );
        console.log(res.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  useEffect(() => {
    (() => {})();
  }, []);
  return (
    <section className={style.section_result}>
      <h2>Поздравляем! Вы прошли тест!</h2>
      <p>Название теста: {id_test.name_test}</p>
      <p>
        Ваш итоговый балл: {data.right} из {data.max}
      </p>
      <p>Ваша оценка: {all_right}%</p>
    </section>
  );
};
