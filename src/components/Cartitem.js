import React from 'react'
import styled from 'styled-components'
export default function Cartitem(props) {
  const{id,title,img,price,total,count}=props.item
  const {increament,decreament,removeItem}=props.value
    return (
        <Cartitemstyles>
        <div className="row my-2 text-capitalize text-center">
            <div className='col-10 mx-auto col-lg-2'>
                <img src={img} style={{width:'5rem',height:'5rem'}} className='img-fluid' alt='product'/>
            this is a cart item
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>product:</span>{title}
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>Price:</span>{price}
            </div>
            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
            <div className='d-flex justify-content-center'>
                <div>
            <span className='btn btn-black mx-1' onClick={()=>decreament(id)}>-</span>
            <span className='btn btn-black mx-1' >{count}</span>
            <span className='btn btn-black mx-1' onClick={()=>increament(id)}>+</span>
            </div>
            </div>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <div className='cart-icon' onClick={()=>removeItem(id)}>
                    <span>x</span> </div>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                <strong>item total:$ {total}</strong>
            </div>
        </div>
        </Cartitemstyles>
      
    )
}

const Cartitemstyles=styled.div`

  .btn {
    background: transparent;
    border: 1px solid black;
    font-size: 1.5rem;
    width: 30px;
    outline: none;
    cursor: pointer;
  }
  .BtnSpan {
    margin: 0 1rem;
  }

`