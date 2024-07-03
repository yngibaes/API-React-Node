import React from 'react';
import Gatos from './pages/gatos';
import Inicio from './pages/inicio';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigate from './pages/navigate';

const App=()=>{
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Inicio/>}/>
            <Route exact path="/gatos" element={<Gatos/>}/>
            <Route exact path="/gatos/form" element={<Navigate/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
} 
export default App 

/* export default function App() {} */