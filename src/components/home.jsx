import React, { Component } from 'react';
import './styles/home.css';
class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className='body'>
                 <div className="container">
                     <div className="row d-flex justify-content-center mt-2">
                         <div className="card flex-row">
                             <img  className='card-img-left images' src="https://media.istockphoto.com/vectors/desktop-computer-vector-id862739260" alt="" />
                             <div className="card-body">
                                 <h5 className='card-title'>7 Skills of Highly Effective Programmers</h5>
                                 <p className="card-text">
                                     This is a card data is there
                                 </p>
                             </div>
                         </div>
                     </div>
                 </div>
            </div>
        );
    }
}
 
export default Home;