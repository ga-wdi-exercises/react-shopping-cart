import React from 'react';
import './index.css';
import Summary from './Summary.js';
import Items from './Items.js';



class ShoppingCart extends React.Component {

  render(){
    return (

      <div className='cart'>



        <Items />


        <Summary />



      {/* end of className cart */}
      </div>
    )
  }
}




export default ShoppingCart
