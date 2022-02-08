import style from "./Pages.module.css";
import { Navmenu } from "../components/Navmenu";
import { Outlet } from "react-router-dom";

export const Profile = () => {
  return (
    <section className={style.section_profile}>
      <Navmenu />
      <Outlet />
    </section>
  );
};
