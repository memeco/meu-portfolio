import React from "react";

function Certificado() {
  const [linkColor, setLinkColor] = useState("blue");

  useEffect(() => {
    const links = document.querySelectorAll(".certificados a");
    for (const link of links) {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
      link.addEventListener("click", handleClick);
    }

    return () => {
      for (const link of links) {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
        link.removeEventListener("click", handleClick);
      }
    };
  }, []);

  function handleMouseEnter(e) {
    e.target.style.color = "#FFFFFF";
  }

  function Certificado() {
    const [linkColor, setLinkColor] = useState("blue");
  
    useEffect(() => {
      const links = document.querySelectorAll(".certificados a");
      for (const link of links) {
        link.addEventListener("mouseenter", handleMouseEnter);
        link.addEventListener("mouseleave", handleMouseLeave);
        link.addEventListener("click", handleClick);
      }
  
      return () => {
        for (const link of links) {
          link.removeEventListener("mouseenter", handleMouseEnter);
          link.removeEventListener("mouseleave", handleMouseLeave);
          link.removeEventListener("click", handleClick);
        }
      };
    }, []);
  
    function handleMouseEnter(e) {
      e.target.style.color = "#FFFFFF";
    }
  
    function handleMouseLeave(e) {
      if (e.target.tagName === "A") {
        e.target.style.color = linkColor;
      }
    }
  
    function handleClick(e) {
      if (e.target.tagName === "A") {
        e.target.style.color = "blue";
      }
    }

  return (
    <section
      id="certificado"
      className="py-5"
      style={{ backgroundColor: "#CCCCCC" }}
    >
      <div className="container">
        <h2>Meus certificados</h2>

        <p>Meus certificados e qualificações:</p>

        <ul className="certificados">
          <li>
            <p>
              Agosto de 2023 -{" "}
              <a
                href="https://www.credly.com/earner/earned/badge/b012a013-6920-427c-8107-68b36145cfd0"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                style={{ color: linkColor }}
              >
                Certificado Profissional de Análise de Dados do Google e
                Coursera.
              </a>
            </p>
          </li>
          {/* ... other certificate list items */}
        </ul>
      </div>
    </section>
  );
}

export default Certificado;
