import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Profile.module.css";

export const Tests = ({ TestToWork }) => {
  const [disable, setDisable] = useState(true);
  const [tests, setTests] = useState([]);
  const [test, setTest] = useState([]);
  let [testExp, setTestExp] = useState([]);
  const [subjectSect, setSubjectSect] = useState([]);
  const setTestToWork = (e) => {
    tests.forEach((element) => {
      if (e.target.id == element.id) {
        TestToWork(element);
      }
    });
  };
  useEffect(() => {
    window.localStorage.getItem("token") &&
    JSON.parse(window.localStorage.getItem("token"))?.role === "admin"
      ? (async () => {
          try {
            const res = await axios.get(
              `https://high-five.site/api/admin/all_tests`,
              { withCredentials: true }
            );
            console.log(res.data.data);
            setTests(res.data.data.items);
          } catch (error) {
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
            console.log(res.data.data);
            setTests(res.data.data.items);
          } catch (error) {
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
            console.log(res.data.data);
            setTestExp(res.data.data.items);
          } catch (error) {
            console.log(error);
          }
        })()
      : (async () => {
          try {
            const res = await axios.get(
              "https://high-five.site/api/teacher/all_tests",
              { withCredentials: true }
            );
            console.log(res.data.data);
            setTestExp(res.data.data.items);
            setTest(res.data.data.items);
          } catch (error) {
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
      testExp.filter(
        (item) =>
          item.name_test.indexOf(e.target.value)
      )
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
    </section>
  );
};
