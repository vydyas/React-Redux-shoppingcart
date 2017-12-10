import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

class Cart extends Component {
  render() {
    const {cart} = this.props;
    return (
      <div className="cart">
       <div className="itemsCart">
          <div>Items({cart.length})</div>
          <div>:</div>
          <div>$138</div>
       </div>
       <div className="itemsCart">
          <div>Discount</div>
          <div>:</div>
          <div>$138</div>
       </div>
       <div className="itemsCart">
          <div>Type Discount</div>
          <div>:</div>
          <div>$138</div>
       </div>
       <div className="orderTotal">
          <div>Order Total</div>
          <div className="orderTotalValue">$138</div>
       </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: item => dispatch(removeFromCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
