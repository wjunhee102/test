<template>
    <div class="nav nav_default shadow-lg">
<<<<<<< HEAD
        <div class="h-56">
            <template v-for="item in getItem">
                <div @mousedown="moveBtn" @mouseup="stopBtn" ref="aaa" v-bind:key="item.id" class="cursor-pointer border-red-400 flex flex-wrap bg-transparent hover:bg-red-400 text-red-400 font-semibold hover:text-white py-1 px-1 border border-red-400 hover:border-transparent rounded">
=======
        <div class="cart_m">
            <template v-for="item in getItem">
                <div v-bind:key="item.id" class="flex justify-between">
>>>>>>> d5b7ec9daca3be5c865ec207682744310d6bab8e
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
		data(){
			return { 
				x : 0,
				y : 0,
				yy : false
			}
		},
		created() {
			// window.addEventListener("mousemove",this.moveEle);
			// this.moveA();
		},
    computed : {
      ...mapGetters('cart',['getItem', 'getPrice'])
		},
		beforeDestroy(){
			window.removeEventListener("mousemove", this.moveEle)
		},
    methods : {
        ...mapActions('cart',['listAction']),
        removeList(idx) {
            this.listAction({
                type : "REMOVELIST",
                data : this.getItem.filter(ele => ele.id === idx)[0]
            })
				},
				moveBtn() {
					this.yy = true
					// this.$refs.aaa[0].clientWidth = 400;
					window.addEventListener("mousemove", this.moveEle);
				},
				stopBtn() {
					this.yy = false
					window.removeEventListener("mousemove", this.moveEle);
				},
				moveEle(e) {
					// if(this.yy) {
						this.x = e.clientX;
						this.y = e.clientY;
						this.$refs.aaa[0].style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
					// }
				},
				moveA() {
					this.$refs.aaa[0].style.transform = `translate(${this.x}px, ${this.y}px)`
				}
		}
}
</script>

<style>


</style>