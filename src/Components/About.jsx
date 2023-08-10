/**
 * Acerca del componente
 *
 * Espacio para que describas más sobre ti mismo.
 */

import React from "react";

/**
 * Acerca de la imagen de fondo
 *
 * A continuación se muestra una imagen de muestra. Sube la imagen de tu elección en las "imágenes"
 * directorio e importar aquí para su uso. A continuación, establezca imageAltText para encadenar eso
 * representa lo que ves en esa imagen.
 *
 * ¿Necesitas una imagen? Echa un vistazo a https://unsplash.com para descargar una imagen que
 * Uso gratuito en su sitio.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Ordenar descripción que expande su título en el componente Inicio.
 */
const description =
  "Estudiante de programación en la Universidad Tecnológica Nacional en Avellaneda. Actualmente cuento con 13 de las 24 materias de la carrera aprobadas. Aparte de la programación me intereso mucho en las nuevas tecnologías y la ciberseguridad";

/**
 * Lista de algunas de las habilidades o tecnologías en las que trabaja, está aprendiendo,
 * apasionado por, o disfrutar,
 */
const skillsList = ["C", "C#", "linux", "Git", "Github", "Javascript"];

/**
 * Use esto para dar más información sobre lo que le apasiona,
 * cómo trabajas mejor, o incluso una cotización. Esto ayudará a alguien a aprender más
 * sobre ti a nivel profesional.
 */
const detailOrQuote =
  "Me gusta mucho la programación y la tecnología en general, disfruto de aprender cosas nuevas y me considero una persona muy curiosa.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
