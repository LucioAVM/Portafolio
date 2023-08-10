/**
 * Portfolio component
 *
 * Destaca algunas de tus creaciones. Estos pueden ser diseños, sitios web,
 * Contribuciones de código abierto, artículos que has escrito y más.
 *
 * Esta es una gran área para que usted pueda agregar y refinar continuamente
 * a medida que continúas aprendiendo y creando.
 */

import React from "react";

/**
 * Imagen de escritorio
 *
 * A continuación se muestra una imagen de escritorio de muestra. Siéntase libre de actualizar esto a una imagen de su elección,
 * actualizando debajo de imageAltText a la cadena que representa lo que ve en esa imagen.
 *
 * ¿Necesitas una imagen? Echa un vistazo a https://unsplash.com para descargar una foto que
 * Uso gratuito en su sitio.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Lista de proyectos
 *
 * Una matriz de objetos que se utilizarán para mostrar en su proyecto
 * Sección de enlaces. A continuación se muestra una muestra, actualización para reflejar los enlaces que le gustaría resaltar.
 */
const projectList = [
  {
    title: "Sistema de Administracion Escolar",
    description:
      "Sistema de administracion de alumnos el cual dentro de otras cosas permite dar de alta, modificar y dar de baja asi como filtrar por cualquiera de los 5 campos que posee cada uno, esto a partir de la implemetacion de una LinkedList de desarrollo propia y usando archivos.csv para contar con persistencia de datos. Desarrollado en C",
    url: "https://github.com/LucioAVM/unPocoDeTodo/tree/main/NoMachete",
  },/*
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },*/
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            className="slide-in-left"
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
