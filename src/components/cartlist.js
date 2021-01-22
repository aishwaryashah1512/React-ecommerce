import React, { Component } from 'react'
import Cartitem from './Cartitem'
export default class cartlist extends Component {
   
    render() {
        const {cart}=this.props.value
        return (
            <div className='container-fluid'>
                {cart.map(item=>{
                    return(
                        <Cartitem key={item.id} item={item} value={this.props.value}/>
                    )
                })}
            
                
            </div>
        )
    }
}
