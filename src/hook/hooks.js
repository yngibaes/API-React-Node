import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]); //Estado de la variable data.
    useEffect(() => { //Hook de efecto.
        const cargarComponentes=async()=>{ //Función para cargar los componentes.
          let res = await fetch(url); //Petición a la API. 
          let data = await res.json(); //Convertir la respuesta a JSON.
          setData(data)
          console.log(data); //Imprimir los datos en consola.
        }
          cargarComponentes(); //Llamar a la función cargarComponentes.
      },[url]); //Arreglo de dependencias.
    return {data};
}

export default useFetch