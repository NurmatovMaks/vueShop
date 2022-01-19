<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item-image" :src="product_data.image" alt="img" />
    <p class="v-catalog-item-name">{{ product_data.name }}</p>
    <p class="v-catalog-item-price">Price: {{ product_data.price }}$</p>
    <button class="v-catalog-item-add-to-cart-btn btn" @click="addToCart">
      Add to card
    </button>
  </div>
</template>
<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
  mounted() {
    this.$set(this.product_data, "quantity", 1);
  },
};
</script>
<style>
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0;
  padding: 16px;
  margin-bottom: 16px;
}
</style>
