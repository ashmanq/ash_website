import Vue from 'vue';
import App from './App.vue';
import router from './router';
import CKEditor from '@ckeditor/ckeditor5-vue';
import WindowTitleBar from '@/components/WindowTitleBar';
import LoadingAnimation from '@/components/LoadingAnimation';

Vue.component('loading-animation', LoadingAnimation);
Vue.component('window-title-bar', WindowTitleBar);

Vue.use(require('vue-moment'));
Vue.use(CKEditor);

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
