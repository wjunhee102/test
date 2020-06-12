<template>
    <div id="app">
        <div class="wrap max-w-screen-xl min-height" >
            <div class="header w-full h-20 shadow-lg">
                <h1 class="logo">감성 Store</h1>
            </div>
            <div class="main">
								<div class="nav_default min-height">
									<Nav />
								</div>
                <div class="container .min-height">
									<transition name="view">
										<router-view />
									</transition>
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
/** 프레임 **/
body {
	font-family: 'Noto Sans KR', sans-serif;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.wrap {
	margin:0 auto;
	font-size: 16px;
}
.min-height {
	min-height: 900px;
}                                               
<<<<<<< HEAD

=======
div {
	/* border: 1px solid #000; */
}
/* header */
.header {
	width: 100%;
	height: 60px;
	line-height: 60px;
	display: flex;
	align-items: center;
}
.logo {
	display: inline-block;
	margin: 0 auto;
	text-align: center;
	
}
>>>>>>> d5b7ec9daca3be5c865ec207682744310d6bab8e

/** 메인 **/
.main {
	display: flex;
	position: relative;
}
/** home **/ 
.home {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.home h1 {
	text-align: center;
	font-size: 2em;
	font-weight: 600;
}
/** 네비 **/
.nav {
	width: 170px;
	height: 100%;
	margin-right: 10px;
}
.nav .cart_m {
	width: 100%;
	height: 500px;
}
/** 컨테이너 **/
.container {
	overflow-y: scroll;
}
.router-link-active {
	background-color: #fc8181;
	color: #fff;
}
.router-link-active span {
	color: #fff;
}
.view-enter-active, .view-leave-active {
	transition: opacity 0.3s;
}
.view-leave-active {
	position: absolute;
}
.view-enter, .view-leave-to {
	opacity: 0;
}

/* 디테일 */
.detail {
	width: 100%;
	height: 100%;
}
.detail .tit{
	width: 100%;
}
.detail .inner{
	height: 700px;
}
.detail .box {
	top: 50%;
	left: 50%;
	width: 80%;
	transform: translate(-50%, -50%);
}
.cart {
	width: 100%;
}
.cart .box {
	height: 600px;
}

</style>
