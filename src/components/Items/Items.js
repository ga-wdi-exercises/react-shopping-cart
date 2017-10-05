import React, { Component } from 'react'


export default class Items extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { name: "Gaiam Kids Yoga Headband - Pink/Blue", quantity: 1, cost: 9.38, imgUrl: "https://scene7-secure.targetimg1.com/is/image/Target/39598742?wid=90&hei=90" }

      ],
      checkbox: false,
      count: 0,
      total: 0



    }
    this.onUpdateQuantity = this.onUpdateQuantity.bind(this)
  }

  onDeleteQuantity(e) {
    if (this.state.count > 0){
    this.setState ({
      count: this.state.count - 1,
      // total: this.state.total - {this.props.items.cost}
      total: this.state.items[0].cost * (this.state.count - 1)
    })}

  }

  onUpdateQuantity(e) {

    this.setState ({
      count: this.state.count + 1,
      total: this.state.items[0].cost * (this.state.count + 1)
    })

  }

  updateTotal(e) {
    if (this.state.count > 0){
    this.setState ({
      checkbox: !this.state.checkbox,
      total: (this.state.checkbox === false) ? (this.state.total + 5.99 ): (this.state.total - 5.99)
    })
    }
  }

  removeItem(e) {
    this.setState ({
      items: null
    })
  }







  render(){

    return (
      <div className='cart'>
        <div className='items'>
          <h2>cart total: <span>{this.state.total}</span></h2>
          <div className='half right'>
            <a href='#' className='checkout'><span onClick={e => this.summaryTotal(e)}>i'm ready to checkout</span></a>
          </div>
          <div className='item'>
            <img  src='https://scene7-secure.targetimg1.com/is/image/Target/39598742?wid=90&hei=90' />
            <div className='half'>
              <ul>
          {this.state.items.map(item => {
            return (<li key={item.name}>{item.name}</li>)
          })}
        </ul>
            </div>
            <div className='half'>
              <span className='circle' onClick={e => this.onDeleteQuantity(e) }>-</span>
              <span className='pad-left pad-right'>{this.state.count}</span>
              <span className='circle' onClick={e => this.onUpdateQuantity(e) }>+</span>
              <strong className='right'>{this.state.total}</strong>
            </div>
            <hr />
            <div>
              <input onClick={e => this.removeItem(e)} type="submit" value="Remove" />
              <label>
                <input onClick={e => this.updateTotal(e)}type='checkbox'/> wrap it for $5.99
              </label>
            </div>
          </div>



        </div>

      </div>
    )
  }
}
