import React, { Component } from 'react';
import Items from '../Items/Items.js';
import Summary from '../Summary/Summary.js';


export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      cartTotal: 0
    }
  }

render () {
  return (
    <div>

      <Items items={this.state.items} />



      <Summary subTotal={this.props.total}
              noOfItems={this.props.count}

    />

  </div>
  )}





}
