import style from "./Pages.module.css";
export const Feedback = () => {
  return (
    <section className={style.section_feedback}>
      <p>
        Наша группа в <a href="vk.com">Вконтакте</a>
      </p>
      <p>
        Наш аккаунт в <a href="vk.com">Инстаграме</a>
      </p>
      <p>Наша почта: test@high-five.site</p>
    </section>
  );
};
