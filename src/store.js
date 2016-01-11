/**
 * Created by ZhongRuiguang on 2016/1/11 0011.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// mutation types
// optional if you don't like constants.
const SAVESESSIONID = 'SAVESESSIONID';
const GETSESSIONID = 'GETSESSIONID';

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  SessionID:""
};

const actions = {
    savesessionid: SAVESESSIONID,
    getsessionid: GETSESSIONID
}

const mutations = {
  [SAVESESSIONID] (state) {
    state.SessionID="LOGINED";
  },
  [GETSESSIONID] (state) {

  }
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
