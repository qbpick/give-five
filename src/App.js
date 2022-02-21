import { Route, Routes, useNavigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Feedback } from "./pages/Feedback";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Messenger } from "./pages/Messenger";
import { QnA } from "./pages/QnA";
import { Signup } from "./pages/Signup";
import { Tests } from "./pages/ProfileUser/Tests";
import { InfoUser } from "./pages/ProfileUser/InfoUser";
import { Profile } from "./pages/Profile";
import { Messanger } from "./pages/Messanger";
import { Test } from "./pages/Test";
import { InfoExpert } from "./pages/ProfileExpert/InfoExpert";
import { FindExpert } from "./pages/ProfileUser/FindExpert";
import { InfoTeacher } from "./pages/ProfileTeacher/InfoTeacher";
import { CreateTest } from "./pages/ProfileTeacher/CreateTest";
import { GiveAccessTest } from "./pages/ProfileTeacher/GiveAccessTest";
import { ProfileAdmin } from "./pages/ProfileAdmin/ProfileAdmin";
import { useAuth } from "./hooks/auth";

const App = () => {
  const navigate = useNavigate();
  const { isAuth, setAuth } = useAuth();
  // if (!isAuth) {
  //   navigate("/login", { replace: true });
  // }
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="QnA" element={<QnA />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          {/* {isAuth ? (
            <> */}
          <Route path="messenger" element={<Messenger />} />
          <Route path="messanger" element={<Messanger />} />
          {window.localStorage.getItem("user") &&
          JSON.parse(window.localStorage.getItem("user"))?.data.role ===
            "teacher" ? (
            <>
              <Route path="infoteacher" element={<InfoTeacher />} />
              {/* Профиль Учителя */}
              <Route path="create_test" element={<CreateTest />} />
              {/* Создание теста  учитель*/}
              <Route path="give_access_test" element={<GiveAccessTest />} />
              {/* Дать доступ к тесту учитель*/}
            </>
          ) : (
            ""
          )}
          <Route path="profile" element={<Profile />}>
            {window.localStorage.getItem("user") &&
            JSON.parse(window.localStorage.getItem("user"))?.data.role ===
              "admin" ? (
              <>
                <Route path="give_permission_user" element={<ProfileAdmin />} />
                {/* Дать роль пользователю  админ*/}
              </>
            ) : (
              ""
            )}
            {window.localStorage.getItem("user") &&
            JSON.parse(window.localStorage.getItem("user"))?.data.role ===
              "expert" ? (
              <>
                <Route path="infoexpert" element={<InfoExpert />} />
                {/* Профиль эксперта */}
              </>
            ) : (
              ""
            )}

            <Route path="find_expert" element={<FindExpert />} />
            <Route path="infouser" element={<InfoUser />} />
            <Route path="tests" element={<Tests />} />
            <Route path="tests/:id" element={<Test />} />
          </Route>
          {/* </>
          ) : (
            ""
          )} */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
/* ПРОСТИ АНДРЕЙ, Я НАСРАЛ ТУТ НЕМНОГА(ЧУ-ЧУТЬ) В РОУТЕР) СИЛЬНО НЕ БЕЙ ПЖПЖПЖПЖ, Я ТЕ БЕРН КУПЛЮ */
export default App;
