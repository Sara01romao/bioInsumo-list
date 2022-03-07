import React, { useState, useEffect } from 'react';
import styles from './styles.module.css'

import CardsHome from '../../Components/CardsHome';
import { Link } from 'react-router-dom';




const Home =() => {

  const [insumos, setInsumo] = useState([])

  useEffect(()=>{
      async function agroApi(){
          const response= await fetch("https://api.cnptia.embrapa.br/bioinsumos/v1/produtos-biologicos",{
  
              headers:{
                'accept': "*/*",
                'Authorization': '',
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
               <h2 className={styles.titulos}>Convencionais</h2>
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