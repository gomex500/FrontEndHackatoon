import React, {Component, useState} from 'react'

let a, b, area, auxi, porcetaje,mort =0,cem =0, agua = 0, arena = 0, result=0 ;
// let materialBase;

function CubicationPared(){
  // switch (materialBase) {
  //   case 'Ladrillo':
  //     s = 0.0801;
  //     break;
  //     case 'Bloque':
  //       s = 0.0801;
  //       break;
  //       case 'Piedra Cantera':
  //     break;
  //   default:
  //     break;
  // }
  area = parseInt((a*b)/0.019125);
  console.log(area);
  auxi = Math.ceil(area * 12);
  console.log(auxi);
  porcetaje = (auxi * 5 / 100);
  console.log(porcetaje);
  result = Math.ceil(auxi + porcetaje);
  mort = (a*b*0.12)-(area*0.24*0.06*0.12);
  cem = parseInt((302*mort)*1.05);
  arena =parseFloat(1.2*mort+0.5);
  agua = parseInt (240*mort)
}

export default function Pared() {
  const [materialB, setMaterialB] = useState('');
  const [altura, setAltura] = useState(0);
  const [ancho, setAncho] = useState(0);
  const [Mort, setMort] = useState(0);
  // materialBase = materialB;
  a = altura;
  b = ancho;
  // console.log(a);
  // console.log(b);
  return (
    <div>
        <div className='row cont-card animate__animated animate__flipInX'>
          <div className='col-md-12 col-sm-12 cont-title'>
            <h2>Cubicacion de Pared</h2>
          </div>
          <div className='col-md-6 col-sm-12'>
            <h3>Ingrese Material Base</h3>
          </div>
          <div className='col-md-6 col-sm-12'>
          <select name="tipoC" className="form-select" aria-label="Default select example" onChange={ (e) => setMaterialB(e.target.value)}>
          <option value="Ladrillo">Ladrillo</option>
          <option value="Bloque">Bloque</option>
          <option value="Piedra Cantera">Piedra Cantera</option>
          </select>
          </div>
          <div className='col-md-6 col-sm-12'>
            <h3>Ingrese altura de pared en mt</h3>
          </div>
          <div className='col-md-6 col-sm-12'>
          <input className='form-control' type='number' onChange={(e) => setAltura(e.target.value)}/>
          </div>
          <div className='col-md-6 col-sm-12'>
            <h3>Ingrese ancho de pared en mt</h3>
          </div>
          <div className='col-md-6 col-sm-12'>
          <input className='form-control' type='number' onChange={ (e) => setAncho(e.target.value)}/>
          </div>
          <div className='col-12 mt-3'>
          <button className='btn btn-primary' onClick={CubicationPared({materialB,altura,ancho})}>Calcular</button>
          </div>
          </div>
          <div className='row cont-card animate__animated animate__flipInX'>
          <div className='col-md-12 col-sm-12 cont-title'>
            <h2>Resultado</h2>
          </div>
          <div className='col-md-2 col-sm-6'>
            <h5>Material Base:</h5>
            <p>{materialB}</p>
            <p></p>
          </div>
          <div className='col-md-2 col-sm-6'>
            <h5>Cantidad</h5>
            <p>{area} Unid</p>
            <p></p>
          </div>
          <div className='col-md-2 col-sm-6'>
            <h5>Cemento:</h5>
            <p>{cem} Kg</p>
            <p></p>
          </div>
          <div className='col-md-2 col-sm-6'>
            <h5>Arena:</h5>
            <p>{arena}M3</p>
            <p></p>
          </div>
          <div className='col-md-2 col-sm-6'>
            <h5>Agua:</h5>
            <p>{agua}ltr</p>
            <p></p>
          </div>
          </div>
      </div>
  )
}

