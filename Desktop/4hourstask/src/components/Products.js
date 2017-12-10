import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';

class Products extends Component {
  amount = (item) => {
    var inc = 0; 
    this.props.cart.forEach((c) => { 
      if(c.id === item.id) {
        inc++
      }
    });
    return inc;
  }
  productList= ()=> {
    const { products, addToCart, removeFromCart } = this.props;
    console.log()
    return ( products.map( (item,index)  => {
      return (
      <div className= "productValue" key={index}>
          <div className="itemsValue">
            <div className="itemsdata">
              <div className="left">
                <img src={item.img_url} alt={item.name}/>
                &nbsp;&nbsp;
                <span id="itemName">{item.name}</span>
              </div>
              <div className="right">
                <button className="delete">x</button>
              </div>
            </div>
          </div>
          <div className="qtyValue">
            <button className="minus" onClick={() => removeFromCart(item)}>
              -
            </button>
            <div className="inputQty">
             { this.amount(item)}
            </div>
            <button className="plus"  onClick={() => addToCart(item)}>
              +
            </button>
          </div>
          <div className="priceValue">
            <span>${item.price}</span>
          </div>
        </div>
      )
    })
    )}

  render() {
    const { products } = this.props;
    return (
      <div className= "products">
        <div className= "productsHeader">
          <div className= "items">
            <span>Items({products.length})</span>
          </div>
          <div className= "qty">
            <span>Qty</span>
          </div>
          <div className= "price">
            <span>Price</span>
          </div>
        </div>
         { this.productList() }
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        products: state.products,
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: item => dispatch(addToCart(item)),
        removeFromCart: item => dispatch(removeFromCart(item))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);

