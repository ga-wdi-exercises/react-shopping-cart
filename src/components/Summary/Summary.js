import React, { Component } from 'react'
import Items from '../Items/Items.js';

export default class Summary extends Component {
  constructor(props) {
    super(props)
    // let amountPayable = this.state.total + (this.state.total * .40)
    // console.log(this.props);
    this.state = {
      subTotal: this.props.total,
      noOfItems: this.props.count,
      delivery: "free",
      estimatedTax: .40,
      totalPayment: 0


    }
  }


    // summaryTotal(e) {
    //
    //   this.setState ({
    //     totalPayment: this.state.amountPayable,
    //     subTotal: this.state.props.total,
    //     noOfItems: this.state.props.count
    //   })
    //   }






  render () {
    return (
      <div className='summary'>
        <h3>order summary</h3>
        <div>
          <strong>subtotal</strong>
          <small> ({this.state.noOfItems})</small>
          <strong className='right'>{this.state.subTotal}</strong>
        </div>
        <div>
          <strong>delivery</strong>
          <strong className='right red'>free</strong>
        </div>
        <div>
          <strong>estimated tax</strong>
          <strong className='right'>$0.40</strong>
        </div>
        <hr/>
        <h3>total <span className='right'>{this.state.totalPayment}</span></h3>
        <hr/>
        <small>cart number: 1016396673255</small>
      </div>
    )
  }
}
