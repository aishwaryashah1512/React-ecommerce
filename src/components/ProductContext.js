import React, { Component } from 'react'
import {productlist,detailProduct} from './data'
import Productlist from './Productlist'

export const Productcontext=React.createContext()
 export class ProductContextProvider extends Component 
 {
     state={
         products:[],
         detailProduct:detailProduct,
         cart:[],
         modalopen:false,
         cartsubtotal:0,
         carttotal:0,
        carttax:0,
         modalproduct:detailProduct
     }
     modalclose=()=>{
         this.setState({modalopen:false})
     }
     openmodal=id=>{
         const product=this.getItem(id)
         this.setState(()=>{
             return{modalproduct:product,modalopen:true}
         })
     }
     getItem=(id)=>{
         const product=this.state.products.find(item=>item.id===id)
         return product
     }
     increament=(id)=>{
        let tempro=[...this.state.products]
        const item=tempro.find(item=>item.id===id)
        item.count=item.count+1
        item.total=item.price*item.count
        this.setState({products:tempro},()=>{
            console.log(this.state)
            this.addtotals()
        })
    }
     clearCart=(id)=>{
        /* this.setState({cart:[]},()=>{
             this.setProducts()
             this.addtotals()
         console.log("clearCart")*/
         
           }
     
     addtotals=()=>{
         let subtotal=0
         this.state.cart.map(item=>subtotal=item.total+subtotal)
         let temptax=subtotal*0.1
         const tax=parseFloat(temptax.toFixed(2))
         const total=subtotal+tax
         this.setState({carttotal:total,cartsubtotal:subtotal,carttax:tax},()=>{console.log(this.state)})
     }
  decreament=(id)=>{
    let tempro=[...this.state.products]
    const item=tempro.find(item=>item.id===id)
    item.count=item.count-1
    if(item.count===0)
    {
        this.removeItem(id)
    }
    else{
    item.total=item.price*item.count
    this.setState({products:tempro},()=>{
        console.log(this.state)
        this.addtotals()
    
    })
  } 
}    
  handleDetail=(id)=>{
        const pro=this.getItem(id)
         console.log("HEllo from handle detail")
         }
     
    componentDidMount(){
       this.setProducts()
    }

    setProducts=()=>{
        let tempProducts=[]
        productlist.forEach(item=>{
            const singleitem={...item}
            tempProducts=[...tempProducts,singleitem]
        })
        this.setState({products:tempProducts},()=>{ console.log(this.state.products[0].inCart,productlist[0].inCart)})
    }
     
    removeItem=(id)=>{
        let tempro=[...this.state.products]
        let tempcart=[...this.state.cart]
        tempcart=tempcart.filter(item=>item.id!==id)
        const index = tempro.indexOf(this.getItem(id))
        let removedProduct=tempro[index]
        removedProduct.inCart=false
        removedProduct.count=0
        removedProduct.total=0
         this.setState({cart:[...tempcart],products:[...tempro]},()=>{
             this.addtotals()
            console.log(this.state)
        })
    }
     addToCart=(id)=>{
         let tempro=[...this.state.products]
         const item=tempro.find(item=>item.id===id)
         item.count=item.count+1
         item.total=item.price*item.count
         item.inCart=true
         this.setState({products:tempro,cart:[...this.state.cart,item]},()=>{
             console.log(this.state)
             this.addtotals()
         })
         console.log(item)
        console.log(`"hello from add to cart.id is" ${id}`)
    }
    render() 
    {
        return (
         <Productcontext.Provider value={{
            ...this.state,
            clearCart:this.clearCart,
            handleDetail:this.handleDetail,
            addToCart:this.addToCart,
            modalclose:this.modalclose,
            openmodal:this.openmodal,
            increament:this.increament,
            decreament:this.decreament,
            removeItem:this.removeItem
         }}>
             {this.props.children}
         </Productcontext.Provider>
        )
    }
}

