import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Feedback } from "./pages/Feedback";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { QnA } from "./pages/QnA";
import { Signup } from "./pages/Signup";

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
        </Route>
      </Routes>
    </>
  );
};

export default App;
