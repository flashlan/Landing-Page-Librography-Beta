import React, { useState } from "react";
import Template from "../assets/images/Template1.svg";
import { Link, useHistory } from "react-router-dom";

const Main = () => {

    const [joined, setJoined] = useState("");
    const history = useHistory();


    const join = (e) => {
        e.preventDefault();
        if(joined !== "") {
            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            history.push(`/thanks/${joined}`, date );
        }

    }


    return (
        <React.Fragment>
            <img src={Template} />
            <div>
                <h1>Estamos Produzindo Software Gerenciador de Bibliotecas: </h1>
                <p> Librography é um gerenciador para Bibliotecas e colecões particulares de Livros</p>
                <Link to="/subscribe">Fique por dentro!</Link>
            </div>

            <main>
                <section classname="services">
                    <h2>Serviços</h2>

                    <div className="service-container">
                        <div className="service-card service one"></div>
                        <div className="service descriptions">
                            <h3>Interface Intuitiva</h3>
                            <div>bla vblal lblxlvsl lsdlf sldflsdl sdlf osdf lsd flslssdflsdfls flsd flsd f</div>
                        </div>
                    </div>

                    <div className="service-container">
                        <div className="service-card service one"></div>
                        <div className="service descriptions">
                            <h3>Interface Intuitiva</h3>
                            <div>bla vblal lblxlvsl lsdlf sldflsdl sdlf osdf lsd flslssdflsdfls flsd flsd f</div>
                        </div>
                    </div>

                    <div className="service-container">
                        <div className="service-card service one"></div>
                        <div className="service descriptions">
                            <h3>Interface Intuitiva</h3>
                            <div>bla vblal lblxlvsl lsdlf sldflsdl sdlf osdf lsd flslssdflsdfls flsd flsd f</div>
                        </div>
                    </div>

                    <div className="service-container">
                        <div className="service-card service one"></div>
                        <div className="service descriptions">
                            <h3>Interface Intuitiva</h3>
                            <div>bla vblal lblxlvsl lsdlf sldflsdl sdlf osdf lsd flslssdflsdfls flsd flsd f</div>
                        </div>
                    </div>

                </section>

                <section>
                    <h2>Join our NewsLetter to get latest trends.</h2>

                    <form className="newsletter" onSubmit={join}>
                        <input type="email" placeholder="Your Email gos here" onChange={(e) => setJoined(e.target.value)} />
                        <input type="submit" value="Join Now!" />

                    </ form>
                    
                </section>
            </main>
        </React.Fragment>

    )

}

export default Main;