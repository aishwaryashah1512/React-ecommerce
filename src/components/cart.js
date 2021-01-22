import React, { Component } from 'react'
import {Productcontext} from './ProductContext'
import Title from './title'
import Cartcol from './cartcolumns'
import Emptycart from './Empty'
import Cartlist from './cartlist'
import Navbar from './Navbar'
import { Nav } from 'react-bootstrap'
import Carttotals from './Carttotals'
export default class cart extends Component {
    render() {
        return (
        <Productcontext.Consumer>
           {(value)=>{const {cart}=value 
           if(cart.length>0){
            return(
                <React.Fragment>
                    <Navbar/>
           <Title name="your" title='cart'/>
                <Cartcol/>
                <Cartlist value={value}/>
                <Carttotals value={value}/>
                </React.Fragment>
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
