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

import { CreateSubject } from "./pages/ProfileTeacher/CreateSubject";
import { ResultTest } from "./pages/ResultTest";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useState } from "react";
import { StatisticsTest } from "./pages/StatisticsTest";
import { Statistics } from "./pages/Statistics";
import { MarkTest } from "./pages/MarkTest";
import { TeacherExpertStatistics } from "./pages/TeacherExpertStatistics";
import { FindProfileExpert } from "./pages/ProfileUser/FindProfileExpert";
import { Logging } from "./pages/ProfileAdmin/Logging";
const App = () => {
  const navigate = useNavigate();
  const { isAuth, setAuth } = useAuth();
  // if (isAuth) {
  //   navigate("/profile", { replace: true });
  // }
  const [testData, setTestData] = useState({});
  const [expertDataProfile, setExpertDataProfile] = useState({});
  const testToWork = (value) => {
    setTestData(value);
    console.log(value);
  };
  const expertData = (value) => {
    setExpertDataProfile(value);
    console.log(value);
  };
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
          <Route path="profile" element={<Profile />}>
            {/* {window.localStorage.getItem("token") && */}
            {/* JSON.parse(window.localStorage.getItem("token"))?.role === */}
            {/* "teacher" && ( */}
            {/* <> */}
            <Route path="infoteacher" element={<InfoTeacher />} />
            {/* ???????????????? ??????????  ??????????????*/}
            <Route path="create_test" element={<CreateTest />} />
            {/* ???????????????? ??????????  ??????????????*/}
            <Route
              path="give_access_test"
              element={<GiveAccessTest testData={testData} />}
            />
            {/* ???????? ???????????? ?? ?????????? ??????????????*/}
            {/* </> */}
            {/* )} */}
            {window.localStorage.getItem("token") &&
            JSON.parse(window.localStorage.getItem("token"))?.role ===
              "admin" ? (
              <>
                {/* ???????????????? ?????????? ??????????*/}
                <Route path="create_test" element={<CreateTest />} />
                <Route path="give_permission_user" element={<ProfileAdmin />} />                {/* ???????? ???????? ????????????????????????  ??????????*/}
                <Route path="log" element={<Logging />} />

              </>
            ) : (
              ""
            )}
            {window.localStorage.getItem("token") &&
            JSON.parse(window.localStorage.getItem("token"))?.role ===
              "expert" ? (
              <>
                {/* ???????????????? ???????????????? ??????????????*/}
                <Route path="create_subject" element={<CreateSubject />} />
                <Route path="infoexpert" element={<InfoExpert />} />
                {/* ?????????????? ???????????????? */}
              </>
            ) : (
              ""
            )}
            {window.localStorage.getItem("token") &&
            JSON.parse(window.localStorage.getItem("token"))?.role ===
              "teacher" ? (
              <>
                {/* ???????????????? ??????????  ??????????????*/}
                <Route path="create_subject" element={<CreateSubject />} />
                <Route path="create_test" element={<CreateTest />} />
                <Route path="infoexpert" element={<InfoExpert />} />
                <Route
                  path="expert_statistics"
                  element={<TeacherExpertStatistics />}
                />
                <Route
                  path="mark_test"
                  element={<MarkTest testData={testData} />}
                />
                <Route
                  path="statistics_test"
                  element={<StatisticsTest testData={testData} />}
                />
                {/* ?????????????? ???????????????? */}
              </>
            ) : (
              ""
            )}
            <Route
              path="find_expert"
              element={<FindExpert expertData={expertData} />}
            />
            <Route
              path="find_expert/:id"
              element={
                <FindProfileExpert expertDataProfile={expertDataProfile} />
              }
            />
            <Route path="infouser" element={<InfoUser />} />
            <Route path="tests" element={<Tests TestToWork={testToWork} />} />
            <Route path="tests/:id" element={<Test testData={testData} />} />
            <Route
              path="tests/:id/result"
              element={<ResultTest testData={testData} />}
            />
            <Route path="statistics" element={<Statistics />} />
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
/* ???????????? ????????????, ?? ???????????? ?????? ??????????????(????-????????) ?? ????????????) ???????????? ???? ?????? ????????????????, ?? ???? ???????? ?????????? */
export default App;

//  {/* <Route path="profile" element={<Profile />}>
//             <Route path="infoexpert" element={<InfoExpert />} />{" "}
//             {/* ?????????????? ???????????????? */}
//             <Route path="infoteacher" element={<InfoTeacher />} />{" "}
//             {/* ?????????????? ?????????????? */}
//             <Route path="create_test" element={<CreateTest />} />{" "}
//
//             {/* ???????????????? ????????????????  ??????????????*/}
//             <Route path="give_access_test" element={<GiveAccessTest />} />{" "}
//             {/* ???????? ???????????? ?? ?????????? ??????????????*/}
//             <Route
//               path="give_permission_user"
//               element={<ProfileAdmin />}
//             />{" "}
//             ???????? ???????? ????????????????????????  ??????????
//           */}
