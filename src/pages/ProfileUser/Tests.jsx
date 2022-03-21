import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Profile.module.css";

const tests = [
  {
    id: 0,
    test_subject: "Английский язык",
    name_test: "Грамматика",
    json_data: [
      {
        question_id: 1,
        question_name: "Вопрос 1",
        question_answers: [
          {
            id: 0,
            answer: "ты тупой",
            correct: false,
          },
          {
            id: 1,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 2,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
      {
        question_id: 2,
        question_name: "Вопрос 2",
        question_answers: [
          {
            id: 3,
            answer: "Ответ 1",
            correct: false,
          },
          {
            id: 4,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 5,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
      {
        question_id: 3,
        question_name: "Вопрос 3",
        question_answers: [
          {
            id: 6,
            answer: "Ответ 1",
            correct: false,
          },
          {
            id: 7,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 8,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
      {
        question_id: 4,
        question_name: "Вопрос 4",
        question_answers: [
          {
            id: 9,
            answer: "Ответ 1",
            correct: false,
          },
          {
            id: 10,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 11,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
      {
        question_id: 5,
        question_name: "Вопрос 5",
        question_answers: [
          {
            id: 12,
            answer: "Ответ 1",
            correct: false,
          },
          {
            id: 13,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 14,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
    ],
  },
  {
    id: 1,
    test_subject: "Английский язык",
    name_test: "Причастие",
    json_data: [
      {
        question_id: 1,
        question_name: "Вопрос 1",
        question_answers: [
          {
            id: 0,
            answer: "я тупой)",
            correct: false,
          },
          {
            id: 1,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 2,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
      {
        question_id: 2,
        question_name: "Вопрос 2",
        question_answers: [
          {
            id: 3,
            answer: "Ответ 1",
            correct: false,
          },
          {
            id: 4,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 5,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
      {
        question_id: 3,
        question_name: "Вопрос 3",
        question_answers: [
          {
            id: 6,
            answer: "Ответ 1",
            correct: false,
          },
          {
            id: 7,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 8,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
      {
        question_id: 4,
        question_name: "Вопрос 4",
        question_answers: [
          {
            id: 9,
            answer: "Ответ 1",
            correct: false,
          },
          {
            id: 10,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 11,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
      {
        question_id: 5,
        question_name: "Вопрос 5",
        question_answers: [
          {
            id: 12,
            answer: "Ответ 1",
            correct: false,
          },
          {
            id: 13,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 14,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    test_subject: "Математика",
    name_test: "Причастие",
    json_data: [
      {
        question_id: 1,
        question_name: "Вопрос 1",
        question_answers: [
          {
            id: 0,
            answer: "я тупой)",
            correct: false,
          },
          {
            id: 1,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 2,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
      {
        question_id: 2,
        question_name: "Вопрос 2",
        question_answers: [
          {
            id: 3,
            answer: "Ответ 1",
            correct: false,
          },
          {
            id: 4,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 5,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
      {
        question_id: 3,
        question_name: "Вопрос 3",
        question_answers: [
          {
            id: 6,
            answer: "Ответ 1",
            correct: false,
          },
          {
            id: 7,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 8,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
      {
        question_id: 4,
        question_name: "Вопрос 4",
        question_answers: [
          {
            id: 9,
            answer: "Ответ 1",
            correct: false,
          },
          {
            id: 10,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 11,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
      {
        question_id: 5,
        question_name: "Вопрос 5",
        question_answers: [
          {
            id: 12,
            answer: "Ответ 1",
            correct: false,
          },
          {
            id: 13,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 14,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    test_subject: "Английский язык",
    name_test: "Причастие",
    json_data: [
      {
        question_id: 1,
        question_name: "Вопрос 1",
        question_answers: [
          {
            id: 0,
            answer: "я тупой)",
            correct: false,
          },
          {
            id: 1,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 2,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
      {
        question_id: 2,
        question_name: "Вопрос 2",
        question_answers: [
          {
            id: 3,
            answer: "Ответ 1",
            correct: false,
          },
          {
            id: 4,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 5,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
      {
        question_id: 3,
        question_name: "Вопрос 3",
        question_answers: [
          {
            id: 6,
            answer: "Ответ 1",
            correct: false,
          },
          {
            id: 7,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 8,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
      {
        question_id: 4,
        question_name: "Вопрос 4",
        question_answers: [
          {
            id: 9,
            answer: "Ответ 1",
            correct: false,
          },
          {
            id: 10,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 11,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
      {
        question_id: 5,
        question_name: "Вопрос 5",
        question_answers: [
          {
            id: 12,
            answer: "Ответ 1",
            correct: false,
          },
          {
            id: 13,
            answer: "Ответ 2",
            correct: false,
          },
          {
            id: 14,
            answer: "Ответ 3",
            correct: true,
          },
        ],
      },
    ],
  }
];
export const Tests = ({ TestToWork }) => {
  const [test, setTest] = useState({});
  const [disable, setDisable] = useState(true);
  const setTestToWork = (e) => {
    tests.forEach((element) => {
      if (e.target.id == element.id) {
        TestToWork(element.json_data);
      }
    });
  };
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://high-five.site/api/user/find_tests",
          { withCredentials: true }
        );
        console.log(res.data.data);
        setTest(res.data.data.items);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const changeSubject = async (e) => {
    if (e.target.value === "Выберите предмет") {
      setTest({});
      setDisable(true);
      return;
    }
    setDisable(false);
    setTest((prev) => ({ ...prev, subject: e.target.value }));

    console.log(test);
  };
  const changeTheme = (e) => {
    e.target.value === "Выберите тему"
      ? setTest((prev) => ({ ...prev, theme: null }))
      : setTest((prev) => ({ ...prev, theme: e.target.value }));

    console.log(test);
  };
  return (
    <section className={style.section_tests}>
      <h2>Поиск теста</h2>
      <div className={style.find_test}>
        <div className={style.tests_select}>
          <select name="subject" onChange={(e) => changeSubject(e)}>
            <option value="Выберите предмет">Выберите предмет</option>
            <option name="english" value="Английский язык">
              Английский язык
            </option>
            <option name="mathematics" value="Математика">
              Математика
            </option>
            <option name="information" value="Информатика">
              Информатика
            </option>
            <option name="russia" value="Русский язык">
              Русский язык
            </option>
          </select>
          <select
            name="theme"
            disabled={disable}
            onChange={(e) => changeTheme(e)}
          >
            <option value="Выберите тему">Выберите тему</option>
            <option name="english_grammatica" value="Грамматика">
              Грамматика
            </option>
            <option name="english_participle" value="Причастие">
              Причастие
            </option>
          </select>
        </div>
      </div>
      {tests.map((data) =>
        test.subject === data.test_subject ? (
          <div key={data.id} className={style.block_test}>
            <p>Предмет: {data.test_subject}</p>
            <p>Тема: {data.name_test}</p>
            <p>Кол-во вопросов: {data.json_data.length}</p>{" "}
            {/* Если нету, прст убери */}
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
          </div>
        ) : (
          ""
        )
      )}
    </section>
  );
};
