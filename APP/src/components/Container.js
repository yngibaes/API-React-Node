import React from "react";
import Clase from "./comClase";
import Button from "./comButton";

const Container = () => {
    <React.Fragment>
        {this.state.data.map((item)=>{ //Mapear el arreglo de datos.
              return(
                  <Clase name={item.name} descri={item.descri} img={item.img}/> /* //Pasar los datos al componente Clase. */
              )
            })}
            <Button/>
    </React.Fragment>
}

export default Container