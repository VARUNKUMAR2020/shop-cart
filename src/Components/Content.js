import React from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions";

const Content = ({ cartProduct, cart, addToCart, removeFromCart }) => {
  const isInCart = cart.some((product) => product.id === cartProduct.id);

  const handleClick = () => {
    if (isInCart) {
      removeFromCart(cartProduct);
    } else {
      addToCart(cartProduct);
    }
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={cartProduct.thumbnail} alt="..." />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{cartProduct.title}</h5>
            RS.{cartProduct.price}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className={`btn ${
                isInCart ? "btn-danger" : "btn-success"
              } mt-auto`}
              id="butFunction"
              onClick={handleClick}
            >
              {isInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
