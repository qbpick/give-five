import { Route, Routes } from "react-router-dom";
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

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="QnA" element={<QnA />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="messenger" element={<Messenger />} />
          <Route path="messanger" element={<Messanger />} />
          <Route path="profile" element={<Profile />}>
            <Route path="infouser" element={<InfoUser />} />
            <Route path="tests" element={<Tests />} />
            <Route path="tests/:id" element={<Test />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
/* ПРОСТИ АНДРЕЙ, Я НАСРАЛ ТУТ НЕМНОГА(ЧУ-ЧУТЬ) В РОУТЕР) СИЛЬНО НЕ БЕЙ ПЖПЖПЖПЖ, Я ТЕ БЕРН КУПЛЮ */
export default App;
