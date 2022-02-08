import React from 'react';
import '../css/BarraPeli.css'
export default function BarraPeli(params) {
  return <div className='Peli-Cont'>
       {/* Este componente debe ser clickeable y que redireccione a detalles de la peli */}
      <img src={params.img} alt="" className='Peli-Img' />
      <h3 className='Peli-Title'>{params.titulo}</h3>
      <span className='Peli-Description'>
          {params.descripcion}
      </span>
  </div>;
}
