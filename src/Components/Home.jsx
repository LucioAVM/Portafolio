/**
 * Home component
 *
 * La sección en la parte superior de la página para mostrar la imagen de su
 * Elección, nombre y título que describa el enfoque de su carrera.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * A continuación se muestra una imagen de muestra. Sube la imagen de tu elección en las "imágenes"
 * directorio e importar aquí para su uso. A continuación, establezca imageAltText para encadenar eso
 * representa lo que ves en esa imagen.
 *
 *
 * ¿Necesitas una imagen? Echa un vistazo a https://unsplash.com para descargar una foto que
 * Uso gratuito en su sitio.
 */
//import image from "../images/woman-with-tablet.jpg";
import image from "../images/FachaSinFondo.png";

const imageAltText = "imagen de lucio bien fachero";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <button id= "botonCV"><a href="CV_MonsalboLucio_PDF.pdf" download>Descargar CV</a></button>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
