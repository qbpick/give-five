import { Footer } from "../components/Footer";
import style from "./Pages.module.css";

export const QnA = () => {
  return (
    <>
      <section className={style.section_qna}>
        <h2>Вопросы и ответы</h2>
        <p>
          1. Что такое "ДАЙ ПЯТЬ?" - Это сайт, где ты можешь «догнать» материал
          по 12 учебным предметам, прокачать свои знания в наиболее сложных
          темах, познакомиться с интересными учениками-экспертами, а
          главное-стать экспертом и получать за это призы! И всё это совершенно
          БЕСПЛАТНО! Скорее присоединяйся к нашей дружной команде. У нас есть
          также группа <a href="vk.com">VK</a>
          &nbsp;и <a href="instagram.com">Instagram</a> аккаунт, где тебя ждёт
          музыкальный фреш, обзоры на сериалы и новости в различных сферах! Мы
          ждём именно тебя ! Дай пять!
        </p>
        <p>
          2. Можно ли доверять экспертам? Не сделают ли они хуже? - Наши
          эксперты проходят профессиональную оценку и обучение у своих учителей.
          Эксперта может направить только его учитель, предварительно проверив
          знание темы и умение объяснять
        </p>
        <p>
          {" "}
          3. Если меня обидел эксперт? - Перед тем, как стать экспертом, ученики
          проходят особый отбор, где основными критериями являются добродушие,
          вежливость, воспитанность и уважение к людям. Если всё же случился
          некий инцидент, просим тебя немедленно сообщить о нем в службу
          поддержки &nbsp;
          <strong>test@high-five.site</strong>. НО! Эксперт в праве отказаться
          от объяснения материала, если посчитает, что собеседник относится к
          нему неуважительно и задевает его честь и достоинство
        </p>
        <p>
          {" "}
          4. Как стать экспертом?- Достаточно подойти к своему учителю, чтобы он
          проверил твои знания по выбранной тобой теме и направил письмо
          администрации сайта с твоими данными{" "}
        </p>
        <p>
          {" "}
          5. Что получает эксперт? Будут ли подарки?- Будут, но это пока
          секрет))
        </p>
      </section>
      <br />
      <Footer />
    </>
  );
};
