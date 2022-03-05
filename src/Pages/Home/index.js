import React, { useState, useEffect } from 'react';
import styles from './styles.module.css'

import CardsHome from '../../Components/CardsHome';
import { Link } from 'react-router-dom';


// import { Container } from './styles';

const Home =() => {

  const item = [
    {
      registroMapa: 317,
      marcaComercial: "Terra",
      classes: "microBio"
    },

    {
      registroMapa: 318,
      marcaComercial: "Terra",
      classes: "microBio"
    },

    {
      registroMapa: 319,
      marcaComercial: "Terra",
      classes: "microBio"
    },
]

  const [insumos, setInsumo] = useState([])

  useEffect(()=>{
      async function agroApi(){
          const response= await fetch("https://api.cnptia.embrapa.br/bioinsumos/v1/produtos-biologicos",{
  
              headers:{
                'accept': "*/*",
                'Authorization': 'Authorization: Bearer 1b841577-8108-3bd2-aa38-9e6d93929a1f',
              },
              method:'GET'
          })
          const json = await response.json();
          
          setInsumo(json.data)
      }

      agroApi()
  },[])

  

  return (
        <div className='container'>
            
            

            <section className={styles.content}>
               <h2 className={styles.titulos}>Convensional</h2>
                <CardsHome insumosList={insumos} organico={false}/>

                <button className='btn'>
                  <Link to="/convencional" className={styles.link}>Mais Produtos</Link>
                </button>
             

            </section>

            <section className={styles.content}>
              <h2 className={styles.titulos}>Orgânicos</h2>
                <CardsHome insumosList={insumos} organico={true} />
                <button className='btn'>
                  <Link to="/organicos" className={styles.link}>Mais Produtos</Link>
                </button>

            </section>
        

        
            
        </div>
  );
}

export default Home;