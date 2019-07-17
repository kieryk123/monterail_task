import Vue from 'vue';
import App from './App.vue';
import VeeValidate, { Validator } from 'vee-validate';
import store from './store';
import moment from 'moment';
import './vee-validate/validators'

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
