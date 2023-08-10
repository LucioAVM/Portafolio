/**
 * Componente de cabecera
 *
 * Barra de navegación superior para su sitio. Establecido para permanecer visible como el
 * El usuario se desplaza para que pueda llegar constantemente a cualquier parte de su página.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#footer">Contact</a>
    </div>
  );
};

export default Header;
