import React, { Component } from 'react'

export default class cartcolumns extends Component {
    render() {
        return (
            <div className='container-fluid text-center d-none d-lg-block'>
               <div className='row'>
                   <div className='col-10 mx-auto col-lg-2'>
                       <p className='text-uppercase'>Products</p>
                   </div>
                   <div className='col-10 mx-auto col-lg-2'>
                       <p className='text-uppercase'>Name of Product</p>
                   </div>
                   <div className='col-10 mx-auto col-lg-2'>
                       <p className='text-uppercase'>Price</p>
                   </div>
                   <div className='col-10 mx-auto col-lg-2'>
                       <p className='text-uppercase'>Quanity</p>
                   </div>
                   <div className='col-10 mx-auto col-lg-2'>
                       <p className='text-uppercase'>Remove</p>
                   </div>
                   <div className='col-10 mx-auto col-lg-2'>
                       <p className='text-uppercase'>total</p>
                   </div>
               </div>
            </div>
        )
    }
}
