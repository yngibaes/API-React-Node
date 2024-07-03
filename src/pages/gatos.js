import React from 'react'

/*Componentes*/
import Tarjeta from '../components/comClase'; //Importar el componente Clase.
import Button from '../components/comButton'
import useFetch from '../hook/hooks';
import url from '../config';


const Inicio = () => {
    const data = useFetch(`${url}/info`); //Llamar a la función useFetch.

    return(
      <div className='flex justify-center w-full flex-wrap'>
          {data.map((item, index)=>{ //Mapear el arreglo de datos.
            return(
                <Tarjeta key={index} name={item.name} descri={item.descri} img={item.img}/> /* //Pasar los datos al componente Clase. */
            )
          })}
          <Button/>
      </div>
)
}

export default Inicio
/* export default class Inicio extends React.Component{
    /*Sólo con el estado se sabe que se tiene un constructor y tiene herencia lo demás, para que no haya tanto código
    state={ 
          data:[]
        }
    async componentDidMount(){ //Método que se ejecuta después de que el componente fue montado.
      await this.cargarComponentes(); //Llamar a la función cargarComponentes.
      }
    render(){
        return(
        <div className='flex justify-center w-full flex-wrap'>
            {/* <Clase name='Anita' descri='oaoa' img={img}/>
            <Clase name='Anthony' descri=':O' img="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/curiosidades.batanga.com/files/8-sorprendentes-cosas-que-no-sabias-sobre-los-gatos-6.jpg"/>
            <Clase name='Santiago' descri=':p' img="https://i.ytimg.com/vi/bg9944Rl0Ak/maxresdefault.jpg"/> }
            {this.state.data.map((item)=>{ //Mapear el arreglo de datos.
              return(
                  <Clase name={item.name} descri={item.descri} img={item.img}/> /* //Pasar los datos al componente Clase. 
              )
            })}
            <Button/>
        </div>
        )
    }
}*/
 