import style from "./Pages.module.css";

export const Messanger = () => {
  return (
    <section className={style.section_messanger}>
      <div className={style.messanger_box}>
        <div className={style.dialogs_user}>
          <p>Серега</p>
          <p>НИкита</p>
          <p>БорИс)</p>
          <p>Серега</p>
          <p>НИкита</p>
          <p>БорИс)</p>
          <p>Серега</p>
          <p>НИкита</p>
          <p>БорИс)</p>
          <p>Серега</p>
          <p>НИкита</p>
          <p>БорИс)</p>
        </div>
        <div className={style.box_messanger}>
          <p>Виталий крутыш</p>
          <div className={style.dialog_messanger}>
            <div className={style.message}>
              <div className={style.title_message}>
                <p className={style.name_user__message}>Никита </p>&nbsp;
                <p>23:24</p>
              </div>
              <p className={style.text_message}>
                когда мы в клубе чиксы танцуют
              </p>
            </div>
          </div>
          <div className={style.send_message}>
            <textarea placeholder="Напишите сообщение" />
            <button>Отправить</button>
          </div>
        </div>
      </div>
    </section>
  );
};
