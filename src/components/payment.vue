<template>
  <div>
        결재 완료 되었습니다. 감사합니다.
        <router-link to="/" exact>
            홈으로 돌아가기
        </router-link>
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