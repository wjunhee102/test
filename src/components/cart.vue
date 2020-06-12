<template>
  <div class="cart h-full">
		<div class="box grid grid-cols-4 gap-4">
			<template v-for="item in getItem">
        <div v-bind:key="item.id" class="max-w-sm h-auto rounded overflow-hidden shadow-lg">
					<div class="w-full .h-64 overflow-hidden">
						<img src="https://placeimg.com/200/100/animals/sepia" class="w-full" />
					</div>
					<div class="px-6 py-4">
						<h4 class="font-bold text-xl mb-2">{{item.name}}</h4>
          <h6>{{item.price}}원</h6>
					</div>
          <button 
            class="hover:bg-red-400 text-red-400 font-semibold hover:text-white text-center w-full" 
            v-bind:key="item.id" 
            @click="removeList(item.id)">장바구니에서 제거</button>
        </div>
      </template>
		</div>
		<div class="flex justify-end">
			<h2 class="mx-12">총 금액: {{getPrice}} </h2>
			<router-link to="/payment">
				<span class="hover:bg-red-400 text-red-400 font-semibold hover:text-white">결제하기</span>
			</router-link>
		</div>
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