import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';


const Insumo = () => {
    const {id} = useParams();

    const [insumo, setInsumo] = useState([]);
 
    useEffect(()=>{
        async function agroApi(){
            
            const response= await fetch(`https://api.cnptia.embrapa.br/bioinsumos/v1/produtos-biologicos/${id}`,{
    
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


    },[id])
    
   
    

  return(
      <div className='container'>
          <h1>{insumo.marcaComercial}</h1>
          <p>{insumo.ingredienteAtivo}</p>

          <h4>Informações Técnicas</h4>
          <p><span>Classe: </span>{insumo.classes}</p>
          <p><span>Classificação Ambiental: </span>{insumo.classificacaoAmbiental}</p>
          <p><span>Aprovado Para Agricultura Organica: </span>{insumo.aprovadoParaAgriculturaOrganica? "Aprovado": "Recusado"}</p>
          

        
        <div className='infoPragas'>
            <h3>Pragas</h3>
           
           
        </div>
         
          
          
      </div>
  );
}

export default Insumo;