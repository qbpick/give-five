import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import style from "./Profile.module.css";
import axios from "axios";
import load_gif from "../../assets/images/3.gif";
export const FindExpert = ({ expertData }) => {
  const [subjectSect, setSubjectSect] = useState([]);
  const [paginatePages, setPaginatePages] = useState([]);
  const [currentPage, setCurrentPage] = useState({});
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://high-five.site/api/user/all_subject",
          { withCredentials: true }
        );
        setSubjectSect(res.data.items);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoader(true);
    (async () => {
      try {
        const res =
          window.localStorage.getItem("token") &&
          JSON.parse(window.localStorage.getItem("token"))?.role === "user"
            ? await axios.get(
                "https://high-five.site/api/user/get_all_expert",
                { withCredentials: true }
              )
            : await axios.get(
                "https://high-five.site/api/teacher/get_all_expert",
                { withCredentials: true }
              );
        setCurrentPage(res.data.data.paginate);
        let arr = [];
        for (let i = 1; i <= res.data.data.paginate.total_pages; i++) {
          arr.push(i);
        }
        setPaginatePages(arr);
        setLoader(false);
        setData(res.data.data.items);
        console.log(res.data.data);
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
    })();
  }, []);
  const [disable, setDisable] = useState(true);
  const changeDisable = (e) => {
    e.target.value !== "Выберите предмет"
      ? setDisable(false)
      : setDisable(true);
  };
  const setExpertData = (e) => {
    data.forEach((element) => {
      if (e.target.id == element.user.id) {
        expertData(element);
      }
    });
  };

  const currentPageContent = async (page) => {
    setLoader(true);
    try {
      const res =
        window.localStorage.getItem("token") &&
        JSON.parse(window.localStorage.getItem("token"))?.role === "user"
          ? await axios.get(
              `https://high-five.site/api/user/get_all_expert?page=${page}`,
              { withCredentials: true }
            )
          : await axios.get(
              `https://high-five.site/api/teacher/get_all_expert?page=${page}`,
              { withCredentials: true }
            );
      console.log(res);
      setLoader(false);
      setCurrentPage(res.data.data.paginate);
      setData(res.data.data.items);
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  return (
    <section className={style.find_expert__section}>
      <h2>Поиск эксперта</h2>
      <div className={style.find_expert_select}>
        <select name="subject" required>
          <option value="Выберите предмет">Выберите предмет</option>
          {subjectSect.map((item) => {
            return (
              <option name={item.name} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
        <select name="theme" disabled={disable}>
          <option value="Выберите тему">Выберите тему</option>
          <option name="english_grammatica" value="Грамматика">
            Грамматика
          </option>
          <option name="english_participle" value="Причастие">
            Причастие
          </option>
        </select>
      </div>
      {loader ? <img src={load_gif} width="20vw" height="20vh" /> : ""}
      {data &&
        data.map((item) => {
          return (
            <div className={style.block_expert}>
              <p>
                ФИО: {item.personal_data.first_name}{" "}
                {item.personal_data.last_name} {item.personal_data.middle_name}
              </p>
              <p>email: {item.user.email}</p>
              <Link
                className={style.button_to_profile_expert}
                to={`${item.user.id}`}
              >
                <button
                  onClick={(e) => {
                    setExpertData(e);
                  }}
                  id={item.user.id}
                >
                  Профиль
                </button>
              </Link>
            </div>
          );
        })}
      <div className={style.paginate_test}>
        {currentPage.current_page && currentPage.current_page != 1 ? (
          <p
            className={style.paginate_page}
            onClick={(e) => {
              currentPageContent(currentPage.current_page - 1);
            }}
          >
            &lt;
          </p>
        ) : (
          ""
        )}
        {currentPage.current_page >= 5 ? (
          <>
            <p
              className={style.paginate_page}
              onClick={(e) => {
                currentPageContent(1);
              }}
            >
              {1}
            </p>
            <p>...</p>
          </>
        ) : (
          ""
        )}
        {paginatePages
          .slice(
            currentPage.current_page < 5 ? 0 : currentPage.current_page - 3,
            currentPage.current_page + 3
          )
          .map((page) => {
            return (
              <p
                className={style.paginate_page}
                onClick={(e) => {
                  currentPageContent(page);
                }}
                style={
                  currentPage?.current_page == page
                    ? { border: "solid 2px #83d7ac" }
                    : {}
                }
              >
                {page}
              </p>
            );
          })}
        {paginatePages.length > 5 &&
        currentPage.current_page + 4 < currentPage.total_pages ? (
          <>
            <p>...</p>

            <p
              className={style.paginate_page}
              onClick={(e) => {
                currentPageContent(currentPage.total_pages);
              }}
            >
              {currentPage.total_pages}
            </p>
          </>
        ) : (
          ""
        )}
        {currentPage.current_page != currentPage.total_pages ? (
          <p
            className={style.paginate_page}
            onClick={(e) => {
              currentPageContent(currentPage.current_page + 1);
            }}
          >
            &gt;
          </p>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};
