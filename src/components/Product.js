import React, { Component } from 'react'
import styled from 'styled-components'

import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Productcontext} from './ProductContext'
//import Modal from './modal'
import {Buttonc} from './Button'
export class Product extends Component {
    render() {
        const {id,title,img,price,inCart}=this.props.product;
        console.log(id)
        return (
            <ProductWapper className='col-9 mx-auto col-md-6 col-lg-3'>
                <div className="card">
                    <Productcontext.Consumer>
                    {value=>( <div className='img-container p-5'
                    onClick={()=>{value.handleDetail(id)
                        console.log('you clicked')}}>                 
                    <Link to='/Details'><img  src={img} alt='product' className='card-img-top'/>                       
                    </Link>  
                    <Buttonc className="card-btn" disabled={inCart} 
                    onClick={()=>{value.addToCart(id)
                        value.openmodal(id)
                      
                        console.log('added to the cart')}}>
                        {inCart?(<p className='text-capitalize mb-0' disabled>
                            {" "}
                            in cart
                            </p>
                        ):(<span className='btn'>Add to Cart</span>)
                    }
                    </Buttonc>
                    <div className="card-footer d-flex justify-content-between">
                        <div className='align-self-center mb-0'>{title}</div>
                        <h5 className='text-blue font-italic '>
                            <div className='mr-1'>${price}</div>
                            
                        </h5>
                        </div>
               </div> )
    }              
               </Productcontext.Consumer>
               </div>
            </ProductWapper>
                    )
    } 
}
Product.propsTypes={
    id:PropTypes.number.isRequired,
    img:PropTypes.string.isRequired,
    inCart:PropTypes.bool.isRequired,
    price:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired
    
}
console.log(Product.propsTypes)
const ProductWapper=styled.div`
.btn{
    justify-align:center;;
}

.card{
    margin-bottom:20px;
    border-color:transparent;
    transition:all 1s linear;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transtion:all 1s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(247,247,247)
    }
}
.img-container{
    position:relative;
    overflow:hidden
}
.card-img-top{
    transition:all 1s linear
}
.img-container:hover .card-img-top{
    transform:scale(1.2)
}
.card-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:var(--lightBlue);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0 ;
    transform:translate(0,0);
   
}
.img-container:hover .cart-btn{
    transform:translate(0,0);
    transition:all 1s linear
}
.card-btn:hover{
    transform:translate(0,0)
    color:var(--mainBlue);
    cursor:pointer;
   
}
`


