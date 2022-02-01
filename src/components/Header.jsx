import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      Header
      <Link to="/">Главная</Link>
      <Link to="/QnA">Q&A</Link>
      <Link to="/feedback">Обратная связь</Link>
      <Link to="/login">Вход</Link>
    </>
  );
};
