import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useSearchParams, createSearchParams } from "react-router-dom";

const dialogs = ["ayayayay", "eeeeee", "dadada"];
const messages = {
  ayayayay: [
    {
      id: 1,
      chat: "ayayayay",
      name: "Антон",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
    },
    {
      id: 2,
      chat: "ayayayay",
      name: "Антон",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
    },
  ],
  eeeeee: [
    {
      id: 1,
      chat: "eeeeee",
      name: "Вася",
      text: "Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      chat: "eeeeee",
      name: "Вася",
      text: "Lorem ipsum dolor sit amet",
    },
  ],
  dadada: [
    {
      id: 1,
      chat: "dadada",
      name: "Петя",
      text: "Lorem ipsum dolor sit amet, consectetur adip consectetur adip consectetur adip",
    },
    {
      id: 2,
      chat: "dadada",
      name: "Петя",
      text: "Lorem ipsum dolor sit amet, consectetur adip consectetur adip consectetur adip",
    },
  ],
};

export const Messenger = () => {
  const [message, setMessage] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const [wsData, setWsData] = useState([]);

  useEffect(() => {
    window.Echo.channel("messenger").listen("NewMessage", (data) => {
      console.log(data);
      setWsData([...wsData, data]);
      console.log("------------------------------------------------------");
    });
    console.log("+++++++++++++++++");
  }, [wsData, setWsData]);

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

  const handleSubmit = async () => {
    let data = {
      dialogId: 1,
      userId: 1,
      text: message,
    };
    // data = JSON.stringify(data);
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/messages", {
        data
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ margin: 10 }}>
          {dialogs.map((el) => (
            <NavLink
              // to={`?chat=${el}`}
              to={`?${createSearchParams({ chat: el })}`}
              style={() => ({
                color: el === searchParams.get("chat") ? "green" : "red",
              })}
              key={el}
            >
              <div
                style={{
                  cursor: "pointer",
                  padding: 7,
                  margin: 10,
                  backgroundColor: "rgba(1,1,1,0.1)",
                }}
              >
                {el}
              </div>
            </NavLink>
          ))}
          {JSON.stringify(wsData)}
        </div>
        {searchParams.get("chat") && (
          <div
            style={{
              height: 300,
              width: 500,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                flexGrow: 1,
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              {messages?.[searchParams.get("chat")] ? (
                messages?.[searchParams.get("chat")]?.map(
                  ({ id, name, text }) => (
                    <div key={id}>
                      <div style={{ paddingBottom: -20 }}>{name}</div>
                      <div>{text}</div>
                    </div>
                  )
                )
              ) : (
                <p>Тут пусто</p>
              )}
            </div>
            <div>
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
              />
              <input onClick={handleSubmit} type="submit" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
