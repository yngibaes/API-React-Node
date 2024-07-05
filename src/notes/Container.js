import React from "react";
import Clase from "../components/comClase";
import ButtonAdd from "../components/buttonAdd";

const Container = () => {
    <React.Fragment>
        {this.state.data.map((item)=>{ //Mapear el arreglo de datos.
              return(
                  <Clase name={item.name} descri={item.descri} img={item.img}/> /* //Pasar los datos al componente Clase. */
              )
            })}
            <ButtonAdd/>
    </React.Fragment>
}

export default Container