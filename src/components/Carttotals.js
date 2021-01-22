import React from 'react'
import {Link} from 'react-router-dom'
export default function Carttotals(props) {
    const{cartsubtotal,carttax,carttotal,clearCart}=props.value
    return (
        <div>
            <div className='container'>
                <div className='row'>
                   <div className=' col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
                      <Link to='/'>
                          <button classNme='btn btn-outline-danger text-uppercase mb-3 px-5'
                           type='button'
                           onClick={clearCart()}>Clear Cart</button>
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
                   </div>
                </div>
            </div>
        </div>
    )
}
