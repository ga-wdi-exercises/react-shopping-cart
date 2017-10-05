import React from 'react';
import './index.css';



class Items extends React.Component {


  render(){
    return (


      <div className='items'>

        <h2>cart total: <span>$9.38</span></h2>
        <div className='half right'>
          <a href='#' className='checkout'>i'm ready to checkout</a>
        </div>




        <div className='item'>
          <img  src='https://scene7-secure.targetimg1.com/is/image/Target/39598742?wid=90&hei=90' />
          <div className='half'>
            Gaiam Kids Yoga Headband - Pink/Blue
          </div>

          <div className='half'>
            <span className='circle'>-</span>
            <span className='pad-left pad-right'>1</span>
            <span className='circle'>+</span>
            <strong className='right'>$27.92</strong>
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
            Gaiam Kids Yoga Headband - Pink/Blue
          </div>

          <div className='half'>
            <span className='circle'>-</span>
            <span className='pad-left pad-right'>1</span>
            <span className='circle'>+</span>
            <strong className='right'>$27.92</strong>
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

    )
  }

}


export default Items
