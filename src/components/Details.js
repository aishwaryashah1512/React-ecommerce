import React, { Component } from 'react'
import {Productcontext} from './ProductContext'
import {Link} from 'react-router-dom'
import { Buttonc} from './Button'
export default class Details extends Component {
    render() {
        console.log("A")
        return (
            <div>
        <Productcontext.Consumer>{value=>{const {id,company,img,price,title,inCart}=value.detailProduct
        console.log(value.detailProduct)
        return(
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                                <h1>{title}</h1>
                        </div>
                    </div>
                <div className='row'>
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                              <img src={img} className="img-fluid" alt='product'/>
                            </div>
                            <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                <h2>model:{title}</h2>
                                 <h4 className='test-title text-uppercase text-muted mt-3 mb-2'>
                                     made by:<span className='text-uppercase'>
                                         {company}</span>
                                 </h4>
                                 <h4 className='text-blue'>
                                     <strong>
                                         price:<span>${price}</span>
                                     </strong>
                                 </h4>
                            </div>
                            <div>
                                <Link to='/'>
                                    <Buttonc>Back to Home</Buttonc>
                                </Link>
                                <Link to='/'>
                                    <Buttonc cart={true} disabled={inCart} onClick={()=>value.addToCart(id)}>Add to cart</Buttonc>
                                </Link>
                            </div>
                    </div>
                    </div>
        )}}</Productcontext.Consumer>
            </div>
        )
    }
}
