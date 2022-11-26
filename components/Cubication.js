import React, { useState } from 'react'
import Pared from './Pared';
import Pilar from './Pilar';


export default function Cubication() {
  // eslint-disable-next-line no-unused-vars
//capturando la opcion con estado para saber el tipo de contrucion
  const [opciones, setOpciones] = useState(1);

//validado opcion
  const CambiarOp = () =>{
    console.log(parseInt(opciones))
    if (opciones === 1) {
      return <Pared/>
    }
    return <Pilar/>
  }



  return (
    <div className='container mt-5 cont-text'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <h3>Tipo de Contruccion</h3>
          </div>
          <div className='col-md-6 col-sm-12'>
          <select name="tipoC" className="form-select" aria-label="Default select example" onChange={ (e) => setOpciones(parseInt(e.target.value))}>
          <option value="1">Pared</option>
          <option value="2">Pilar</option>
          </select>
          </div>
        </div>
        <CambiarOp/>
       </div>
  )
}

