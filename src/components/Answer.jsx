import style from "./Components.module.css";

export const Answer = ({ onChange, handleDelete, onChangeRightAnswer }) => {
  return (
    <div className={style.answer_input}>
      <button onClick={() => handleDelete()}>X</button>
      <span>Ответ:</span>
      <input
        type="text"
        placeholder="Введите ответ"
        onChange={(e) => onChange(e)}
      />
      <input
        type="checkbox"
        id=""
        onChange={(e) => onChangeRightAnswer(e)}
      />
    </div>
  );
};
