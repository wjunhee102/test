<template>
    <div id="app">
        <div class="wrap">
            <div class="header">
                <h1 class="logo">Apple Store</h1>
            </div>
            <div class="main">
                <Nav />
                <div class="container">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from'./components/nav';

export default {
    name: 'App',
    components: {
        Nav
    },
    created() {
        this.$store.dispatch('init/dataLoad');
    }
}
</script>

<style>



</style>
