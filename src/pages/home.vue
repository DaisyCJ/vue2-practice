<template>
  <div class="home-container">
    <div class='home-head-bg'></div>
    <router-link class='home-start-btn' to='item'></router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.home-head-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 10%;
  left: 10%;
  background: url('../assets/1-2.png') no-repeat;
  background-size: 80%;
}
.home-start-btn {
  position: absolute;
  top: 50%;
  left: 30%;
  width: 40%;
  height: 20%;
  background: url('../assets/1-4.png') no-repeat;
  background-size: 100%;
}
</style>
