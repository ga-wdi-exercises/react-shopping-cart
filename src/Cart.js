import React, {Component} from 'react';

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
      subtotal: 0
    }
  }
updateAmount(quantity, index){
  let prevItems = this.state.items.slice()
  let item = prevItems[index]
  item.quantity = item.quantity + quantity < 0 ? 0 : item.quantity + quantity
  this.state({
    items: prevItems
  })
  }

calculateTotal(){


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
          <h2>cart total: <span>{this.state.total}</span></h2>
          <div className='half right'>
            <a href='#' className='checkout'>I am ready to checkout</a>
          </div>
          </div>
        </div>
        <Order />
        <div className='item'>
          <div className='half'>
            {this.props.name}
          </div>
          <div className='half'>
            <span className='circle' onClick={e => onUpdateAmount(-1, index)} >-</span>
            <span className='pad-left pad-right'>1</span>
            <span className='circle' onClick="updateAmount">+</span>
            <strong className='right'>{this.props.cost}</strong>
            <div>
              <a href='#'>remove</a> <br/>
              <label>
                <input type='checkbox'/>
              </label>
              wrap it for $5.99
              <hr />
            </div>
          </div>
        </div>
    )
  }
}
