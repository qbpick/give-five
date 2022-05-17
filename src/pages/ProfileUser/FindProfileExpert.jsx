import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Profile.module.css";
import axios from "axios";
export const FindProfileExpert = ({ expertDataProfile }) => {
  const navigate = useNavigate();
  console.log(expertDataProfile);
  const addFriendExpert = async (id) => {
    const reqObj = {
      friend_id: id,
    };
    try {
      const res = await axios.post(
        "https://high-five.site/api/user/session/create",
        reqObj,
        { withCredentials: true }
      );
      console.log(res);
      navigate("/messanger");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className={style.profile_user_content}>
      <div className={style.profile_expert_in_user}>
      <h2>Профиль {expertDataProfile.personal_data.last_name}</h2>
        <div className={style.fio_expert}>
          <p>Фамилия: {expertDataProfile.personal_data.first_name}</p>
          <p>Имя: {expertDataProfile.personal_data.last_name}</p>
          <p>Отчество: {expertDataProfile.personal_data.middle_name}</p>
          <button
            onClick={() => {
              addFriendExpert(expertDataProfile.user.id);
            }}
          >
            Написать
          </button>
          <p>E-mail: {expertDataProfile.user.email}</p>
        </div>
        <h2 className={style.title_profile_expert}>Тесты эксперта</h2>
        <div className={style.tests_expert}>
          {expertDataProfile?.tests?.map((test) => {
            return (
              <div key={test.id} className={style.test_expert}>
                <p>Предмет: {test.subject_name}&nbsp;</p>
                <p>Тема: {test.name_test}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
