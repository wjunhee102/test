<template>
  <div>
      <h2>{{detailItem(id).name}}</h2>
      <h4>{{detailItem(id).price}}</h4>
      <h4>{{detailItem(id).detail}}</h4>
      <button @click="addList(id)">장바구니에 넣기</button>
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
            console.log(this.detailItem(id))
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