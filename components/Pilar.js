import React, { Component,useState  } from 'react'


let a,b, c;
export default class Pilar extends Component {
  
 
  
    render() {
    
     

    return (
     <div>
      <div className='row cont-card animate__animated animate__flipInX'>
          <div className='col-md-12 col-sm-12 cont-title'>
            <h2>Cubicacion de Pilar</h2>
          </div>
          <div className='col-md-6 col-sm-12'>
            <h3>Ingrese altura de pared en mt</h3>
          </div>
          <div className='col-md-6 col-sm-12'>
          <input className='form-control' type='number' onChange={(e) => a(e.target.value)}/>
          </div>
          <div className='col-md-6 col-sm-12'>
            <h3>Ingrese largo de pared en mt</h3>
          </div>
          <div className='col-md-6 col-sm-12'>
          <input className='form-control' type='number' onChange={ (e) => b(e.target.value)}/>
          </div>
          <div className='col-md-6 col-sm-12'>
            <h3>Ingrese ancho de pared en mt</h3>
          </div>
          <div className='col-md-6 col-sm-12'>
          <input className='form-control' type='number' onChange={ (e) => c(e.target.value)}/>
          </div>
          <div className='col-12 mt-3'>
          </div>
        </div>

        <div className='row cont-card animate__animated animate__flipInX'>
          <div className='col-md-12 col-sm-12 cont-title'>
            <h2>Resultado</h2>
          </div>
          
          <div className='col-md-2 col-sm-6'>
            <h5>Cantidad</h5>
            <p>{8} Unid</p>
            <p></p>
          </div>
          <div className='col-md-2 col-sm-6'>
            <h5>Cemento:</h5>
            <p>{8} Kg</p>
            <p></p>
          </div>
          <div className='col-md-2 col-sm-6'>
            <h5>Arena:</h5>
            <p>{8}M3</p>
            <p></p>
          </div>
          <div className='col-md-2 col-sm-6'>
            <h5>Agua:</h5>
            <p>{69}ltr</p>
            <p></p>
          </div>
          <div className='col-md-2 col-sm-6'>
            <h5>Hierro:</h5>
            <p>{8}</p>
            
          </div>
          </div>
        </div>
    

    )
  }
}
