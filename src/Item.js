import React, { Component } from 'react';

class Item extends Component {
  constructor(props){
    super(props)
    this.state={
      amount:0
    }
  }
  handleAddItem(e){
    this.setState({
      amount: this.state.amount +1
    })
    console.log(this.props.body.price)
    let cost = this.props.body.price
    this.props.addItem(cost)
  }
  handleSubtractItem(e){
    let amount = this.props.body.amount
    if(this.state.amount > 0) {
      amount = this.state.amount -1
      let cost = this.props.body.price
      this.props.subtractItem(cost)
    }
    this.setState({
      amount: amount
    })
  }

  render(){
    let total = (this.state.amount * this.props.body.price).toFixed(2)
    return (
      <div className='item'>
        <img  src={this.props.body.img} alt="pic"/>
        <div className='half'>
          {this.props.body.name}
        </div>
        <div className='half'>
          <span onClick={(e)=>this.handleSubtractItem(e)} className='circle'>-</span>
          <span className='pad-left pad-right'>{this.state.amount}</span>
          <span onClick={(e)=>this.handleAddItem(e)} className='circle'>+</span>
          <strong className='right'>${total}</strong>
        </div>
        <hr />
        <div>
          <a href='#'>remove</a><br />
          <label>
            <input type='checkbox'/> wrap it for $5.99
          </label>
        </div>
      </div>
    )
  }
}

export default Item;
