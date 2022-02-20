import style from "./Components.module.css";
import soc_icon_1 from "../assets/images/soc_icons/instagram.png";
import soc_icon_2 from "../assets/images/soc_icons/vk.png";
import soc_icon_3 from "../assets/images/soc_icons/rosmol_2x_2x_2x-removebg-preview.png";
import soc_icon_4 from "../assets/images/soc_icons/WhatsApp Image 2021-10-08 at 12.00.44.png";
import soc_icon_5 from "../assets/images/soc_icons/Логотип новый-05.png";
import soc_icon_6 from "../assets/images/soc_icons/2.png";

export const Footer = () => {
  return (
    <footer>
      <p>test@high-five.site</p>
      <a target="_blank" href="https://www.instagram.com/dai5_school/ ">
        <img src={soc_icon_1} alt="inst" />
      </a>
      <a target="_blank" href="https://vk.com/highfive30">
        <img src={soc_icon_2} alt="vk" />
      </a>
      <img src={soc_icon_3} alt="foot_3" className={style.footer_icons_small} />
      <img src={soc_icon_4} alt="foot_4" className={style.footer_icons_small} />
      <img src={soc_icon_5} alt="foot_5" className={style.footer_icons_small} />
      <img src={soc_icon_6} alt="foot_6" className={style.footer_icons_small} />
      {/* <p>&copy;Дебилы корпорейшн 2022</p> */}
      <p>&copy;Дай Пять 2022</p>
    </footer>
  );
};
