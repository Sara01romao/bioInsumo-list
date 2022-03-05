import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'




function Organicos() {

   
      const [insumos, setInsumo] = useState([])

      useEffect(()=>{
          async function agroApi(){
              const response= await fetch("https://api.cnptia.embrapa.br/bioinsumos/v1/produtos-biologicos",{
      
                  headers:{
                    'accept': "*/*",
                    'Authorization': 'Bearer d9dca8b8-c6b6-3c55-968e-39951a498750',
                  },
                  method:'GET'
              })
              const json = await response.json();
              console.log(json)
              
              setInsumo(json.data)
          }

          agroApi()
      },[])

     const organicos = insumos.filter((insumo)=> insumo.aprovadoParaAgriculturaOrganica !==false);
     
     
    console.log(organicos)

  return(
    <section className='content'>
      <h2>Orgânico</h2>
        <div  className='cards'>
            {organicos.map((organico) =>{
            return(
                <Link to={`/insumo/${organico.registroMapa}`} key={organico.registroMapa} className="card">
                <h3>{organico.marcaComercial}</h3>
                <p>{organico.ingredienteAtivo}</p>
                <p>{organico.classes}</p>
                </Link>
            )
            })}
            
            
        </div>
    </section>
      
  )

}

export default Organicos;