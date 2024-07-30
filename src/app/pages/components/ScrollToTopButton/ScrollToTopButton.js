import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    if (isClient) {
      window.addEventListener("scroll", toggleVisibility);
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }
  }, [isClient]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isClient) {
    return null; // Retorna null no lado do servidor
  }

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} style={buttonStyle}>
          Scroll to Top
        </div>
      )}
    </div>
  );
};

const buttonStyle = {
  position: "fixed",
  bottom: "50px",
  right: "50px",
  padding: "10px",
  backgroundColor: "#000",
  color: "#fff",
  cursor: "pointer",
};

export default ScrollToTopButton;
