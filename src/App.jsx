import React from "react";
import "./pages/style.css"; // Importe seu arquivo style.css aqui
import Sobre from "./app/pages/components/Sobre";
import RedesSociais from "./app/pages/components/RedesSociais";
import Portfolio from "./app/pages/components/Portfolio";
import Contato from "./app/pages/components/Contato";
import Skills from "./app/pages/components/Skills";
import ScrollToTopButton from "./app/pages/components/ScrollToTopButton/ScrollToTopButton";
import Certificado from "./app/pages/components/Certificado";

function App() {
  return (
    <div>
      <ScrollToTopButton />
      <header>
        <div className="container">
          <h1>Meu portfólio</h1>
          <p>
            <a
              id="english"
              href="https://memeco-github-io.translate.goog/?_x_tr_sl=pt&_x_tr_tl=en&_x_tr_hl=pt-BR&_x_tr_pto=wapp"
              style={{
                color: "white",
                background: "black",
              }}
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
        {
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
                  <a
                    className="nav-link"
                    href="#sobre"
                    title="Sobre"
                    alt="Sobre"
                  >
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
        }
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
}

export default App;
