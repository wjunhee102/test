<template>
    <div class="nav">
        <router-link to="/">
            <span>메인</span>
        </router-link>
        <router-link to="/products">
            <span>상품목록</span>
        </router-link>
        <router-link to="/cart">
            <span>장바구니</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style>

</style>