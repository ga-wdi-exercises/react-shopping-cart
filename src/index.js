import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Item from './Item/Item';

class ShoppingCart extends React.Component {
  constructor() {
    super()
    this.state = {
      cartTotal: 0,
      itemsCount: 0,
      estTax: 0,
      itemOneName: "Gaiam Kids Yoga Headband - Pink / Blue",
      itemPrice1: 27,
      itemCount1: 0,
      itemOneImage: 'https://scene7-secure.targetimg1.com/is/image/Target/39598742?wid=90&hei=90',
      itemTwoName: "Stovetop Signature Turkey Stuffing",
      itemPrice2: 13,
      itemCount2: 0,
      itemTwoImage: 'https://scene7-secure.targetimg1.com/is/image/Target/12953828?wid=90&hei=90',
      wrapPrice: 5
   }
 }
   
  render() {
    return (
      <div className='cart'>
        <div className='items'>
          <h2>cart total: <span>${this.state.cartTotal + this.state.estTax}</span></h2>
          <div className='half right'>
            <a href='#' className='checkout'>Checkout</a>
          </div>
          <Item name={this.state.itemOneName} price={this.state.itemPrice1} count={this.state.itemCount1} image={this.state.itemOneImage}/>
          <Item name={this.state.itemTwoName} price={this.state.itemPrice2} count={this.state.itemCount2} image={this.state.itemTwoImage}/>
        </div>
        <div className='summary'>
          <h3>Order Summary</h3>
          <div>
            <strong>subtotal</strong>
            <small> ({this.state.itemsCount} items)</small>
            <strong className='right'>$0</strong>
          </div>
          <div>
            <strong>delivery</strong>
            <strong className='right red'>free</strong>
          </div>
          <div>
            <strong>estimated tax</strong>
            <strong className='right'>${this.state.estTax}</strong>
          </div>
          <hr/>
          <h3>total <span className='right'>${this.state.cartTotal + this.state.estTax}</span></h3>
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


// <div className='item'>
//   <img src={this.props.imageTwo} />
//   <div className='half'>
//     {this.props.nameTwo}
//   </div>
//   <div className='half'>
//     <span className='circle'>-</span>
//     <span className='pad-left pad-right'>{this.state.itemTwoCount}</span>
//     <span className='circle'>+</span>
//     <strong className='right'>${this.props.itemTwoPrice}</strong>
//   </div>
//   <hr />
//   <div>
//     <a href='#'>remove</a><br />
//     <label>
//       <input type='checkbox' /> wrap it for ${this.state.wrapPrice}
//     </label>
//   </div>
// </div>
//         </div >