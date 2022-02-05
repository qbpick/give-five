import style from "./Components.module.css";
import { Link } from "react-router-dom";
export const Navmenu = () => {
    return (
        <section className={style.navmenu}>
            <Link to="/profile/infouser" className={style.navmenu_link}>Мой профиль</Link>
            <Link to="/profile/tests" className={style.navmenu_link}>Тесты</Link>
        </section>
    );
}