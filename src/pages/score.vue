<template>
  <div class='score-container'>
    <div class='score-container-bg'>
      <p class="score">{{ score + ' 分' }}</p>
      <router-link to="/" class="return">返回首页</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      score: 0
    }
  },
  computed: mapState(['answerid']),
  created() {
    this.computeScore()
  },
  methods: {
    computeScore: function() {
      this.answerid.forEach((item) => {
        if (item == 1) {
          this.score += 20;
        }
      })
    }
  }
}
</script>

<style>
.score-container-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 10%;
  left: 10%;
  background: url('../assets/4-2.png') no-repeat;
  background-size: 80%;
}
.score {
  color: black;
  text-align: center;
  position: absolute;
  top: 25%;
  left: 35%;
  font-size: 30px;
}
.return {
  color: black;
  text-align: center;
  position: absolute;
  top: 35%;
  left: 35%;
}
</style>
