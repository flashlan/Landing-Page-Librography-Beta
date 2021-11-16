import React, {useState} from "react";
import Template from "../assets/images/Template1.svg";
import { Link, useHistory } from "react-router-dom";
import "../assets/css/Main.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Main = () => {
     AOS.init({ duration: 2000}); 

     

    const [joined, setJoined] = useState("");
    const history = useHistory();


    const join = (e) => {
        e.preventDefault();
        if(joined !== "") {
            let today = new Date();
            let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            history.push(`/thanks/${joined}`, date );
        }
    }

    return (
        
        <React.Fragment>
            
            <header>
                
            <img src={Template} />
            <div data-aos="fade-right">
                <h1>Estamos Produzindo o <br />Melhor Software <br />Gerenciador de Bibliotecas </h1>
                <p> Librography é um gerenciador completo para bibliotecas e  pode ser usado grátis para colecões particulares de livros e pequenas bibliotecas com ate 3 mil volumes.</p>
                <Link to="/contact">Contato</Link>
            </div>
            </header>

            <main>
                <section className="services">
                    <h2>Recursos</h2>

                    <div className="service-container">
                        <div data-aos="slide-right" className="service-card service-one"></div>
                        <div data-aos="slide-left"className="service-description">
                            <h3>Gerenciamento avançado</h3>
                            <div>* Controle de Funcionários  com diversos níveis de acesso: Administrador, Atendente, Manutençao, Pesquisador.<br /> * Cadastro de estudantes e Professores. <br /> * Suporte a capas de Libros. <br /> * Consulta por Nome, ISBN, Autor, etc.<br /> * Recurso de localização do local do livro no Bibliotace(Piso, Corredor,  Seção, Estante).<br /> * Suporte integrado para confecção de cartão/crachá de Estudante ou Professor. <br /> * Impressão de tickets e multas por atraso. <br /> * Suporte a leitor de código barras(ISBN) e QrCodes(Tickets de empréstimo)<br /> * Exportação de dados para planilhas .Xlsx.<br /> * 3 Modos disponíveis: Cliente/Servidor/Qiosque de consulta<br /> * Cadastro de Fornecedores.<br /> * Integração para registro ISBN*.<br /> * Suporte a protocolo Z39.50</div>
                        </div>
                    </div>

                    <div className="service-container">
                        <div data-aos="slide-right" className="service-card service-two"></div>
                        <div data-aos="slide-left" className="service-description">
                            <h3>Interface Intuitiva</h3>
                            <div>bla vblal lblxlvsl lsdlf sldflsdl sdlf osdf lsd flslssdflsdfls flsd flsd f</div>
                        </div>
                    </div>

                    <div className="service-container">
                        <div data-aos="slide-right" className="service-card service-three"></div>
                        <div data-aos="slide-left" className="service-description">
                            <h3>Interface Intuitiva</h3>
                            <div>bla vblal lblxlvsl lsdlf sldflsdl sdlf osdf lsd flslssdflsdfls flsd flsd f</div>
                        </div>
                    </div>

                    <div className="service-container">
                        <div data-aos="slide-right" className="service-card service-four"></div>
                        <div data-aos="slide-left" className="service-description">
                            <h3>Interface Intuitiva</h3>
                            <div>* Temas Light/Dark<br /> * Consulta intuitiva de histórico<br /> *</div>
                        </div>
                    </div>

                </section>

                <section data-aos="slide-up">
                    <h2>Receba as novidades sobre nosso produtos direto em seu email.</h2>

                    <form className="newsletter" onSubmit={join}>
                        <input type="email" placeholder="Insira seu email" onChange={(e) => setJoined(e.target.value)} />
                        <input type="submit" value="Join Now!" />

                    </ form>
                    
                </section>
            </main>
        </React.Fragment>

    )

}

export default Main;