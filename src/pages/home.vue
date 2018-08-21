<template>
    <div class="home_container">
        <div class="home_bg"></div>
        <router-link to="item" class="home_start"></router-link>
    </div>
</template>

<script>
export default {
    created() {
        
    }
}
</script>

<style>
.home_bg {
    height: 80%;
    width: 80%;
    position: absolute;
    left: 10%;
    background: url(../assets/1-2.png) no-repeat;
    background-size: 100%;
}
.home_start {
    height: 30%;
    width: 30%;
    position: absolute;
    top: 55%;
    left: 35%;
    background: url(../assets/1-4.png) no-repeat;
    background-size: 100%;
}
</style>
