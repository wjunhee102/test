import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../components/home.vue';
import Products from '../components/Products.vue';
import Cart from '../components/cart.vue';
import Detail from '../components/detail.vue';
import Payment from '../components/payment.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/products',
            component: Products
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/products/detail/:id',
            component: Detail,
            props: route => ({id : Number(route.params.id)})
        },
        {
            path: '/payment',
            component : Payment
        }
    ]
})