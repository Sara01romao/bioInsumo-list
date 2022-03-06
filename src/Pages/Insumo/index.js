import React, { useState, useEffect } from 'react';
import styles from './styles.module.css'
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
                  'Authorization': '',
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

          <div className={styles.content}>
              <div>
                <h1>{insumo.marcaComercial}</h1>
                <p>{insumo.ingredienteAtivo}</p>
              </div>
              
              <div className={styles.txt}>
                <h3>Informações Técnicas</h3>
                <p><span>Classe: </span>{insumo.classes}</p>
                <p><span>Classificação Ambiental: </span>{insumo.classificacaoAmbiental}</p>
                <p><span>Agricultura Organica: </span>{insumo.aprovadoParaAgriculturaOrganica? "Aprovado": "Recusado"}</p>
                <a href={insumo.url} target="_blank" rel="noreferrer noopener" className={styles.link}>Mais infomações</a>
              </div>
            
            <h3>Pragas</h3>
            <div className={styles.infoPragas}>
                
                {pragas.map((praga) => (
                  <div key={praga.nomeCientifico} className={styles.itemPraga}>
                    <p className={styles.nome}>{praga.nomeComum}</p>
                   <p>Nome Cientifico:  <span>{praga.nomeCientifico}</span></p>
                  </div>
                  
                ))}
              
            </div>
         
          </div>
          
          
          
      </div>
  );
}

export default Insumo;