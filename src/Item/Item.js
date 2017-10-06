import React, {Component} from 'react'

export default class Item extends Component {
    render() {
        return (
            <div className='item'>
                <img src={this.props.image} />
                <div className='half'>
                    {this.props.name}
                 </div>
                <div className='half'>
                    <span className='circle'>-</span>
                    <span className='pad-left pad-right'>{this.props.itemOneCount}</span>
                    <span className='circle'>+</span>
                    <strong className='right'>${this.props.price}</strong>
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
    }
}