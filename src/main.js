import Vue from 'vue';
import App from './App.vue';
import VeeValidate, { Validator } from 'vee-validate';
import store from './store';
import moment from 'moment';

Vue.use(VeeValidate);

const tomorrowDate = moment().add(1, 'days').format('YYYY-MM-DD');

Validator.extend('afterToday', {
 getMessage: () => 'The minimum date is tomorrow.',
 validate: value => value >= tomorrowDate
});

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App),
    created() {
        this.$store.dispatch('getCategories');
        this.$store.dispatch('getEmployes');
    }
}).$mount('#app');
