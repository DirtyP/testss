import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

Vue.use(Vuex)

const state={
  DATA:{},
  userList:[],
  Token:localStorage.getItem("Token")?localStorage.getItem("Token"):"",
  userData:{},
  errorShow:false,
  imageList:[],
  timer:0,
}
const store=new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})

export default store