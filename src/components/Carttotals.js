import React from 'react'
import {Link} from 'react-router-dom'
import Paypal from './paypal'
import styled from 'styled-components'
export default function Carttotals(props) {
    const{cartsubtotal,carttax,carttotal,clearCart}=props.value
    return (
        <Carttotalstyle>
            <div className='container'>
                <div className='row'>
                   <div className=' col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
                      <Link to='/'>
                          <button classNme='btn btn-outline-danger text-uppercase mb-3 px-5'
                           type='button'
                           onClick={clearCart}>Clear Cart</button>
                      </Link>
                      <h5>
                          <span className='text-title'>
                              subtotal: <strong>
                                  $ {cartsubtotal}
                              </strong>
                          </span>
                      </h5>
                      <h5>
                          <span className='text-title'>
                              tax: <strong>
                                  $ {carttax}
                              </strong>
                          </span>
                      </h5>
                      <h5>
                          <span className='text-title'>
                              carttotal: <strong>
                                  $ {carttotal}
                              </strong>
                          </span>
                      </h5>
                    <Paypal total={carttotal} clearCart={clearCart} history={props.history}/>
                   </div>
                </div>
            </div>
        </Carttotalstyle>
    )
}
const Carttotalstyle=styled.div`
.Container{
    margin: 2rem 1.5rem;
    display: flex;
    flex-direction:column;
    align-items:flex-end;
    color:#00344b
}
.Btn {
    color: #00344b;
    border: 2px solid #414141;
    width: 10rem;
    padding: 0.5rem 0.5rem;
    text-transform: uppercase;
    font-size: 1rem;
    background: transparent;
    transition-duration: 0.4s;
    cursor: pointer;
    outline: none;
  }
  
  .Btn:hover {
    background: #00344b;
    color: white;
  }
  .Container h5 {
    margin: 0.5rem 0.5rem;
    text-transform: uppercase;
  }



`
