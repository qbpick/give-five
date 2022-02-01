import style from "./Pages.module.css";
import image_card_1 from "../assets/images/opportunity.png";
import image_card_2 from "../assets/images/opportunity-2.png";
import image_card_3 from "../assets/images/opportunity-3.png";
import image_card_4 from "../assets/images/opportunity-4.png";
import image_card_5 from "../assets/images/opportunity-5.png";
import image_card_6 from "../assets/images/opportunity-6.png";
import image_slide from "../assets/images/O0WDcGN8wII.jpg";

export const Home = () => {
  return (
    <section className={style.homepage}>
      <h1>С нами ты можешь</h1>
      <section className={style.homepage_section}>
        <div className={style.section_card}>
          <img src={image_card_1} alt="1imgcard" />
          <p>
            Безотрывно от учебы закрепить пройденные темы, проработать задания
            ОГЭ и ЕГЭ
          </p>
        </div>
        <div className={style.section_card}>
          <img src={image_card_2} alt="1imgcard" />
          <p>Самостоятельно определять время, место и условия обучения</p>
        </div>
        <div className={style.section_card}>
          <img src={image_card_3} alt="1imgcard" />
          <p>
            Не беспокоиться о том, что отстанешь от своих одноклассников, ведь
            темп обучения выбираешь ты сам
          </p>
        </div>
        <div className={style.section_card}>
          <img src={image_card_4} alt="1imgcard" />
          <p>Найти новых друзей</p>
        </div>
        <div className={style.section_card}>
          <img src={image_card_5} alt="1imgcard" />
          <p>Получить подарки</p>
        </div>
        <div className={style.section_card}>
          <img src={image_card_6} alt="1imgcard" />
          <p>Стать экспертом</p>
        </div>
      </section>
      <section className={style.homepage_news}>
        <h2>Новости</h2>
        <div className={style.homepage_news__slider}>
          <img src={image_slide} alt="slide1" />
          <input type="radio" />
        </div>
      </section>
    </section>
  );
};
