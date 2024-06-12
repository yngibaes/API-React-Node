import React from 'react'

/*Componentes*/
import Clase from '../components/comClase'; //Importar el componente Clase.
import Button from '../components/comButton'


export default class Inicio extends React.Component{
    /*Sólo con el estado se sabe que se tiene un constructor y tiene herencia lo demás, para que no haya tanto código*/
    state={ 
          data:[]
        }
    async componentDidMount(){ //Método que se ejecuta después de que el componente fue montado.
      await this.cargarComponentes(); //Llamar a la función cargarComponentes.
      }
    cargarComponentes=async()=>{ //Función para cargar los componentes.
      let res = await fetch('http://localhost:8000/api/info'); //Petición a la API. 
      let data = await res.json(); //Convertir la respuesta a JSON.
      this.setState({data})
      console.log(data); //Imprimir los datos en consola.
      
    }
    render(){
        return(
        <div className='flex justify-center w-full'>
            {/* <Clase name='Anita' descri='oaoa' img={img}/>
            <Clase name='Anthony' descri=':O' img="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/curiosidades.batanga.com/files/8-sorprendentes-cosas-que-no-sabias-sobre-los-gatos-6.jpg"/>
            <Clase name='Santiago' descri=':p' img="https://i.ytimg.com/vi/bg9944Rl0Ak/maxresdefault.jpg"/> */}
            {this.state.data.map((item)=>{ //Mapear el arreglo de datos.
              return(
                  <Clase name={item.name} descri={item.descri} img={item.img}/> /* //Pasar los datos al componente Clase. */
              )
            })}
            <Button/>
        </div>
        )
    }
}
