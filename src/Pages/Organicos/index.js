import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'




function Organicos() {

   
      const [insumos, setInsumo] = useState([])

      useEffect(()=>{
          async function agroApi(){
              const response= await fetch("https://api.cnptia.embrapa.br/bioinsumos/v1/produtos-biologicos",{
      
                  headers:{
                    'accept': "*/*",
                    'Authorization': 'B',
                  },
                  method:'GET'
              })
              const json = await response.json();
              
              setInsumo(json.data)
          }

          agroApi()
      },[])

     const organicos = insumos.filter((insumo)=> insumo.aprovadoParaAgriculturaOrganica !==false);
     
     

  return(
    <section className='container'>

      <h2 className='title'>Orgânicos</h2>
        <div  className='cards'>
            {organicos.map((organico) =>{
            return(
                <Link to={`/insumo/${organico.registroMapa}`} key={organico.registroMapa} className="card">
                <h3>{organico.marcaComercial}</h3>
                <p>{organico.classes}</p>
                </Link>
            )
            })}
            
            
        </div>
    </section>
      
  )

}

export default Organicos;