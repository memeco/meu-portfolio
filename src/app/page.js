"use client";
import React from "react";
import ScrollToTop from "./pages/components/ScrollToTopButton/ScrollToTopButton";
import Sobre from "./pages/components/Sobre";
import RedesSociais from "./pages/components/RedesSociais";
import Portfolio from "./pages/components/Portfolio";
import Contato from "./pages/components/Contato";
import Skills from "./pages/components/Skills";
import Certificado from "./pages/components/Certificado";
import Head from "next/head";
import bootstrap from "../../public/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Meu portfólio</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        />
      </Head>
      <ScrollToTop />
      <header>
        <div className="container">
          <h1>Meu portfólio</h1>
          <bootstrap></bootstrap>
          <p>
            <a
              id="english"
              href="https://memeco-github-io.translate.goog/?_x_tr_sl=pt&_x_tr_tl=en&_x_tr_hl=pt-BR&_x_tr_pto=wapp"
              style={{ color: "white", background: "black" }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "black";
                e.currentTarget.style.color = "#CCC";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "black";
                e.currentTarget.style.color = "white";
              }}
            >
              Switch to English.
            </a>
          </p>
        </div>
      </header>

      <nav className="container navbar navbar-expand-lg navbar-light bg-light">
        <div className="container mx-auto text-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#sobre" title="Sobre" alt="Sobre">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/memeco/memeco.github.io/blob/gh-pages/Emerson_Marques_Pedro_CV_2024-PTBr.pdf"
                  title="Meu CV"
                  alt="Meu CV"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meu CV
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#skills"
                  title="Skills"
                  alt="Skills"
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#redes"
                  title="Redes Sociais"
                  alt="Redes Sociais"
                >
                  Redes Sociais
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#portfolio"
                  title="Meu portfólio"
                  alt="Meu portfólio"
                >
                  Meu portfólio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#certificado"
                  title="Meus certificados"
                  alt="Meus certificados"
                >
                  Meus certificados{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contato" title="Contato">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Sobre />
      <Skills />
      <RedesSociais />
      <Portfolio />
      <Certificado />
      <Contato />

      <footer id="footer">
        <div className="container">Meu portfólio &copy; 2024</div>
      </footer>
    </div>
  );
};

export default Home;
