import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Convencional from './Pages/Convencional';
import Home from './Pages/Home';
import Insumo from './Pages/Insumo';
import Organicos from './Pages/Organicos';


const Rotas =() =>{
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/organico" element={<Organicos/>}/>
                <Route path="/convencional" element={<Convencional/>}/>
                <Route path="/insumo/:id" element={<Insumo/>}/>
                
            </Routes>
        
        </BrowserRouter>
    )
}


export default Rotas;