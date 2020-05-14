<template>
    <div class="g-fl">
        <template v-for="item in getItem">
            <div v-bind:key="item.id">
                <router-link :to="`/products/detail/${item.id}`">
                    <div>
                        <h4>{{item.name}}</h4>
                        <h6>{{item.price}}원</h6>
                    </div>
                </router-link>
                <button @click="addList(item.id)">장바구니에 넣기</button>
            </div>
        </template>
    </div>
</template>

<script>
import { mapGetters, mapActions } from'vuex';

export default {
    computed : {
        ...mapGetters('init',['getItem'])
    },
    methods : {
        ...mapActions('cart',['listAction']),
        addList(idx) {
            this.listAction({
                type : "ADDLIST",
                data : this.getItem[idx]
            })
        }
    }
}
</script>

<style>

</style>