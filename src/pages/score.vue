<template>
  <div>
    <div class="score-container">
      <div class="score-bg"></div>
      <div class="msg-score">
        <p>{{ $route.query.score+"分" }}</p>     
      </div>
      <router-link to="/" class="back-home">回到首页</router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.score-container {
  text-align: center;
}
.score-bg {
    height: 80%;
    width: 80%;
    position: absolute;
    left: 10%;
    background: url(../assets/4-2.png) no-repeat;
    background-size: 100%;
}
.msg-score {
  width: 9.7rem;
  height: 9.1rem;
  margin: 0 auto;
  position: relative;
  top: 9rem;
  font-size: 40px;
  font-family: Tahoma,Helvetica,Arial;
  color: #a51d31;
}
.back-home {
  position: absolute;
  top: 45%;
  left: 42%;
  font-family: Tahoma,Helvetica,Arial;
}
</style>