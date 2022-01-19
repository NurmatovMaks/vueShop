import Vue from "vue";
import Vuex from "vuex";
import commonActions from "./actions/actions";
import apiRequest from "./actions/api-request";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";
Vue.use(Vuex);
const actions = { ...commonActions, ...apiRequest };
let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations,
  actions,
  getters,
});

export default store;
