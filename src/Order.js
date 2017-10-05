import React, {Component} from 'react';

export default class Order extends Component {

  render(){
    return(<div className='summary'>
      <h3>order summary</h3>
      <div>
        <strong>subtotal</strong>
        <small> (3 items)</small>
        <strong className='right'>$8.98</strong>
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
      <h3>total <span className='right'>$9.38</span></h3>
      <hr/>
      <small>cart number: 1016396673255</small>
    </div>

    )
  }
}
