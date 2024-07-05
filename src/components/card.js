import React from "react";
import { Component } from "react";

const ThemeContext = React.createContext(null); //Crear un contexto.

class Card extends Component {
  //Crear una clase.
  static contextType = ThemeContext; //Volver estático el contexto.
  render() {
    //Que se va a mostrar en la pantalla.
    const theme = this.context; //Acceder al contexto.
    const className =
      theme === "dark"
        ? "flex flex-col flex-wrap bg-[#4B3F6E]/70 text-white h-full rounded"
        : "flex flex-col flex-wrap bg-[#BA96C1]/85 text-white h-full rounded"; // Usar clases de Tailwind.
    return (
      <div className="flex justify-center items-center m-2">
        <div className={className}>
          <div className="p-4 justify-center flex items-center flex-col">
            <h1 className="text-2xl font-bold underline decoration-solid mt-3">
              Hola, {this.props.name}
            </h1>
            {/* This.props es un accesorio. */}
            <p className="text-base text-black font-bold text-center mt-2">{this.props.descri}</p>
            <img
              src={this.props.img}
              alt={this.props.img}
              className="w-60 rounded h-auto mt-4"
            />
          </div>
        </div>
      </div>
    );
  }
}
/* 
// Crear un componente proveedor de tema
class Clase extends Component {
  render() {
    // Pasar el estado actual del tema como valor del contexto
    return (
      <ThemeContext.Provider value="dark">
        <Card
          name={this.props.name}
          img={this.props.img}
          descri={this.props.descri}
        />
      </ThemeContext.Provider>
    );
  }
}
export default Clase; */

const Tarjeta = (props) => {
  return (
    <ThemeContext.Provider value="dark">
      <Card name={props.name} img={props.img} descri={props.descri} />
    </ThemeContext.Provider>
  );
}

export default Tarjeta