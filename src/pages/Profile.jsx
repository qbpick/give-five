import style from "./Pages.module.css";
import { Navmenu } from "../components/Navmenu";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Profile = () => {
  return (
    <section>
      <Header />
      <br/>
      <div className={style.section_profile}>
      <Navmenu />
      <Outlet />
      </div>
      <br/>
      <Footer />
    </section>
  );
};
