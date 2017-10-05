import React, {Component} from 'react';


export default class Item extends Component {

  render(props){
    console.log("props")
    return(
      <div className='item'>
        <img  src='https://scene7-secure.targetimg1.com/is/image/Target/39598742?wid=90&hei=90' />
        <div className='half'>
          {this.props.name}
        </div>
        <div className='half'>
          <span className='circle'>-</span>
          <span className='pad-left pad-right'>1</span>
          <span className='circle'>+</span>
          <strong className='right'>{this.props.cost}</strong>
          <div>
            <a href='#'>remove</a><br />
            <label>
              <input type='checkbox'/>
            </label>
            wrap it for $5.99
          </div>
          <hr />
        </div>
      </div>
    )
  }

}
