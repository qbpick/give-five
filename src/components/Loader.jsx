import style from "./Components.module.css";
import load_gif from "../assets/images/3.gif";
export const Loader = ({ status }) => {
  const statusLoad = status;
  return statusLoad === true ? (
    <section className={style.loader}>
      <img src={load_gif} />
    </section>
  ) : (
    ""
  );
};
