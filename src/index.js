import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingCart from './components/ShoppingCart'
import './index.css';

class ShoppingCart extends React.Component{
  constructor(props){
    suoer(props)
    this.state = {
      items: itemsInCart,
      total: 0,
      item1: 1,
      item2: 1,
      tax: null
    }
    this.setTax = this.setTax.bind(this)
    this.setTotal = this.setTotal.bind(this)
    this.item1sub = this.item1sub.bind(this)
    this.item1add = this.item1add.bind(this)
    this.item2sub = this.item2sub.bind(this)
    this.item2add = this.item2add.bind(this)
  }


  componentDidMount(){
    this.updateTotal()
  }

  updateTotal(){
    this.setState({
      total: (this.setTotal() + this.setTax()).tofixed(2)
    })
  }

  setTax(){
    const total = (itemsInCart[0].cost * this.state.item1) +
    (itemsInCart[1].cost * this.state.item2)
    const taxes = total * 0.10
    return taxes
  }

  setTotal(){
    const total = (itemsInCart[0].cost * this.set.item1) +
    (itemsInCart[1].cost * this.state.item2)
    return total
  }
  item1Quantitysub(){
    if(this.state.item1Quantity >= 1){
      this.setState({
        item1Quantity: this.state.item1Quantity - 1
      })
    }
  }
 item1add(){
   this.setState({
     item1: this.state.item1 + 1
   })
 }
 item2sub(){
   if(this.state.item2 >= 1){
     this.setState({
       item2: this.state.item2 - 1
     })
   }
 }
 item2add(){
   this.setState({
     item2: this.state.item2 + 1
   })
 }
render(){
  console.log(this.state.item1)
  return(
    <div className="Cart">
      <div className="Items">
        <h2>CartTotal: <span>${this.state.total}</span></h2>
        <a href="#" className="Checkout">Ready to Checkout!</a>
    </div>
  )
}

}
ReactDOM.render(
  <ShoppingCart />,
  document.getElementById('root')
);
