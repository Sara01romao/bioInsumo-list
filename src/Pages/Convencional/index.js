import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

const Convencional = () => {
  
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
            setInsumo(json.data)
        }

        agroApi()
    },[])

   const convencionais = insumos.filter((insumo)=> insumo.aprovadoParaAgriculturaOrganica ===false);
   
 

return(
  <section className='content'>
    <h2>Para agricultura Convencional</h2>
      <div  className='cards'>
          {convencionais.map((convencional) =>{
          return(
              <Link to={`/insumo/${convencional.registroMapa}`} key={convencional.registroMapa} className="card">
              <h3>{convencional.marcaComercial}</h3>
              <p>{convencional.classes}</p>
              </Link>
          )
          })}
          
          
      </div>
  </section>
    
)

}

  


export default Convencional;