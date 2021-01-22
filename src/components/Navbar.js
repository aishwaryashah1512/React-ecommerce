import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import styled from 'styled-components'
import {Buttonc} from './Button'
export default class Navbar extends Component {
    render() {
        return (
            
                <NavWrapper className="navbar fixed-top navbar-expand-lg bg-primary navbar-dark" style={{"color":'white'}}>
                <i class="fas fa-home"></i>
                <ul className='navbar-nav align-items-center'>
                   <li className='nav-item ml-5'>
                        <NavLink to='/'>Products</NavLink>
                    </li>
                    <li className='nav-item ml-auto'>
                        <Buttonc>
                        <NavLink to='/Cart'><i class="fas fa-shopping-cart">My Cart</i></NavLink>
                        </Buttonc>
                    </li>
                </ul>
                </NavWrapper>   
        )
    }
}
const NavWrapper=styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important
    font-size:1.3rem;
    text-transform:capitalize;
}`;