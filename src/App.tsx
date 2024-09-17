import { Link } from "react-router-dom";
import "../public/css/home.css";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { useEffect } from "react";
import axios from "axios";

enum MessageType {
  Sent = "Sent",
  Received = "Received",
}
const App: React.FC = () => {
  // Sending post request to backend
  const sendQueryToBackend = async (data: string): Promise<void> => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api?text=${data}`
      );
      const json = (await response.data) as { message: string };
      addMessage(MessageType.Sent, json.message);
    } catch (error) {
      addMessage(MessageType.Sent, error.message);
    }
  };

  function addMessage(type: MessageType, message: string | null): void {
    const contentDiv = document.getElementsByClassName(
      "content"
    )[0] as HTMLElement;
    const inputField = document.getElementsByClassName(
      "input-area"
    )[0] as HTMLInputElement;
    const chatDiv = document.getElementsByClassName("chat")[0] as HTMLElement;
    switch (type) {
      case MessageType.Sent:
        if (message) {
          const myP = document.createElement("p");
          const myBr = document.createElement("br");
          myP.textContent = message;
          chatDiv.appendChild(myP);
          chatDiv.appendChild(myBr);
          contentDiv.scrollTop = contentDiv.scrollHeight;
        }
        break;
      case MessageType.Received: {
        const data = inputField.value.trim();
        if (data) {
          const myP = document.createElement("p");
          const myBr = document.createElement("br");
          myP.textContent = message;
          myP.style.backgroundColor = "black";
          myP.style.color = "white";
          myP.style.fontSize = "large";
          myP.style.fontWeight = "200";
          myP.style.padding = "10px 10px 10px 30px";
          myP.style.borderRadius = "50px 8px 8px 8px";
          myP.style.margin = "5px";
          myP.style.maxWidth = "fit-content";
          myP.style.wordWrap = "break-word";
          myP.style.textAlign = "right";
          myP.style.marginLeft = "auto";
          myP.style.marginRight = "0";
          chatDiv.appendChild(myP);
          chatDiv.appendChild(myBr);
          contentDiv.scrollTop = contentDiv.scrollHeight;
          inputField.value = "";
          contentDiv.scrollTop = contentDiv.scrollHeight;
          sendQueryToBackend(data);
        }
        break;
      }
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        const contentDiv = document.getElementsByClassName(
          "content"
        )[0] as HTMLElement;
        const inputField = document.getElementsByClassName(
          "input-area"
        )[0] as HTMLInputElement;
        const chatDiv = document.getElementsByClassName(
          "chat"
        )[0] as HTMLElement;
        const data = inputField.value.trim();
        if (data) {
          const myP = document.createElement("p");
          const myBr = document.createElement("br");
          myP.textContent = data;
          myP.style.backgroundColor = "black";
          myP.style.color = "white";
          myP.style.fontSize = "large";
          myP.style.fontWeight = "200";
          myP.style.padding = "10px 10px 10px 30px";
          myP.style.borderRadius = "50px 8px 8px 8px";
          myP.style.margin = "5px";
          myP.style.maxWidth = "fit-content";
          myP.style.wordWrap = "break-word";
          myP.style.textAlign = "right";
          myP.style.marginLeft = "auto";
          myP.style.marginRight = "0";
          chatDiv.appendChild(myP);
          chatDiv.appendChild(myBr);
          contentDiv.scrollTop = contentDiv.scrollHeight;
          inputField.value = "";
          contentDiv.scrollTop = contentDiv.scrollHeight;
          sendQueryToBackend(data);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
          <div className="chat" />
        </div>
        <div className="footer">
          <img className="chakra" src="/images/Ashoka_Chakra.png" alt="@" />
          <input
            className="input-area"
            type="text"
            placeholder="Satyamev Jayate"
          />
          <button
            type="button"
            className="send-button"
            onClick={() => addMessage(MessageType.Received, null)}
          >
            send
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
