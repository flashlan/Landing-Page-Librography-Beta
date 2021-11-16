import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const Contact = () => {


  const history = useHistory();
  const goBack = () => {
    history.push();
  }

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const[contactEmail, setContactEmail] = useState("");

  const sendEmail = async() =>  {
    e.preventDefault();
    console.log("sending email");
  }


  return(
    <React.Fragment>
      <button className="back" onClick={goBack}> &larr; Go Back</button>
      <form className="contact" onSubmit={sendEmail}>
        <h2> Envie uma mensagem para ajudar-nos a construir o melhor software gerenciador de Bibliotecas</h2>

        <label htmlFor="title"> Message Title: </label>
        <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="content">Message Content: </label>
        <textarea name="content" onChange={(e) => setContent(e.target.value)} />

        <label htmlFor="email">Contact Email: </label>
        <input type="email" name="email" onChange={(e) => setContactEmail(e.target.value)} />

        <input type="submit" value="Send Message" />>      
      </form>
    </React.Fragment>
  )



}

export default Contact;
