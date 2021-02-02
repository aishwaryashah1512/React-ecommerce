import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
            
                <NavWrapper className="navbar fixed-top navbar-expand-lg bg-primary navbar-dark" style={{"color":'white'}}>
                <ul className='navbar-nav align-items-center'>
                   <li className='nav-item ml-5'>
                        <NavLink to='/'>Products</NavLink>
                    </li>
                    <li className='nav-item ml-auto'>  
                        <NavLink to='/Cart'>My Cart</NavLink>
                        
                    </li>
                </ul>
                </NavWrapper>   
        )
    }
}
const NavWrapper=styled.nav`
background:blue;
color:white;
.nav-link{
    color:var(--mainWhite) !important
    font-size:1.3rem;
    text-transform:capitalize;
}`;