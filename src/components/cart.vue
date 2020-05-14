<template>
    <div>
        <template v-for="item in getItem">
            <div v-bind:key="item.id">
                <h4>{{item.name}}</h4>
                <h6>{{item.price}}원</h6>
                <button v-bind:key="item.id" @click="removeList(item.id)">장바구니에서 제거</button>
            </div>
        </template>
        <h2>{{getPrice}}</h2>
        <router-link to="/payment">결제</router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from'vuex';

export default {
    computed : {
        ...mapGetters('cart',['getItem', 'getPrice'])
    },
    methods : {
        ...mapActions('cart',['listAction']),
        removeList(idx) {
            this.listAction({
                type : "REMOVELIST",
                data : this.getItem.filter(ele => ele.id === idx)[0]
                })
            }
    }
    
}

</script>

<style>

</style>