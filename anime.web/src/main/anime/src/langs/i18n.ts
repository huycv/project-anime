import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from '../store';
Vue.use(VueI18n);

const messages = {
  vi: require('./vi.json'),
};

const i18n = new VueI18n({
  // locale: store.state.storeLang, // set locale
  locale: 'vi', // set locale
  messages,
  fallbackLocale: 'vi',
  silentTranslationWarn: true,
});
export default i18n;
