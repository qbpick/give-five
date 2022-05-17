import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Profile.module.css";
import load_gif from "../../assets/images/3.gif";
export const Tests = ({ TestToWork }) => {
  const [disable, setDisable] = useState(true);
  const [tests, setTests] = useState([]);
  const [test, setTest] = useState([]);
  let [testExp, setTestExp] = useState([]);
  const [paginatePages, setPaginatePages] = useState([]);
  const [currentPage, setCurrentPage] = useState({});
  const [loader, setLoader] = useState(false);
  const setTestToWork = (e) => {
    tests.forEach((element) => {
      if (e.target.id == element.id) {
        TestToWork(element);
      }
    });
  };
  useEffect(() => {
    setLoader(true);
    window.localStorage.getItem("token") &&
    JSON.parse(window.localStorage.getItem("token"))?.role === "admin"
      ? (async () => {
          try {
            const res = await axios.get(
              `https://high-five.site/api/admin/all_tests`,
              { withCredentials: true }
            );
            setLoader(false);
            console.log(res.data.data);
            setCurrentPage(res.data.data.paginate);
            let arr = [];
            for (let i = 1; i <= res.data.data.paginate.total_pages; i++) {
              arr.push(i);
            }
            setPaginatePages(arr);
            setTests(res.data.data.items);
          } catch (error) {
            setLoader(false);
            console.log(error);
          }
        })()
      : window.localStorage.getItem("token") &&
        JSON.parse(window.localStorage.getItem("token"))?.role === "user"
      ? (async () => {
          try {
            const res = await axios.get(
              "https://high-five.site/api/user/find_tests",
              { withCredentials: true }
            );
            setLoader(false);
            console.log(res.data.data);
            setCurrentPage(res.data.data.paginate);
            let arr = [];
            for (let i = 1; i <= res.data.data.paginate.total_pages; i++) {
              arr.push(i);
            }
            setPaginatePages(arr);
            setTests(res.data.data.items);
          } catch (error) {
            setLoader(false);
            console.log(error);
          }
        })()
      : window.localStorage.getItem("token") &&
        JSON.parse(window.localStorage.getItem("token"))?.role === "expert"
      ? (async () => {
          try {
            const res = await axios.get(
              "https://high-five.site/api/expert/find_tests",
              { withCredentials: true }
            );
            setLoader(false);
            setCurrentPage(res.data.data.paginate);
            let arr = [];
            for (let i = 1; i <= res.data.data.paginate.total_pages; i++) {
              arr.push(i);
            }
            setPaginatePages(arr);
            setTestExp(res.data.data.items);
          } catch (error) {
            setLoader(false);
            console.log(error);
          }
        })()
      : (async () => {
          try {
            const res = await axios.get(
              "https://high-five.site/api/teacher/all_tests",
              { withCredentials: true }
            );
            setLoader(false);
            console.log(res.data.data);
            setCurrentPage(res.data.data.paginate);
            let arr = [];
            for (let i = 1; i <= res.data.data.paginate.total_pages; i++) {
              arr.push(i);
            }
            setPaginatePages(arr);
            setTestExp(res.data.data.items);
            setTest(res.data.data.items);
          } catch (error) {
            setLoader(false);
            console.log(error);
          }
        })();
  }, []);

  const changeSubject = async (e) => {
    setDisable(false);
    setTestExp((testExp = test));
    setTestExp(testExp.filter((item) => item.subject_name == e.target.value));
  };
  const changeTheme = (e) => {
    setTestExp((testExp = test));
    setTestExp(
      testExp.filter((item) => item.name_test.indexOf(e.target.value))
    );
    console.log(testExp);
  };
  const setTestToWorkExp = (e) => {
    testExp.forEach((element) => {
      if (e.target.id == element.id) {
        TestToWork(element);
      }
    });
  };
  const currentPageContent = async (page) => {
    setLoader(true);
    try {
      const res =
        ((window.localStorage.getItem("token") &&
          JSON.parse(window.localStorage.getItem("token"))?.role ===
            "teacher")) &&
        window.localStorage.getItem("token") &&
        JSON.parse(window.localStorage.getItem("token"))?.role === "admin"
          ? await axios.get(
              `https://high-five.site/api/${
                window.localStorage.getItem("token") &&
                JSON.parse(window.localStorage.getItem("token"))?.role ===
                  "teacher"
                  ? "teacher"
                  : window.localStorage.getItem("token") &&
                    JSON.parse(window.localStorage.getItem("token"))?.role ===
                      "expert"
                  ? "admin"
                  : ""
              }/all_tests?page=${page}`,
              { withCredentials: true }
            )
          : await axios.get(
              `https://high-five.site/api/${
                window.localStorage.getItem("token") &&
                JSON.parse(window.localStorage.getItem("token"))?.role ===
                  "user"
                  ? "user"
                  : window.localStorage.getItem("token") &&
                    JSON.parse(window.localStorage.getItem("token"))?.role ===
                      "expert"
                  ? "expert"
                  : ""
              }/find_tests?page=${page}`,
              { withCredentials: true }
            );
      console.log(res);
      setLoader(false);
      setCurrentPage(res.data.data.paginate);
      setTestExp(res.data.data.items);
      setTest(res.data.data.items);
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };
  return (
    <section className={style.section_tests}>
      <h2>Поиск теста</h2>
      <div className={style.find_test}>
        <div className={style.tests_select}>
          <select name="subject" onChange={(e) => changeSubject(e)} required>
            <option value="Выберите предмет">Выберите предмет</option>
            {test.map((item, index) => {
              return test[index]?.subject_name !==
                test[index - 1]?.subject_name ? (
                <option name={item?.subject_name} value={item?.subject_name}>
                  {item?.subject_name}
                </option>
              ) : (
                ""
              );
            })}
          </select>
          <input
            type="text"
            name="theme"
            placeholder="Введите тему"
            disabled={disable}
            onChange={(e) => changeTheme(e)}
          />
        </div>
      </div>
      {loader ? <img src={load_gif} width="20vw" height="20vh" /> : ""}
      {testExp.map((data) => (
        <div key={data.id} className={style.block_test}>
          <p>Предмет: {data.subject_name}</p>
          <p>Тема: {data.name_test}</p>
          <p>Кол-во вопросов: {data.json_data.length}</p>
          <div style={{ display: "flex" }}>
            <button>
              <Link
                id={data.id}
                onClick={setTestToWorkExp}
                to="/profile/give_access_test"
                className={style.link_button}
              >
                Доступ
              </Link>
            </button>
            {window.localStorage.getItem("token") &&
            JSON.parse(window.localStorage.getItem("token"))?.role ===
              "teacher" ? (
              <>
                <button>
                  <Link
                    id={data.id}
                    onClick={setTestToWorkExp}
                    to="/profile/statistics_test"
                    className={style.link_button}
                  >
                    Статистика
                  </Link>
                </button>
                <button>
                  <Link
                    id={data.id}
                    onClick={setTestToWorkExp}
                    to="/profile/mark_test"
                    className={style.link_button}
                  >
                    Оценки
                  </Link>
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
      {tests.map((data) =>
        data.attempt == null || data?.attempt?.number_of_attempts !== 2 ? (
          // test.subject === data.test_subject ? (
          <div key={data.id} className={style.block_test}>
            <p>Предмет: {data.subject_name}</p>
            <p>Тема: {data.name_test}</p>
            <p>Кол-во вопросов: {data.json_data.length}</p>{" "}
            {data?.attempt?.number_of_attempts === 1 ? (
              <>
                <p>Кол-во попыток: {data.attempt.number_of_attempts}</p>
                <p>Ваш текущий балл: {data.attempt.mark}</p>
              </>
            ) : (
              ""
            )}
            {/* Если нету, прст убери */}
            {window.localStorage.getItem("token") &&
            JSON.parse(window.localStorage.getItem("token"))?.role ===
              "user" ? (
              <button>
                <Link
                  id={data.id}
                  onClick={setTestToWork}
                  to={`${data.id}`}
                  className={style.link_button}
                >
                  Начать
                </Link>
              </button>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )
      )}
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
