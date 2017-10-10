import React, {Component} from 'react';
import Order from './Order.js'
import Item from './Item.js'

const itemsInCart = [
  {
    name: "Gaiam Kids Yoga Headband - Pink/Blue",
    cost: 9.38,
    imgUrl: "https://scene7-secure.targetimg1.com/is/image/Target/39598742?wid=90&hei=90",
    quantityInCart: 1
  },
  {
    name: "Hamburger Helper",
    cost: 11.52,
    imgUrl: "https://scene7-secure.targetimg1.com/is/image/Target/12953828?wid=90&hei=90",
    quantityInCart: 1
  }
]

export default class ShoppingCart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: itemsInCart,
      total: 0,
      tax: .5
    }

    this.handleItems = this.handleItems.bind(this)
  }
handleItems (e) {
  this.setState({
    items: this.state.count + 1
  })
}

render(){
  let items = this.state.items.map((item, i)=>{
    return <Item name={item.name} cost={item.cost} quantityInCart={item.quantityInCart}/>

})
    return (
      <div className='cart'>
        <div className='items'>
          <h2>cart total: <span>{this.state.total}</span></h2>
          <div className='half right'>
            <a href='#' className='checkout'>i'm ready to checkout</a>
          </div>

          {items}


        </div>

        <Order/>

      </div>
    )
  }
}
