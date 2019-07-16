import Vue from 'vue';
import Vuex from 'vuex';
import categories from '@/data/categories.json';
import employes from '@/data/employes.json';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loggedUserId: '3',
        isEventPublished: false,
        formData: {},
        categoriesList: null,
        employesList: null
    },
    mutations: {
        'SET_FORM_DATA'(state, payload) {
            state.formData = payload;
        },
        'SET_EVENT_STATUS'(state, payload) {
            state.isEventPublished = payload;
        },
        'SET_CATEGORIES_LIST'(state, payload) {
            state.categoriesList = payload;
        },
        'SET_EMPLOYES_LIST'(state, payload) {
            state.employesList = payload;
        }
    },
    actions: {
        publishEvent({commit}, data) {
            commit('SET_FORM_DATA', data);
        },
        updateEventStatus({commit}, status) {
            commit('SET_EVENT_STATUS', status);
        },
        getCategories({commit}) {
            commit('SET_CATEGORIES_LIST', categories);
        },
        getEmployes({commit}) {
            commit('SET_EMPLOYES_LIST', employes);
        }
    },
    getters: {
        loggedUserId(state) {
            return state.loggedUserId;
        },
        isEventPublished(state) {
            return state.isEventPublished;
        },
        formData(state) {
            return state.formData;
        },
        categoriesList(state) {
            return state.categoriesList;
        },
        employesList(state) {
            return state.employesList;
        }
    }
});
