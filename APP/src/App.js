import React from 'react';
import Gatos from './pages/gatos';
import Inicio from './pages/inicio';
import PageForm from './pages/pageForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const App=()=>{
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Inicio/>}/>
            <Route exact path="/gatos" element={<Gatos/>}/>
            <Route exact path="/form" element={<PageForm/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
} 
export default App 

/* export default function App() {} */