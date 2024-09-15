import { Link } from "react-router-dom";
import "../public/css/home.css";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { useEffect } from "react";

const App: React.FC = () => {
  /**
   * Adds a query to the chat log
   * @function addQuerry
   * @description Creates a new paragraph element and appends it to the chat log.
   *              Also appends a line break element. Clears the value of the input
   *              field and scrolls the content div to the bottom of its
   *              scrollHeight.
   */
  const addQuerry = () => {
    const contentDiv = document.getElementsByClassName(
      "content"
    )[0] as HTMLElement;
    const inputField = document.getElementsByClassName(
      "input-area"
    )[0] as HTMLInputElement;
    const chatDiv = document.getElementsByClassName("chat")[0] as HTMLElement;
    const data = inputField.value.trim();
    if (data) {
      const myP = document.createElement("p");
      const myBr = document.createElement("br");
      myP.textContent = data;
      chatDiv.appendChild(myP);
      chatDiv.appendChild(myBr);
      inputField.value = "";
      contentDiv.scrollTop = contentDiv.scrollHeight;
    }
  };

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
          chatDiv.appendChild(myP);
          chatDiv.appendChild(myBr);
          inputField.value = "";
          contentDiv.scrollTop = contentDiv.scrollHeight;
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
          <button type="button" className="send-button" onClick={addQuerry}>
            send
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
