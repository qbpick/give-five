import axios from "axios";
import { useState, useEffect } from "react";
import style from "./ProfileAdmin.module.css";

export const Logging = () => {
  const [dataLog, setDataLog] = useState([]);
  const [dataIp, setDataIp] = useState([]);
  const [ipCreate, setIpCreate] = useState({ ip_address: "", user_id: 0 });
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://high-five.site/api/admin/ip/logging",
          { withCredentials: true }
        );
        console.log(res.data.data.items);
        await setDataLog(res.data.data.items);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://high-five.site/api/admin/ip/get", {
          withCredentials: true,
        });
        console.log(res.data.data.items);
        await setDataIp(res.data.data.items);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  // const createIpFunc = async () => {
  //   try {
  //     const res = await axios.post("https://high-five.site/api/admin/ip/post");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const deleteLogLine = async () => {
    setDataLog([]);
    try {
      const res = await axios.delete(
        "https://high-five.site/api/admin/ip/logging/delete",
        { withCredentials: true }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteIp = (id) => {};
  const updateIp = (id) => {};
  const addIp = async () => {
    try {
      const res = await axios.post(
        "https://high-five.site/api/admin/ip/post",
        ipCreate,
        { withCredentials: true }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className={style.logging_section}>
      <h2>IP-список</h2>
      <div className={style.data_ip_get}>
        {dataIp.map((ip) => {
          return <></>;
        })}
        <input
          type="text"
          placeholder="Введите IP"
          onInput={(e) => setIpCreate(ipCreate.ip_address = e.target.value)}
        />
        <input
          type="text"
          placeholder="Введите id user"
          onInput={(e) => setIpCreate(ipCreate.user_id = e.target.value)}
        />
        <button onClick={addIp}>Добавить Ip</button>
      </div>
      <h2>Лог Событий</h2>
      <button onClick={deleteLogLine}>Удаление лога</button>
      <table className={style.table_logging}>
        <tr className={style.header_table_log}>
          <td className={style.first_column}>Название лога</td>
          <td>Метод</td>
          <td>E-mail</td>
          <td>Ip</td>
          <td>Событие (New)</td>
          <td className={style.last_column}>Событие (Old)</td>
        </tr>
        {dataLog.map((log, index) => {
          return (
            <tr>
              <td
                style={{
                  borderBottomLeftRadius:
                    index == dataLog.length - 1 ? "20px" : "0px",
                }}
              >
                {log.log_name}
              </td>
              <td>
                {log.description == "created"
                  ? "Создание"
                  : log.description == "updated"
                  ? "Изменение"
                  : "Удаление"}
              </td>
              <td style={{ fontSize: "1em" }}>{log.user}</td>
              <td>{log.ip_address}</td>
              <td>{log.properties?.attributes}</td>
              <td
                style={{
                  borderBottomRightRadius:
                    index == dataLog.length - 1 ? "20px" : "0px",
                }}
              >
                {log.properties?.old}
              </td>
            </tr>
          );
        })}
      </table>
    </section>
  );
};
