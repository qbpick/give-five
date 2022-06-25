import style from "./Pages.module.css";
import image_card_1 from "../assets/images/opportunity.png";
import image_card_2 from "../assets/images/opportunity-2.png";
import image_card_3 from "../assets/images/opportunity-3.png";
import image_card_4 from "../assets/images/opportunity-4.png";
import image_card_5 from "../assets/images/opportunity-5.png";
import image_card_6 from "../assets/images/opportunity-6.png";
import news_1 from "../assets/images/news_1.jpg"
import news_2 from "../assets/images/news_2.jpg"
import news_3 from "../assets/images/O0WDcGN8wII.jpg"
import { Footer } from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className={style.homepage}>
        <h1>С нами ты можешь</h1>
        <section className={style.homepage_section}>
          <div className={style.slider_to_home}>
            <Slider {...settings}>
              <div>
                <img src={image_card_1} alt="1imgcard" />
                <p className={style.text_to_slider}>
                  Безотрывно от учебы закрепить пройденные темы, проработать
                  задания ОГЭ и ЕГЭ
                </p>
              </div>
              <div>
                <img src={image_card_2} alt="1imgcard" />
                <p className={style.text_to_slider}>Самостоятельно определять время, место и условия обучения</p>
              </div>
              <div>
                <img src={image_card_3} alt="1imgcard" />
                <p className={style.text_to_slider}>
                  Не беспокоиться о том, что отстанешь от своих одноклассников,
                  ведь темп обучения выбираешь ты сам
                </p>
              </div>
              <div>
                <img src={image_card_4} alt="1imgcard" />
                <p className={style.text_to_slider}>Найти новых друзей</p>
              </div>
              <div>
                <img src={image_card_5} alt="1imgcard" />
                <p className={style.text_to_slider}>Получить подарки</p>
              </div>
              <div>
                <img src={image_card_6} alt="1imgcard" />
                <p className={style.text_to_slider}>Стать экспертом</p>
              </div>
            </Slider>
          </div>
        </section>
        <section className={style.homepage_news}>
          <h2>Новости</h2>
          <div>
            <img src={news_1} alt="1imgcard" />
            <div>
              <h2>Что-то с новостями</h2>
              <p>
                Что-то про новости Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Labore excepturi, facilis impedit molestias
                dolor ex laboriosam voluptas ut, sint cumque saepe maxime optio
                odit nam iusto eligendi alias. Fugit, sint.
              </p>
            </div>
          </div>
          <div>
            <img src={news_2} alt="1imgcard" />
            <div>
              <h2>Что-то с новостями</h2>
              <p>
                Что-то про новости Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Labore excepturi, facilis impedit molestias
                dolor ex laboriosam voluptas ut, sint cumque saepe maxime optio
                odit nam iusto eligendi alias. Fugit, sint.
              </p>
            </div>
          </div>
          <div>
            <img src={news_3} alt="1imgcard" />
            <div>
              <h2>Что-то с новостями</h2>
              <p>
                Что-то про новости Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Labore excepturi, facilis impedit molestias
                dolor ex laboriosam voluptas ut, sint cumque saepe maxime optio
                odit nam iusto eligendi alias. Fugit, sint.
              </p>
            </div>
          </div>
        </section>
      </section>
      <br />
      <Footer />
    </>
  );
};
