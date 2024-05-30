import React from 'react'

/*Componentes*/
import Clase from '../components/comClase'; //Importar el componente Clase.
import img from '../components/img/hector.jpg' //Importar la imagen.


export default class Inicio extends React.Component{
    /*Sólo con el estado se sabe que se tiene un constructor y tiene herencia lo demás, para que no haya tanto código*/
    state={ 
          data:[{
            name:'Anita',
            descri:'oaoa',
            img: img
          }, {
            name:'Anthony',
            descri:':O',
            img: 'https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/curiosidades.batanga.com/files/8-sorprendentes-cosas-que-no-sabias-sobre-los-gatos-6.jpg'
          }, {
            name:'Santiago',
            descri:':p',
            img: 'https://i.ytimg.com/vi/bg9944Rl0Ak/maxresdefault.jpg'
          }]
        }
    
    render(){
        return(
        <div className='flex justify-center w-full'>
            {/* <Clase name='Anita' descri='oaoa' img={img}/>
            <Clase name='Anthony' descri=':O' img="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/curiosidades.batanga.com/files/8-sorprendentes-cosas-que-no-sabias-sobre-los-gatos-6.jpg"/>
            <Clase name='Santiago' descri=':p' img="https://i.ytimg.com/vi/bg9944Rl0Ak/maxresdefault.jpg"/> */}
            {this.state.data.map((item)=>{ //Mapear el arreglo de datos.
              return(
                <Clase name={item.name} descri={item.descri} img={item.img}/> //Pasar los datos al componente Clase.
              )
            })}
        </div>
        )
    }
}
