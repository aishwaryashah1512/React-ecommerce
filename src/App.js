import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Cart from './components/cart'
import Productlist from './components/Productlist'
import PageNotFound from './components/Pagenotfound'
import Details from './components/Details'
import{BrowserRouter,Route,Switch} from 'react-router-dom'
import Modal from './components/modal'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div className="App">
        <div className="container">
          <div className="row">
            <div>
              <Switch>
              <Route path='/'exact component={Productlist}/>
              <Route path='/Navbar' component={Navbar}/>
              <Route path='/Cart' component={Cart}/>   
            
               <Route path='/Details' component={Details}/>
              <Route component={PageNotFound}/>         
              </Switch>    
              <Modal/>
            </div>
          </div>
        </div>
      </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
