<template>
  <div class="detail p-2">
		<h2 class="shadow-lg tit mb-2 text-center leading-10 text-2xl font-semibold">{{detailItem(id).name}}</h2>
		<div class="flex inner">
			<img class="shadow-lg flex-1 h-full" src="https://placeimg.com/200/100/animals/sepia" />
			<div class="content h-full flex-1 p-2 relative">
				<div class="box absolute">
					<div class="">
						<h4 class="mb-2 leading-8">이름: {{detailItem(id).name}}</h4>
						<h4 class="mb-2 leading-8">가격: {{detailItem(id).price}}</h4>
						<h4 class="mb-2 leading-8">원산지: {{detailItem(id).origin}}</h4>
						<h4 class="leading-8">상세설명: {{detailItem(id).detail}}</h4>
					</div>
					<button 
						class="shadow-lg mb-2 leading-8 hover:bg-red-400 text-red-400 font-semibold hover:text-white text-center w-full" 
						@click="addList(id)">장바구니에 넣기</button>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
	import { mapGetters, mapActions } from'vuex';

	export default {
    props: {
			id : Number
    },
    computed: {
			...mapGetters('init',['detailItem'])
    },
    methods: {
			...mapActions('cart',['listAction']),
			addList(id) {
				this.listAction({
					type : "ADDLIST",
					data : this.detailItem(id)
				})
			}
    }
	}
</script>

<style>

</style>