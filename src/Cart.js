import React, {Component} from 'react';
import Item from './Item.js'
import Order from './Order'

const itemsInCart = [
  {
    name: "Gaiam Kids Yoga Headband - Pink/Blue",
    cost: 9.38,
    imgUrl: "https://scene7-secure.targetimg1.com/is/image/Target/39598742?wid=90&hei=90",
    quantityInCart: 1
  }, {
    name: "Hamburger Helper",
    cost: 11.52,
    imgUrl: "https://scene7-secure.targetimg1.com/is/image/Target/12953828?wid=90&hei=90",
    quantityInCart: 1
  }
]
export default class Cart extends Component {

  constructor (props) {
    super(props)
    // initialize state
    this.state = {
      items: itemsInCart,
      //checkout method .toFixed()
      total: 0,
      tax: .05,
      subtotal: 0,
      estimatedtax: .40
    }
  }
updateAmount(){
  let prevItems = this.state.items.slice()

}
  render () {
    let items = this.state.items.map((item, i)=>{
      console.log(item);
      return <Item name={item.name} cost={item.cost} quantityInCart={item.quantityInCart}/>
    })
    return(
      <div className='cart'>
        <div className='items'>
          {items}
          <h2>cart total: <span>$9.38</span></h2>
          <div className='half right'>
            <a href='#' className='checkout'>I am ready to checkout</a>
          </div>
          </div>
          <Order />
        </div>
    )
  }
}
