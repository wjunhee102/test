import Vue from 'vue';
import Vuex from 'vuex';
import { item } from '../item/item';

Vue.use(Vuex);

// const ADDLIST = "ADDLIST";
// const REMOVELIST = "REMOVELIST";
const ITEMLOAD = "ITEMLOAD";

console.log(item);

const init = {
    state : {
        all : []
    },
    getters: {
        getItem: state => {
            return state.all
        }
    },
    mutations: {
        [ITEMLOAD] : async function(state){
            try {
                const data = await item
                state.all = data
            } catch (error){
                console.log(error)
            } finally {
                console.log(state)
                const local = JSON.stringify(state);
                localStorage.setItem("item", local);
            }
            return 
        }
    },
    actions: {
        dataLoad : function(context, payload) {
            if(payload) {
                context.commit(ITEMLOAD);
            } 
            return 
        }
    }
}

// const cart = {

// }

const store = new Vuex.Store({
    modules: {
        init
    }
});

export default store;