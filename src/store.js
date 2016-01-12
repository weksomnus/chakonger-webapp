/**
 * Created by ZhongRuiguang on 2016/1/11 0011.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  sid:"abc"
};
const logout = 'LOGOUT'

const mutations = {
  [logout] (state) {
    state.sid='bbc';
    alert('testlogout')
  }
}
const actions = {

  // for simple actions that just dispatches a single mutation,
  // we can just provide the mutation type.
  logout: logout
}
// A Vuex instance is created by combining the state, the actions,
// and the mutations. Because the actions and mutations are just
// functions that do not depend on the instance itself, they can
// be easily tested or even hot-reloaded (see counter-hot example).
//
// You can also provide middlewares, which is just an array of
// objects containing some hooks to be called at initialization
// and after each mutation.
export default new Vuex.Store({
  state,
  actions,
  mutations
})
