import style from "./Components.module.css";
import { Link } from "react-router-dom";
export const Navmenu = () => {
    return (
        <section className={style.navmenu}>
            <Link to="infouser" className={style.navmenu_link}>Мой профиль</Link>
            <Link to="tests" className={style.navmenu_link}>Тесты</Link>
            <Link to="find_expert" className={style.navmenu_link}>Найти эксперта</Link>
            {/* У эксперта видать те же самые линки, кроме найти эксперта */}

            {/* Дальше линки учителя идут */}
            <Link to="create_test" className={style.navmenu_link}>Создать тест</Link>
        </section>
    );
}