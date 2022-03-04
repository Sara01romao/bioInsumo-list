import React, { useState, useEffect } from 'react';




function Organicos() {

   
    const insumo ={
        
            marcaComercial:'Quartzo',
            pragas: [{
                cultura:"todas culturas",
                nomeComun:['lagarta'],
                nomeCientifico:"praguinha"
            }],
            aprovadoParaAgriculturaOrganica:true,
            classificacaoToxicologica: 'baixa'
           
        }
    
  

  return(
      <div>
        
        <h3>{insumo.marcaComercial}</h3>
         
          
          
      </div>
  )

}

export default Organicos;