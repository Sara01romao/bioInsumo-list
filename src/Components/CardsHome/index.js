import React from 'react';
import {Link} from 'react-router-dom'

// import { Container } from './styles';

const CardsHome =({insumosList, organico}) => {
    const organicos = insumosList.filter((insumo)=> insumo.aprovadoParaAgriculturaOrganica === organico);
    const insumos = organicos.filter((item, index) => (index < 9));
    console.log(insumos, 'lista')
  return(
      <>
         <div  className='cards'>
            {insumos.map((insumo) =>{
            return(
                <Link to={`/insumo/${insumo.registroMapa}`} key={insumo.registroMapa} className="card">
                <h3>{insumo.marcaComercial}</h3>
                <p>{insumo.classes}</p>
                </Link>
            )
            })}
            
            
        </div>
      </>
  );
}

export default CardsHome;