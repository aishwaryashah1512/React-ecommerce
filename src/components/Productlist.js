import React, { Component } from 'react'
import Navbar from './Navbar'
import Title from './title'
import {productlist,detailProduct} from './data'
import {Productcontext} from './ProductContext'
import {Product} from './Product'
export default class Productlist extends Component {
    state={
        products:productlist
    }
    render() {
        console.log(productlist)
        return (
            <React.Fragment>
               <div className= 'py-5'>
                   <div className='container'>
                       <Navbar/>        
                       <Title name='our' title='Products'/>
                       <div className='row'>
                        <Productcontext.Consumer>{(value)=>{return value.products.map
                            (val=>{return <Product key={val.id} product={val}/>})}}</Productcontext.Consumer>
                       </div>
                   </div>
               </div>
            </React.Fragment>
        )
    }
}


