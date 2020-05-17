<template>
		<div class="h-full flex items-center">
			<div class="w-full h-auto text-center">
				<span>
					결재 완료 되었습니다. 감사합니다.
				</span> 
				<router-link to="/" exact> 
					<span class="hover:bg-red-400 text-red-400 font-semibold hover:text-white">홈으로 돌아가기.</span>
				</router-link>
			</div>
		</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    created(){
        this.payAction();
    }
    ,
    methods: {
        ...mapActions('cart', ['payAction'])
    }
}
</script>

<style>

</style>