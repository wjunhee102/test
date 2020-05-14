import Vue from 'vue';
import Vuex from 'vuex';
import { item } from '../item/item';

Vue.use(Vuex);

const ADDLIST = "ADDLIST";
const REMOVELIST = "REMOVELIST";
const ITEMLOAD = "ITEMLOAD";
const LOCALSAVE = "LOCALSAVE";
const PAYMENT = "PAYMENT";
const RESET = "RESET";



const init = {
    namespaced: true,
    state : {
        all : []
    },
    getters: {
        getItem: state => {
            return state.all
        },
        detailItem: state => type =>{
            return state.all.filter(ele => ele.id === type)[0];
        }
    },
    mutations: {
        [ITEMLOAD] : function(state, payload){
            return state.all = payload.map((ele, idx)=>{
                return Object.assign({}, ele, {
                    id : idx
                });
            })
        }
    },
    actions: {
        dataLoad : async function(context) {
                try {
                    const  data = await item
                    context.commit(ITEMLOAD, data);
                    console.log(data)
                } catch (error){
                    console.log(error);
                } finally {
                    console.log("실행됨");
                }
            return
        }
    }
}

const cart = {
    namespaced: true,
    state : {
        cart : [],
        pay : 0
    },
    getters: {
        getItem: state => {
            return state.cart
        },
        getPrice: state => {
            let price = 0
            state.cart.map(ele => {
                return price += ele.price
            })
            return price 
        }
    },
    mutations: {
        [ADDLIST] : function(state, payload) {
            for(let i = 0;  i < state.cart.length; i++ ){
                if(state.cart[i].id === payload.id) {
                    return state
                }
            }
            return state.cart = [...state.cart, payload]
        },
        [REMOVELIST] : function(state, payload) {
            return state.cart = state.cart.filter(ele => ele.id !== payload.id);
        },
        [LOCALSAVE] : function(state) {
            const itemId = state.cart.map(ele => {
                return ele.id
            });
            const item = JSON.stringify(itemId);
            return localStorage.setItem("item", item);
        },
        [PAYMENT] : function() {
            const price = store.getters['cart/getPrice'];
            return localStorage.setItem("pay", price);
        },
        [RESET] : function(state) {
            return (state.cart = [],
                state.pay = 0
            )
        }
    },
    actions: {
        listAction : async function(context, payload) {
            await context.commit(payload.type, payload.data);
            return context.commit(LOCALSAVE);
        },
        payAction : async function(context) {
            await context.commit(PAYMENT);
            return context.commit(RESET);
        }
    }
}

const store = new Vuex.Store({
    modules: {
        init,
        cart
    }
});

export default store;