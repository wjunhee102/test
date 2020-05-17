<template>
  <div class="grid grid-cols-4 gap-4">
    <template v-for="item in getItem">
      <div v-bind:key="item.id" class="max-w-sm rounded overflow-hidden shadow-lg">
        <router-link :to="`/products/detail/${item.id}`">
					<div class="w-full .h-64 overflow-hidden">
						<img src="https://placeimg.com/200/100/animals/sepia" class="w-full" />
					</div>
            <div class="px-6 py-4">
              <h4 class="font-bold text-xl mb-2">{{item.name}}</h4>
              <h6>{{item.price}}원</h6>
            </div>
        </router-link>
        <button 
          class="hover:bg-red-400 text-red-400 font-semibold hover:text-white text-center w-full"
          @click="addList(item.id)">장바구니에 넣기</button>
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