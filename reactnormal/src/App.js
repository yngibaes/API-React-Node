import React from 'react';

/*Componentes*/
import Clase from './components/comClase'; //Importar el componente Clase.
import img from './components/img/hector.jpg' //Importar la imagen.



function App() {
  return(
    <>
        <Clase name='Anita' img={img}/>
        <Clase name='Anthony' img="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/curiosidades.batanga.com/files/8-sorprendentes-cosas-que-no-sabias-sobre-los-gatos-6.jpg"/>
        <Clase name='Santiago' img="https://i.ytimg.com/vi/bg9944Rl0Ak/maxresdefault.jpg"/>
    </>
  )
}

export default App;