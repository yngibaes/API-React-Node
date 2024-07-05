import React from 'react';
import PageCard from './pages/pageCard';
import Inicio from './pages/inicio';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigate from './pages/navigate';

const App=()=>{
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Inicio/>}/>
            <Route exact path="/card" element={<PageCard/>}/>
            <Route exact path="/card/add" element={<Navigate/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
} 
export default App 

/* export default function App() {} */