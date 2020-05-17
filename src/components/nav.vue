<template>
    <div class="nav nav_default shadow-lg">
        <div class="cart_m">
            <template v-for="item in getItem">
                <div v-bind:key="item.id" class="flex justify-between">
                    <p>{{item.name}}</p> 
										<button class="hover:bg-red-400 text-red-400 font-semibold hover:text-white" type="button" @click="removeList(item.id)">제거</button>
                </div>
            </template>
        </div>
        <div class="">{{getPrice}}</div>
        <div class="">
          <router-link to="/cart" >
            <span class="ml-px bg-transparent hover:bg-red-400 text-red-400 font-semibold hover:text-white  border border-red-400 hover:border-transparent rounded">
							장바구니
						</span>
					</router-link>
					<router-link to="/" exact>
						<span class="ml-px bg-transparent hover:bg-red-400 text-red-400 font-semibold hover:text-white border border-red-400 hover:border-transparent rounded">
							메인
						</span>
					</router-link>
					<router-link to="/products" exact>
						<span class="bg-transparent hover:bg-red-400 text-red-400 font-semibold hover:text-white  border border-red-400 hover:border-transparent rounded">
							상품목록
						</span>
					</router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'Nav',
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