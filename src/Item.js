import React, {Component} from 'react';

export default class Item extends Component {
  render(){
    return (
<div className='item'>
  {this.props.imgUrl}
  <img  src='https://scene7-secure.targetimg1.com/is/image/Target/12953828?wid=90&hei=90' />
  <div className='half'>
    {this.props.name}
  </div>
  <div className='half'>
    <span className='circle'onClick={this.handleItems}>-</span>
    <span className='pad-left pad-right'>1</span>
    <span className='circle'>+</span>
    <strong className='right'>${this.props.cost}</strong>
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
