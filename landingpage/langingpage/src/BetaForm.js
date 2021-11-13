import Select, { components, PlaceholderProps } from 'react-select';
/*import { loadReCaptcha } from 'react-recaptcha-google'*/
import React, { Component } from 'react'
import "./BetaForm.css";

const options = [
    { value: 'windows', label: 'Windows' },
    { value: 'macos', label: 'MacOs' },
    { value: 'linux', label: 'Linux' }
  ]

function BetaForm() {
    return(
        <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3> Librography Beta Program</h3>
            </div>
            <div className="item-menu">
              <a href="/#">Login</a>
            </div>
          </div>

          <div className="form">
            <h2>Inscreva-se para o programa Beta-Testers para receber uma licença gratuita!</h2>
            <form>
              <div className="selector">
                <Select classNamePrefix="mySelect" options={options}
                  placeholder={'Plataforma'}
                />
              </div>
              <div className="items-form">
                <input placeholder="Nome" type="text" />
                <input placeholder="Sobrenome" type="text" />
                <input placeholder="Email" type="text" />
                <input placeholder="Pais" type="text" />
                <button name="submit" value="submit">Enviar Solicitação</button>              
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}
export default BetaForm;