import style from "./Components.module.css";
import { Link } from "react-router-dom";
export const Navmenu = () => {
    return (
        <section className={style.navmenu}>
            <Link to="infouser" className={style.navmenu_link}>Мой профиль</Link>
            <Link to="tests" className={style.navmenu_link}>Тесты</Link>
        </section>
    );
}