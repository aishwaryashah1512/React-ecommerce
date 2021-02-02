import React, { Component } from 'react'
import {Productcontext} from './ProductContext'
import Title from './title'
import Cartcol from './cartcolumns'
import Emptycart from './Empty'
import Cartlist from './cartlist'
import Navbar from './Navbar'
import { Nav } from 'react-bootstrap'
import Carttotals from './Carttotals'
import styled from 'styled-components'
export default class cart extends Component {
    render() {
        return (
        <Productcontext.Consumer>
           {(value)=>{const {cart}=value 
           if(cart.length>0){
            return(
                <div style={{'paddingLeft':'180px','marginTop':'70px','textAlign':'center'}}>
                    <Navbar/>
           <Title name="your" title='cart'/>
                <Cartcol/>
                <Cartlist value={value}/>
                <Carttotals value={value} history={this.props.history}/>
                </div>
               )
           }
           else{
               return(
                
                   <div style={{'paddingLeft':'250px','marginTop':'90px','textAlign':'center'}}>
                   <Navbar/>
            <Emptycart/>    
            </div>       
               )
           }
        }
           }
        </Productcontext.Consumer>         
        )
    }
}
