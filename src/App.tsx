import { Link } from "react-router-dom";
import "../public/css/home.css";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { useEffect } from "react";
import axios from "axios";

const App: React.FC = () => {

  // Sending post request to backend
const sendQueryToBackend = async (data: any): Promise<void> => {
  try {
    // const response = await axios.post("backend_url",{data});
    const response: string =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptas quis eaque, molestias dignissimos sit doloribus minima quas beatae eaque totam aliquid! Qui, neque commodi. Numquam ab sapiente incidunt suscipit quisquam corporis quaerat ipsam quas adipisci nam voluptas fugiat velit, sed odio sit ea aspernatur rem accusantium? Esse libero laudantium rem repudiandae non ratione nam autem deserunt, eveniet quasi incidunt, quo soluta modi. Eum nobis aperiam recusandae non, architecto doloremque animi voluptas obcaecati iure? Ipsum ad, voluptatibus similique beatae aut, repellat iste veritatis ullam cumque eveniet aspernatur deserunt incidunt quae harum delectus exercitationem ipsam dolorem odio, totam vitae pariatur sint aliquam maiores? Quod quia, laborum nesciunt delectus inventore doloremque quo sunt sit aliquid voluptas eveniet ad ea quaerat, suscipit id impedit vitae omnis incidunt veniam. Omnis mollitia facere laudantium, asperiores provident ipsam reprehenderit ducimus repudiandae obcaecati hic consectetur praesentium iusto. In atque sint sunt nemo aliquid perferendis similique adipisci voluptas sit incidunt, magni praesentium temporibus quam repudiandae nesciunt, optio labore nisi? A, porro eum. Repellat reiciendis quisquam sit itaque temporibus natus, tempore eveniet, saepe sunt sapiente quidem eum voluptatum beatae nemo adipisci qui accusantium! Rerum repellendus quo modi neque officia ab. Beatae, enim? Pariatur eligendi mollitia excepturi, dolorem amet architecto, culpa perspiciatis quos, adipisci modi exercitationem dolorum minus accusantium odio ullam quaerat quis ipsum est unde inventore consequatur! Minima consequuntur, facere molestiae, ipsa dignissimos aliquid ab ea voluptatibus eveniet alias neque vitae. Aliquam, nihil assumenda. Exercitationem ipsum cumque, corporis nobis cum, dolorum ut animi neque illum voluptas fugiat! Eum dolorum nisi excepturi. Voluptate, corrupti.";
    
    addResponse(response);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Function to add response to the DOM
function addResponse(response: string): void {
  const contentDiv = document.getElementsByClassName("content")[0] as HTMLElement;
  const chatDiv = document.getElementsByClassName("chat")[0] as HTMLElement;

  if (response) {
    const myP = document.createElement("p");
    const myBr = document.createElement("br");
    myP.textContent = response;

    // Apply styles using DOM manipulation
    myP.style.backgroundColor = 'black';
    myP.style.color = 'white';
    myP.style.fontSize = 'large';
    myP.style.fontWeight = '200';
    myP.style.padding = '10px 10px 10px 30px';
    myP.style.borderRadius = '50px 8px 8px 8px';
    myP.style.margin = '5px';
    myP.style.maxWidth = 'fit-content';
    myP.style.wordWrap = 'break-word';

    // Align the response element to the right
    myP.style.textAlign = 'right';
    myP.style.marginLeft = 'auto';
    myP.style.marginRight = '0';

    chatDiv.appendChild(myP);
    chatDiv.appendChild(myBr);
    contentDiv.scrollTop = contentDiv.scrollHeight;
  }
}


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
      sendQueryToBackend(data);
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
          <button type="button" className="send-button" onClick={addQuerry}>
            send
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
