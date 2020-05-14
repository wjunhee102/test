<template>
    <div id="app">
        <div class="wrap">
            <div class="header">
                <h1 class="logo">감성 Store</h1>
            </div>
            <div class="main">
                <Nav />
                <div class="container g-w g-h">
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
	.main-bg {
		background-color: #FF8E8B;
	}
	.m-radi {
		border-radius: 16px;
	}
	.z-5 {
		z-index: 5;
	}
	body {
		/* background-color: #FFA6A3; */
	}
	#app {
		width: 100%;
		height: 100%;
		background-color: #fff;
	}
	a {
		text-decoration: none;
		color: #000;
	}
	.f-w {
		color: #fff;
	}
	.wrap {
		width: 1000px;
		margin: 0 auto;
		position: relative;
	}
	.header {
		text-align: center;
		line-height: 50px;
	}
	.main {
		width: 800px;
		display: flex;
		justify-content: space-between;
	}
	.nav {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-400px ,-50%);
		justify-content: center;
		width: 160px;
		height: 600px;
		box-sizing: border-box;
		background-color: #fff;
		overflow: hidden;
	}
	.after::after {
		content: "";
		display: block;
		position: absolute;
	}
	.nav::after {
		width: 600px;
		height: 600px;
		left: calc(50% - 300px);
		top: 400px;
		border-radius: 50%;
		background-color: #FF8E8B;
		z-index: 1;
	}
	.container {
		padding-left: 200px;
	}
	.nav a {
		display: block;
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
	}
	.g-sh {
		box-shadow: 2px 2px 7px 1px rgba(255, 142, 139, 0.2);
	}
	.g-w {
		width: 600px; 
	}
	.g-fl, .nav {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
	.g-fl {
		justify-content: space-between;
	}

</style>
