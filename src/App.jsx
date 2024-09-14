import { Link } from 'react-router-dom';
import '../CSS/home.css'
function App() {

  function addQuerry() {
    const contentDiv=document.getElementsByClassName('content')[0];
    const inputField = document.getElementsByClassName('input-area')[0];
    const chatDiv = document.getElementsByClassName('chat')[0];
    const data = inputField.value.trim();
    if (data) {
      const myP = document.createElement('p');
      const myBr = document.createElement('br');
      myP.textContent = data;
      chatDiv.appendChild(myP);
      chatDiv.appendChild(myBr);
      inputField.value = '';
      contentDiv.scrollTop = contentDiv.scrollHeight;
    }
  }



  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const contentDiv=document.getElementsByClassName('content')[0];
      const inputField = document.getElementsByClassName('input-area')[0];
      const chatDiv = document.getElementsByClassName('chat')[0];
      const data = inputField.value.trim();
      if (data) {
        const myP = document.createElement('p');
        const myBr = document.createElement('br');
        myP.textContent = data;
        chatDiv.appendChild(myP);
        chatDiv.appendChild(myBr);
        inputField.value = '';
        contentDiv.scrollTop = contentDiv.scrollHeight;
      }
    }
  });


  


  return (
    <>
      <div className='main-body'>
        <div className='header'>
          <img className="logo" src="/logo.png" alt="logo" />
          <Link to="/fine"><button className='pay-button' >Pay</button></Link>
        </div>
        <div className='content'>
          <img className="amblem" src="/amblem.png" alt="Satyamev jayate" />
          <div className='chat'></div>
        </div>
        <div className='footer'>
          <img className='chakra' src="/Ashoka_Chakra.svg.png" alt="@" />
          <input className='input-area' type='text' placeholder='Satyamev jayate'></input>
          <button className='send-button' onClick={addQuerry}>send</button>
        </div>
      </div>
    </>
  )
}

export default App;
