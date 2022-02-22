import style from "./ProfileExpert.module.css";
import icon_danger from "../../assets/images/attentn.png";

export const InfoExpert = () => {
  return (
    <section className={style.section_info}>
      <div className={style.info_pictures_and_fio}>
        <img src={icon_danger} alt="" />
        <input type="text" name="first_name" value="Имя" />
        <input type="text" name="last_name" value="Фамилия" />
        <input type="text" name="middle_name" value="Попка" />
      </div>
      <input type="email" name="email" value="maksimkuranov@" />
      <input type="password" name="email" placeholder="Изменить пароль" />
      <div>
        <span>Описание: &nbsp;</span>
        <textarea placeholder="Опишите себя" />
      </div>
      <button className={style.profile_expert_button}>
        Сохранить изменения
      </button>
      <div className={style.profile_user_confirm__email}>
        <img src={icon_danger} alt="danger" />
        <p>Ваша почта не подтверждена. Проверьте почту</p>
        <button>Отправить письмо</button>
      </div>
    </section>
  );
};
