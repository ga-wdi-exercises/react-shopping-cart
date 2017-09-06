import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: 0,
      subtotal: 0.00,
      tax: 0.00,
      total: 0.00,
      headband: 1,
      hamburger: 1
    };

    this.addHeadband = this.addHeadband.bind(this);
    this.removeHeadband = this.removeHeadband.bind(this);

    this.addHamburger = this.addHamburger.bind(this);
    this.removeHamburger = this.removeHamburger.bind(this);
    this.updateTax = this.updateTax.bind(this);
    this.checkout = this.checkout.bind(this);
  }

  addHeadband() {
    let increase = this.state.headband + 1
    this.setState({ headband: increase })
  }

  removeHeadband() {
    if (this.state.headband === 0) {
    } else {
    let decrease = this.state.headband - 1;
    this.setState({ headband: decrease });
    }
  }

  addHamburger() {
    let increase = this.state.hamburger + 1;
    this.setState({ hamburger: increase });
  }

  removeHamburger() {
    if (this.state.hamburger === 0) {
    } else {
    var decrease = this.state.hamburger - 1;
    this.setState({ hamburger: decrease });
    }
  }

  updateTax(_tax) {
    this.setState({ tax: Math.round( _tax * 100)/100 });
  }

  checkout() {
    let subtotal = this.state.headband * 9.38;
    subtotal += this.state.hamburger * 11.52;
    this.setState({ items: this.state.headband + this.state.hamburger});
    this.setState({ subtotal: Math.round(subtotal * 100)/100}, () => {
      let _tax = this.state.subtotal/100 * 5;
      let total = subtotal + _tax;
      this.updateTax(_tax);
      this.setState({ total: Math.round( total * 100)/100});
    });
  }


  render(){
    return (
      <div className='cart'>
        <div className='items'>
          <h2>cart total: <span>${this.state.total}</span></h2>
          <div className='half right'>
            <a href='#' className='checkout' onClick={this.checkout}>i'm ready to checkout</a>
          </div>
          <div className='item'>
            <img  src='https://scene7-secure.targetimg1.com/is/image/Target/39598742?wid=90&hei=90' />
            <div className='half'>
              Gaiam Kids Yoga Headband - Pink/Blue
            </div>
            <div className='half'>
              <span className='circle' onClick={this.removeHeadband}>-</span>
              <span className='pad-left pad-right'>{this.state.headband}</span>
              <span className='circle' onClick={this.addHeadband}>+</span>
              <strong className='right'>$9.38</strong>
            </div>
            <hr />
            <div>
              <a href='#'>remove</a><br />
              <label>
                <input type='checkbox'/> wrap it for $5.99
              </label>
            </div>
          </div>
          <div className='item'>
            <img  src='https://scene7-secure.targetimg1.com/is/image/Target/12953828?wid=90&hei=90' />
            <div className='half'>
              Hamburger Helper
            </div>
            <div className='half'>
              <span className='circle' onClick={this.removeHamburger}>-</span>
              <span className='pad-left pad-right'>{this.state.hamburger}</span>
              <span className='circle' onClick={this.addHamburger}>+</span>
              <strong className='right'>$11.52</strong>
            </div>
            <hr />
            <div>
              <a href='#'>remove</a><br />
              <label>
                <input type='checkbox'/> wrap it for $5.99
              </label>
            </div>
          </div>
        </div>
        <div className='summary'>
          <h3>order summary</h3>
          <div>
            <strong>Subtotal</strong>
            <small> ({this.state.items} items)</small>
            <strong className='right'>${this.state.subtotal}</strong>
          </div>
          <div>
            <strong>delivery</strong>
            <strong className='right red'>free</strong>
          </div>
          <div>
            <strong>estimated tax</strong>
            <strong className='right'>${this.state.tax}</strong>
          </div>
          <hr/>
          <h3>total <span className='right'>${this.state.total}</span></h3>
          <hr/>
          <small>cart number: 24abd812-0777-42b6-b9f5-87f1c00cd860</small>
        </div>
      </div>
    )
  }
}
ReactDOM.render(
  <ShoppingCart />,
  document.getElementById('root')
);
