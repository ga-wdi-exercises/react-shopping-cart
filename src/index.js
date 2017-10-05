import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      items: [
        {
          id: 0,
          name: 'Scam Kids Yoga Headband',
          price: 4.49,
          quantity: 1,
          photoUrl: 'https://scene7-secure.targetimg1.com/is/image/Target/39598742?wid=90&hei=90'
        },
        {
          id: 1,
          name: 'StoveTop Turkey Shmutz',
          price: 3.49,
          quantity: 2,
          photoUrl: 'https://scene7-secure.targetimg1.com/is/image/Target/12953828?wid=90&hei=90'
        }
      ]
    }
    this.decrimentQuantity = this.decrimentQuantity.bind(this)
    this.incrimentQuantity = this.incrimentQuantity.bind(this)
  }
  decrimentQuantity(itemId) {
    let items = this.state.items.slice()
    let item = items[itemId]
    item.quantity ? item.quantity -= 1 : null
    this.setState({
      items: items
    })
  }
  incrimentQuantity(itemId) {
    let items = this.state.items.slice()
    let item = items[itemId]
    item.quantity += 1
    this.setState({
      items: items
    })
  }
  render(){
    let itemsRender = this.state.items.map( item => {
      return (
        <div key={item.id} className='item'>
          <img src={item.photoUrl} />
          <div className='half'>
            {item.name}
              </div>
          <div className='half'>
            <span className='circle' onClick={() => this.decrimentQuantity(item.id)}>-</span>
            <span className='pad-left pad-right'>{item.quantity}</span>
            <span className='circle' onClick={() => this.incrimentQuantity(item.id)}>+</span>
            <strong className='right'>${item.price}</strong>
          </div>
          <hr />
          <div>
            <a href='#'>remove</a><br />
            <label>
              <input type='checkbox' /> wrap it for $5.99
                </label>
          </div>
        </div>
      )
    })

    let tally = this.state.items.map( item => {
      return item.price * item.quantity
    })

    let subTotal = tally.reduce((a, b) => a + b, 0)
    let tax = subTotal * .09
    let total = subTotal + tax
    console.log(total)

    return (
      <div className='cart'>
        <div className='items'>
          <h2>cart total: <span>${total.toFixed(2)}</span></h2>
          <div className='half right'>
            <a href='#' className='checkout'>i'm ready to checkout</a>
          </div>
          {itemsRender}
        </div>
        <div className='summary'>
          <h3>order summary</h3>
          <div>
            <strong>subtotal</strong>
            <small> (3 items)</small>
            <strong className='right'>${subTotal.toFixed(2)}</strong>
          </div>
          <div>
            <strong>delivery</strong>
            <strong className='right red'>free</strong>
          </div>
          <div>
            <strong>estimated tax</strong>
            <strong className='right'>${tax.toFixed(2)}</strong>
          </div>
          <hr/>
          <h3>total <span className='right'>${total.toFixed(2)}</span></h3>
          <hr/>
          <small>cart number: 1016396673255</small>
        </div>
      </div>
    )
  }
}
ReactDOM.render(
  <ShoppingCart />,
  document.getElementById('root')
);
