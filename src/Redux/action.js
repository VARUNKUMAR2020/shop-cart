export const incrementCartValue = () => ({
    type: 'INCREMENT_CART_VALUE',
  });
  
  export const decrementCartValue = () => ({
    type: 'DECREMENT_CART_VALUE',
  });
  
  export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });
  
  export const removeFromCart = (product) => ({
    type: 'REMOVE_FROM_CART',
    payload: product,
  });
  