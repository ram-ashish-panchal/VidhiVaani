import { Link } from "react-router-dom";
import "../public/css/home.css";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

enum MessageType {
  Sent = "Sent",
  Received = "Received",
}
type ButtonData = {
  text: string;
  link: string;
  toSend: string;
  icon: string;
};

const App: React.FC = () => {
  const [messages, setMessages] = useState<
    { type: MessageType; text: string }[]
  >([]);
  const [inputValue, setInputValue] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  const sendQueryToBackend = async (data: string): Promise<void> => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api?text=${data}`
      );
      const json = response.data as { message: string };
      addMessage(MessageType.Received, json.message);
    } catch (error) {
      addMessage(MessageType.Received, error.message);
    }
  };

  const addMessage = (type: MessageType, message: string): void => {
    setMessages((prevMessages) => [...prevMessages, { type, text: message }]);
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  const addButton = (data: ButtonData[]): void => {};

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      const trimmedValue = inputValue.trim();
      if (trimmedValue) {
        addMessage(MessageType.Sent, trimmedValue);
        setInputValue("");
        sendQueryToBackend(trimmedValue);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    addMessage(
      MessageType.Received,
      "Welcome to Vidhi Vaani, your personal law assistant."
    );
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [inputValue]);

  return (
    <>
      <div className="main-body">
        <div className="header">
          <img className="logo" src="/images/logo.png" alt="logo" />
          <Link to="/fine">
            <button type="button" className="pay-button">
              Pay
            </button>
          </Link>
        </div>
        <div className="content">
          <img
            className="emblem"
            src="/images/emblem.png"
            alt="Satyamev Jayate"
          />
          <div className="chat" ref={chatRef}>
            {messages.map((msg, index) => (
              <p
                key={index}
                style={{
                  backgroundColor:
                    msg.type === MessageType.Sent ? "black" : "white",
                  color: msg.type === MessageType.Sent ? "white" : "black",
                  fontSize: "large",
                  fontWeight: 200,
                  padding: "10px 10px 10px 30px",
                  borderRadius: "50px 8px 8px 8px",
                  margin: "5px",
                  maxWidth: "fit-content",
                  wordWrap: "break-word",
                  textAlign: msg.type === MessageType.Sent ? "right" : "left",
                  marginLeft: msg.type === MessageType.Sent ? "auto" : "0",
                  marginRight: msg.type === MessageType.Sent ? "0" : "auto",
                }}
              >
                {msg.text}
              </p>
            ))}
          </div>
        </div>
        <div className="footer">
          <img className="chakra" src="/images/Ashoka_Chakra.png" alt="@" />
          <input
            className="input-area"
            type="text"
            placeholder="Satyamev Jayate"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="button"
            className="send-button"
            onClick={() => {
              const trimmedValue = inputValue.trim();
              if (trimmedValue) {
                addMessage(MessageType.Sent, trimmedValue);
                setInputValue("");
                sendQueryToBackend(trimmedValue);
              }
            }}
          >
            send
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
