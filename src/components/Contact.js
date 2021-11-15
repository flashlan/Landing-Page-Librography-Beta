import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const Contact = () => {


  const history = useHistory();
  const goBack = () => {
    history.push();
  }

  const [title, setTitle] = useState("");
  const [ content, setContent] = useState("");
  const[contactEmail, setContactEmail] = useStates("");


  return(
    <React.Fragment>
      <button className="back" onClick={goback}> &larr; Go Back</button>
      <form className="contact" onSubmit={sendEmail}>
        <h2> Envie uma mensagem para ajudar-nos a construir o melhor software gerenciador de Bibliotecas</h2>

        <label htmlFor="title"> Message Title: </label>
        <input type="text" name="title" onChange={(e) => setTitle(e.target.value) } />
        
      </form>
    </React.Fragment>
  )



}
