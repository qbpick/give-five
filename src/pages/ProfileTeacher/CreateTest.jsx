import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Task } from "../../components/Task";
import style from "./ProfileTeacher.module.css";
import axios from "axios";
// import { task } from "./test";

// name_test: "",
// name: "",
// json_data: [
//   {
//     question_id: 0,
//     question_name: "",
//     question_answers: [
//       {
//         id: 0,
//         answer: "Ответ 1",
//         correct: false,
//       },
//     ],
//   },
// ],

export const CreateTest = () => {
  const [subjectSect, setSubjectSect] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://high-five.site/api/teacher/all_subject",
          { withCredentials: true }
        );
        setSubjectSect(res.data.items);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const navigate = useNavigate();
  const [test, setTest] = useState({
    name_test: "",
    name: "",
    json_data: [],
  });
  const [questions, setQuestions] = useState([]);

  // const setTask = (value) => {
  //   console.log(value);
  //   test.json_data.push(value);
  // };

  const addQuest = () => {
    setQuestions((prev) => [
      ...prev,
      {
        question_id: prev[prev.length - 1]?.question_id
          ? prev[prev.length - 1]?.question_id + 1
          : 1,
        question_name: "",
        question_answers: [],
      },
    ]);
  };
  const changeSubject = (e) => {
    setTest((prev) => ({ ...prev, name: e.target.value }));
  };
  const changetTheme = (e) => {
    setTest((prev) => ({ ...prev, name_test: e.target.value }));
  };

  const changeQuestionName = (value, idx) => {
    const qs = [...questions];
    qs[idx].question_name = value;
    setQuestions([...qs]);
  };

  const addTest = async () => {
    try {
      const quiz = { ...test, json_data: [...questions] };
      console.log(quiz);
      const res =
        window.localStorage.getItem("token") &&
        JSON.parse(window.localStorage.getItem("token"))?.role === "admin"
          ? await axios.post(
              "https://high-five.site/api/admin/create_test",
              quiz,
              { withCredentials: true }
            )
          : await axios.post(
              "https://high-five.site/api/teacher/create_test",
              quiz,
              { withCredentials: true }
            );
      console.log(res);
      navigate("/profile/infouser");
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTask = (id) => {
    console.log(id);
    const filtered = [...questions.filter((quest) => quest.question_id !== id)];
    test.json_data = [...filtered];
    setQuestions([...filtered]);
  };
  return (
    <section className={style.createtest_section}>
      <h2>Создать тест</h2>
      <div className={style.section_input_title}>
        <span>Предмет: &nbsp;</span>
        <select name="subject" onChange={(e) => changeSubject(e)} required>
          <option value="Выберите предмет">Выберите предмет</option>
          {subjectSect.map((item) => {
            return (
              <option name={item.name} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className={style.section_input_title}>
        <span>Тема: &nbsp;</span>
        <input
          required
          type="text"
          placeholder="Введите тему"
          value={test.name_test}
          onChange={(e) => changetTheme(e)}
        />
      </div>
      <div className={style}>
        {questions.map((task, idx) => (
          <Task
            task={task}
            handleDeleteTask={(e) => deleteTask(task.question_id)}
            onChange={(e) => changeQuestionName(e.target.value, idx)}
            id={task.question_id}
            key={task.question_id}
          />
        ))}
      </div>
      <p>Правильный ответ обозначьте галочкой</p>
      <button onClick={() => addQuest()}>Добавить вопрос</button>
      <button onClick={() => addTest()} className={style.link_button}>
        {/* DODODDODO NAVIGATE */}
        {/* <Link to="/profile/infouser" className={style.link_button}> */}
        Создать тест
        {/* </Link> */}
      </button>
    </section>
  );
};
