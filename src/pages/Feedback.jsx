import style from "./Pages.module.css";
export const Feedback = () => {
  return (
    <section className={style.section_feedback}>
      <p>
        Наша группа в <a target="_blank" href="https://vk.com/highfive30">Вконтакте</a>
      </p>
      <p>
        Наш аккаунт в <a target="_blank" href="https://www.instagram.com/dai5_school/">Инстаграме</a>
      </p>
      <p>Наша почта: <p>test@high-five.site</p></p>
    </section>
  );
};
