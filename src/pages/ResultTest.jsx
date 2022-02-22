import style from "./Pages.module.css";

export const ResultTest = () => {
    return (
        <section className={style.section_result}>
            <h2>Поздравляем! вы ДЕБИЛ</h2>
            <p>Название теста: {"Грамматика"}</p>
            <p>Ваш итоговый балл: {47} из 46</p>
        </section>
    )
}