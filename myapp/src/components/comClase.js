import React from 'react'
import { Component } from 'react'

const ThemeContext = React.createContext(null); //Crear un contexto.

class Card extends Component{ //Crear una clase.
    static contextType = ThemeContext; //Volver estático el contexto.
    render(){ //Que se va a mostrar en la pantalla.
        const theme = this.context //Acceder al contexto.
        const className = theme === 'dark' ? 'bg-gray-500 text-white' : 'bg-white' // Usar clases de Tailwind.
        return(
            <div className='flex justify-center items-center m-10 flex-wrap'>
              <div className={`${className} + w-full h-72 flex justify-center items-center flex-col rounded-lg`}>
                  <div className="p-4 w-96 justify-center flex items-center flex-col">
                    <h1 className='text-2xl font-bold'>Hola, {this.props.name}</h1> {/* This.props es un accesorio. */}
                    <p className='text-sm text-red-200'>{this.props.descri}</p>
                    <img src={this.props.img} alt={this.props.name} className='w-60 rounded h-auto'/>
                  </div>
              </div>
            </div>
        )
    }
}

// Crear un componente proveedor de tema
class Clase extends Component {
    render() {
      // Pasar el estado actual del tema como valor del contexto
      return (
        <ThemeContext.Provider value="dark">
          <Card name={this.props.name} img={this.props.img} descri={this.props.descri}/>
        </ThemeContext.Provider>
      );
    }
  }
export default Clase;