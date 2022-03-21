import style from "./Pages.module.css";

export const ResultTest = () => {
    const data = {
        max: localStorage.getItem("questions"),
        right: localStorage.getItem("result")
    }
    
    let all_right = data.right / data.max * 100 
    return (
        <section className={style.section_result}>
            <h2>Поздравляем! вы ДЕБИЛ</h2>
            <p>Название теста: {"Грамматика"}</p>
            <p>Ваш итоговый балл: {data.right} из {data.max}</p>
            <p>Ваша оценка: {Math.round(all_right, -1)}%</p>
        </section>
    )
}