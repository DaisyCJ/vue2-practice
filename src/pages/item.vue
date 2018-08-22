<template>
  <div class='item-container'>
    <div class='detail'>
      <header class="detail-head">{{topics[nowNum].topic_name}}</header>
      <ul>
        <li 
          v-for='(topic, index) in topics[nowNum].topic_answer'
          :key='topic.topic_id'
          @click='choose(topic)'>
          <span class="option_style" :class="{'has_choosed': chooseItemId==topic.topic_answer_id}">{{ chooseItem(index) }}</span>
          <span class="option_detail">{{ topic.answer_name }}</span>
        </li>
      </ul>
      <span v-if='nowNum<topics.length-1' @click='nextItem' class="next-btn"></span>
      <span v-else @click='submit' class="submit-btn"></span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      nowNum: 0,
      chooseItemId: null,
      answer: null
    }
  },
  created() {
    this.initState()
  },
  computed: mapState([
      'topics', //题目详情
  ]),
  methods: {
    ...mapActions([
      'addScore', 'initState'
    ]),
    choose: function(topic) {
      this.chooseItemId = topic.topic_answer_id,
      this.answer = topic.is_standard_answer
    },
    chooseItem: function(id) {
      switch (id) {
        case 0:
          return 'A';
          break;
        case 1:
          return 'B';
          break;
        case 2:
          return 'C';
          break;
        case 3:
          return 'D';
          break;
        default:
          break;
      }
    },
    nextItem: function() {
      if(this.chooseItemId) {
        this.nowNum++,
        this.addScore(this.answer),
        this.answer = null,
        this.chooseItemId = null
      }
      else {
        alert('您还没有输入答案')
      }
    },
    submit: function() {
      if(this.chooseItemId) {
        this.addScore(this.answer),
        this.$router.push('score')
      }
      else {
        alert('您还没有输入答案')
      }
    }
  }
}
</script>

<style>
.detail {
  width: 500px;
  height: 500px;
  position: absolute;
  top: 8%;
  left: 10%;
}
.item-container {
  width: 500px;
  height: 500px;
  color: white;
  position: relative;
  background: url('../assets/2-1.png') no-repeat;
  background-size:80%;
}
.detail-head {
  padding: 5% 0;
}
ul {
  list-style: none;
}
.option_style{
border: 1px solid #fff;
    border-radius: 50%;
    text-align: center;
    font-size: 0.5rem;
    font-family: 'Arial';
    height: 18px;
    width: 18px;
    padding: 1px;
    display: inline-block;
}
.has_choosed{
	background-color: #ffd400;
	color: #575757;
	border-color: #ffd400;
}
.next-btn {
  position: absolute;
  top: 50%;
  left: 10%;
  width: 30%;
  height: 20%;
  background: url('../assets/2-2.png') no-repeat;
  background-size: 100%;
}
.submit-btn {
  position: absolute;
  top: 50%;
  left: 10%;
  width: 40%;
  height: 20%;
  background: url('../assets/3-1.png') no-repeat;
  background-size:100%;
}
</style>
