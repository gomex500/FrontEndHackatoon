import React, { Component } from 'react'
import image1 from '../img1.png'
import image2 from '../img2.jpg'

export default class Home extends Component {
  render() {
    return (
      <div className='container cont-home'>
        <div className='row'>
          <div className='col-md-7 col-sm-12 animate__animated animate__lightSpeedInRight'>
            <p>Misión:</p>
            <p>Facilitamos soluciones tecnológicas con enfoque de construcción, disminuyendo errores en la Planeación de proyectos, formulando presupuestos rápido, mejorando el déficit habitacional de los países, evitando pérdidas económicas y materiales en obras de construcción.
             </p>
             <p>Visión:</p>
             <p>Posicionarnos como empresa líder de soluciones tecnológicas con enfocado en la construcción de urbanizadoras de los países, empresas del sector construcción y profesionales de la industria</p>

          </div>

          <div className='col-md-5 col-sm-12'>
            <center>
            <img className='img1' src={image1}/>
            </center>
          </div>

        </div>
        <div className='row'>
          <div className='col-md-5 col-sm-12 contcard'>
          <center>
            <img className='img1' src={image2}/>
            </center>
          </div>
          <div className='col-md-7 col-sm-12 contcard animate__animated animate__lightSpeedInRight'>
            <center><h3>Registrate y adquiere tu menbresia ya</h3>
            <button className='btn btn-primary mt-5'>Registrar</button></center>
          </div>
        </div>
        <div className='row'>
        <div className="container-fluid p-5" id='contact'>
        <div className="col-md-4 offset-md-4">
            <div className="card animate__animated animate__flipInY">
                <div className="card-header bg-dark text-white text-center">
                    <h3>Contact Me</h3>
                </div>
                <div className="card-body">
                    <form action="">
                        <div className="mb-3">
                            <input type='email' className="form-control" placeholder="Email"/>
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                        </div>
                        <div className="mb-3 d-grid gap-2">
                            <button className="btn btn-primary btn-block">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>   
        </div>
    </div>
          </div>
          <div className='container-fluid foot' id='about'>
          <div className='row'>
      <div className='col-md-4 col-ms-12'>
        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      </div>
      <div className='col-md-4 col-ms-12'>
        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      </div>
      <div className='col-md-4 col-ms-12'>
        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      </div>
    </div>
          </div>
      </div>
    )
  }
}
