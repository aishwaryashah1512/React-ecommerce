
import React, { Component } from 'react'
import {Productcontext} from './ProductContext'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Buttonc} from './Button'
export default class modal extends Component {
    render() {
        return (
            <div>
                <Productcontext.Consumer>
                    {(value)=>{
                        const {modalopen,modalclose}=value
                        const{img,title,price}=value.modalproduct
                        if(modalopen===false){
                            return null
                        }
                        else{
                            return(
                            <Modal>
                                {console.log(modalopen)}
                               <div className='container'>
                                   <div className='row'>
                                       <div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize'>
                                           <h5>
                                               item added to the cart
                                           </h5>
                                           <img src={img} className='img-fluid' alt={title}/>
                                            <h5>{title}</h5>
                                            <h5 className='text-muted'>price:${price}</h5>
                                            <Link to='/'>
                                                <Buttonc cart onClick={modalclose}>Shop</Buttonc>
                                            </Link>
                                            <Link to='/cart'>
                                                <Buttonc cart onClick={modalclose} >Cart</Buttonc>
                                            </Link>
                                       </div>
                                   </div>
                               </div>
                            </Modal>
                            )
                        }
                    }}
                </Productcontext.Consumer>
            </div>
        )
    }
}
const Modal=styled.div`

position:fixed;
top:0;
left:0;

right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:white;
}
`