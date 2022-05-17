import axios from "axios";
import { useEffect, useState } from "react";
import { createSearchParams, NavLink, useSearchParams } from "react-router-dom";
import style from "./Pages.module.css";

export const Messanger = () => {
  const [message, setMessage] = useState({
    message: "",
    to_user: 0,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const [chats, setChats] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res =
          window.localStorage.getItem("token") &&
          JSON.parse(window.localStorage.getItem("token"))?.role === "admin"
            ? await axios.post(
                "https://high-five.site/api/admin/getFriends",
                {},
                {
                  withCredentials: true,
                }
              )
            : window.localStorage.getItem("token") &&
              JSON.parse(window.localStorage.getItem("token"))?.role ===
                "teacher"
            ? await axios.post(
                "https://high-five.site/api/teacher/getFriends",
                {},
                {
                  withCredentials: true,
                }
              )
            : window.localStorage.getItem("token") &&
              JSON.parse(window.localStorage.getItem("token"))?.role ===
                "expert"
            ? await axios.post(
                "https://high-five.site/api/expert/getFriends",
                {},
                {
                  withCredentials: true,
                }
              )
            : await axios.post(
                "https://high-five.site/api/user/getFriends",
                {},
                {
                  withCredentials: true,
                }
              );
        setChats(res.data);
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    const cb = (e) => {
      if (e.key === "Escape") {
        setSearchParams({});
      }
    };
    window.addEventListener("keydown", cb);
    return () => {
      window.removeEventListener("keydown", cb);
    };
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    (async () => {
      try {
        const res =
          window.localStorage.getItem("token") &&
          JSON.parse(window.localStorage.getItem("token"))?.role === "admin"
            ? await axios.post(
                `https://high-five.site/api/admin/session/chats/${searchParams.get(
                  "chat"
                )}`,
                {},
                {
                  withCredentials: true,
                }
              )
            : window.localStorage.getItem("token") &&
              JSON.parse(window.localStorage.getItem("token"))?.role === "user"
            ? await axios.post(
                `https://high-five.site/api/user/session/chats/${searchParams.get(
                  "chat"
                )}`,
                {},
                {
                  withCredentials: true,
                }
              )
            : window.localStorage.getItem("token") &&
              JSON.parse(window.localStorage.getItem("token"))?.role ===
                "expert"
            ? await axios.post(
                `https://high-five.site/api/expert/session/chats/${searchParams.get(
                  "chat"
                )}`,
                {},
                {
                  withCredentials: true,
                }
              )
            : await axios.post(
                `https://high-five.site/api/teacher/session/chats/${searchParams.get(
                  "chat"
                )}`,
                {},
                {
                  withCredentials: true,
                }
              );
        setChatMessages(res.data);
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [searchParams, setSearchParams]);

  const hadnleInput = (e) => {
    setMessage({ ...message, message: e.target.value });
  };
  const handleSubmit = async (e) => {
    try {
      const res =
        window.localStorage.getItem("token") &&
        JSON.parse(window.localStorage.getItem("token"))?.role === "admin"
          ? await axios.post(
              `https://high-five.site/api/admin/send/${searchParams.get(
                "chat"
              )}`,
              message,
              { withCredentials: true }
            )
          : window.localStorage.getItem("token") &&
            JSON.parse(window.localStorage.getItem("token"))?.role === "user"
          ? await axios.post(
              `https://high-five.site/api/user/send/${searchParams.get(
                "chat"
              )}`,
              message,
              { withCredentials: true }
            )
          : window.localStorage.getItem("token") &&
            JSON.parse(window.localStorage.getItem("token"))?.role === "expert"
          ? await axios.post(
              `https://high-five.site/api/expert/send/${searchParams.get(
                "chat"
              )}`,
              message,
              { withCredentials: true }
            )
          : await axios.post(
              `https://high-five.site/api/teacher/send/${searchParams.get(
                "chat"
              )}`,
              message,
              { withCredentials: true }
            );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className={style.section_messanger}>
      <div className={style.messanger_box}>
        <div className={style.dialogs_user}>
          {chats.length
            ? chats.map((chat) =>
                chat.session != null ? (
                  <NavLink
                    to={`?${createSearchParams({
                      chat: chat.session.id,
                      name_chat: chat.name,
                    })}`}
                    className={() =>
                      chat.name === searchParams.get("chat") ? "active" : ""
                    }
                    // style={() => ({
                    //   color: "Серега" === searchParams.get("chat") ? "green" : "red",
                    // })}
                    key={chat.id}
                  >
                    {chat.name}
                  </NavLink>
                ) : (
                  ""
                )
              )
            : "Пока у вас нет диалогов"}
        </div>
        <div className={style.box_messanger}>
          <p>{searchParams.get("name_chat")}</p>
          <div className={style.dialog_box}>
            <div>
              {chatMessages.length
                ? chatMessages.map((message) => (
                    <div className={style.message}>
                      <div className={style.title_message}>
                        <p className={style.name_user__message}>
                          {message.type ? "Я" : "Мне"}
                        </p>
                        &nbsp;
                        <p>{message.send_at}</p>
                      </div>
                      <p className={style.text_message}>{message.message}</p>
                    </div>
                  ))
                : "Пока тут нет сообщений"}
            </div>
          </div>
          <div className={style.send_message}>
            <textarea
              onInput={(e) => hadnleInput(e)}
              value={message.message}
              placeholder="Напишите сообщение"
            />
            <button onClick={() => handleSubmit()}>Отправить</button>
          </div>
        </div>
      </div>
    </section>
  );
};
