import style from "./Profile.module.css";
import icon_danger from "./attentn.png";

export const InfoUser = () => {
  return (
    <section>
      <div className={style.profile_user_content}>
        <div className={style.info_pictures_and_fio}>
          <img src={icon_danger} alt="" />
          <input type="text" name="first_name" placeholder="Имя" />
          <input type="text" name="last_name" placeholder="Фамилия" />
          <input type="text" name="middle_name" placeholder="Попка" />
        </div>
        <input type="email" name="email" placeholder="maksimkuranov@" />
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
