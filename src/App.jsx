/**
 * Application component
 *
 * Para contener la configuración de toda la aplicación, rutas, estado, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * Este objeto representa su información. El proyecto está configurado para que usted
 * Sólo es necesario actualizarlos aquí, y los valores se pasan a propiedades a la carpeta
 * componentes que necesitan esa información.
 *
 * Actualice los valores a continuación con su información.
 *
 * Si no tiene uno de los sitios sociales en la lista, déjelo como una cadena vacía.
 */
const siteProps = {
  name: "Monsalbo Lucio",
  title: "Estudiante de Tecnicatura Universitaria en Programación - UTN",
  email: "lucioavm8@gmail.com",
  gitHub: "LucioAVM",
  instagram: "MonsalboLucio",
  linkedIn: "www.linkedin.com/in/monsalbolucio",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
