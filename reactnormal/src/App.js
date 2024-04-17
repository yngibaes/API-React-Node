import React from 'react';
/* import ReactDom from 'react-dom'; */



function App() {
  /* const name = 'Ana'; */
  const user ={
    name: 'Ana',
    surname: 'Amaya',
    age: 18
  }
  const element = <h1>Hola, {user.name}</h1>;
  return (
    element
  );
}

export default App;