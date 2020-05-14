<template>
    <div class="nav g-sh m-radi after">
        <div class="cart-window">
            <template v-for="item in getItem">
                <div v-bind:key="item.id" class="g-fl">
                    <p>{{item.name}}</p> 
										<button type="button" @click="removeList(item.id)">제거</button>
                </div>
            </template>
        </div>
        <div class="price">{{getPrice}}</div>
        <div class="z-5">
          <router-link to="/cart">
            <span>장바구니</span>
					</router-link>
					<router-link to="/" exact>
						<span>메인</span>
					</router-link>
					<router-link to="/products" exact>
						<span class="f-w">상품목록</span>
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
.cart-window {
    width: 100%;
    height: 40%;
    overflow-y: scroll;
    position: relative;
    z-index: 10;
}
.price {
    text-align: center;
}

</style>