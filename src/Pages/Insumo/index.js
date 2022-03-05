import React, { useState, useEffect, useCallback } from 'react';
import {useParams} from 'react-router-dom';


const Insumo = () => {
    const {id} = useParams();

    const [insumo, setInsumo] = useState([]);
    const [pragas, setPragas] = useState([]);
   
 
    useEffect(()=>{
        async function agroApi(){
            
            const response= await fetch(`https://api.cnptia.embrapa.br/bioinsumos/v1/produtos-biologicos/${id}`,{
    
                headers:{
                  'accept': "*/*",
                  'Authorization': 'Authorization: Bearer 1b841577-8108-3bd2-aa38-9e6d93929a1f',
                },
                method:'GET'
            })
            const json = await response.json();
            console.log(json)
            
            setInsumo(json.data)
            setPragas(json.data.pragas)

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
          <a href={insumo.url}>Mais infomações</a>

        
        <div className='infoPragas'>
            <h3>Pragas</h3>
            {pragas.map((praga) => (<p key={praga.nomeComum}>{praga.nomeComum}</p>))}
           
        </div>
         
          
          
      </div>
  );
}

export default Insumo;