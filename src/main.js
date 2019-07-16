import Vue from 'vue';
import App from './App.vue';
import VeeValidate from 'vee-validate';
import store from './store';

Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App),
    created() {
        this.$store.dispatch('getCategories');
        this.$store.dispatch('getEmployes');
    }
}).$mount('#app');
