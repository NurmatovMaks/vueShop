<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-catalog-link-to-cart">Back to Catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!cart_data.length">There are no products in cart ...</p>
    <v-cart-item
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(item.article, index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="v-cart-total" v-if="cart_data.length">
      <p class="total-name">Total:</p>
      <p>{{ cartTotalCoast }}$</p>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import VCartItem from "./v-cart-item.vue";
export default {
  name: "v-cart",
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    VCartItem,
  },
  data() {
    return {};
  },
  computed: {
    cartTotalCoast() {
      let result = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce((sum, el) => sum + el);
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    deleteFromCart(article) {
      this.DELETE_FROM_CART(article);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
  },
};
</script>
<style>
.v-cart {
  margin-bottom: 100px;
}
.v-cart-total {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 16px 24px;
  display: flex;
  justify-content: center;
  background: #26ae68;
  color: #ffffff;
  font-size: 20px;
}
.total-name {
  margin-right: 16px;
}
.btn {
  padding: 8px 16px;
  background: #26ae68;
  color: #ffffff;
  border: 0;
  border-radius: 4px;
}
</style>
