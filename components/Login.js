import React, { Component } from 'react'
import axios from 'axios';

export default class login extends Component {
    state = {
        user: []
      }
      
      
    
    componentDidMount() {
        axios.get(`http://localhost:4000/api/Usuarios`)
          .then(res => {
            const user = res.data;
            this.setState({ user });
            console.log(user);
          })
      }
  render() {
    return (
      <div>
        <div className="container-fluid p-5">
        <div className="col-md-4 offset-md-4">
            <div className="card animate__animated animate__flipInY">
                <div className="card-header bg-dark text-white text-center">
                    <h3>Contact Me</h3>
                </div>
                <div className="card-body">
                    <form action="">
                        <div className="mb-3">
                            <input type="email" className='form-control' placeholder="email"/>
                        </div>
                        <div className="mb-3">
                        <input type="password" className='form-control' placeholder="password"/>
                        </div>
                        <div className="mb-3 d-grid gap-2">
                            <button className="btn btn-primary btn-block">
                                iniciar
                            </button>
                        </div>
                    </form>
                </div>
            </div>   
        </div>
    </div>
      </div>
    )
  }
}
