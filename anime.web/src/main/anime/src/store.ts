import Vue from 'vue';
import Vuex from 'vuex';
import mainApp from './main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // init default lang
    storedLang: 'vi',
    locale: 'vi',

  },
  mutations: {
    SET_LANG(state, payload) {
      mainApp.$i18n.locale = payload;
      state.storedLang = payload;
    },
    SET_LOCALE(state, payload) {
      state.locale = payload;
    },
  },
  actions: {
    setLang({ commit }, payload) {
      commit('SET_LANG', payload);
    },
    setLocale({ commit }, payload) {
      commit('SET_LOCALE', payload);
    },
  },
});
