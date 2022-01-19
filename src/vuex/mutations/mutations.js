export default {
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products;
  },
  SET_CART: (state, product) => {
    if (state.cart.length) {
      let productIsExist = false;
      state.cart.map((item) => {
        if (item.article === product.article) {
          productIsExist = true;
          item.quantity++;
        }
      });
      if (!productIsExist) {
        state.cart.push(product);
      }
    } else {
      state.cart.push(product);
    }
  },
  REMOVE_FROM_CART: (state, article, index) => {
    if (state.cart.length > 0 && article) {
      return state.cart.splice(index, 1);
    }
  },
  DECREMENT: (state, index) => {
    state.cart[index].quantity++;
  },
  INCREMENT: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--;
    }
  },
};
