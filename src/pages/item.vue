<template>
    <div class="item_container">
        <div class="topic">
            <header class="topic-name">
                {{ topics[topicNow].topic_name }}
            </header>
            <ul>
                <li v-for="(topic, index) in topics[topicNow].topic_answer"
                    :key="topic.topic_answer_id"
                    @click="choose(topic)">
                    <span class="option-style" :class="{'choose-item':itemId==topic.topic_answer_id}">{{ chooseType(index) }}</span>
                    <span class="option-detail">{{ topic.answer_name }}</span>
                </li>
            </ul>
            <span v-if="topicNow < topics.length-1"
                class="next-item-btn-bg"
                @click="nextItem">
            </span>
            <span v-else
                  class="submit-btn-bg"
                  @click="submit"></span>
        </div>
    </div>
</template>

<script>
const itemDetail = [{
  'topic_name': '题目一',
  'topic_id': 1,
  'topic_answer': [{
    'topic_answer_id': 1,
    'answer_name': '答案A',
    'is_standard_answer': 0
  }, {
    'topic_answer_id': 2,
    'answer_name': '答案B',
    'is_standard_answer': 0
  }, {
    'topic_answer_id': 3,
    'answer_name': '答案C',
    'is_standard_answer': 0
    }, {
    'topic_answer_id': 4,
    'answer_name': '正确答案',
    'is_standard_answer': 1
    }]
}, {
  'topic_name': '题目二',
  'topic_id': 2,
  'topic_answer': [{
    'topic_answer_id': 5,
    'answer_name': '答案A',
    'is_standard_answer': 0
  }, {
    'topic_answer_id': 6,
    'answer_name': '答案B',
    'is_standard_answer': 0
  }, {
    'topic_answer_id': 7,
    'answer_name': '答案C',
    'is_standard_answer': 0
  }, {
    'topic_answer_id': 8,
    'answer_name': '正确答案',
    'is_standard_answer': 1
  }]
}]

export default {
    data () {
        return {
            topics: itemDetail,
            score: 0,
            answer: null,
            itemId: null,
            topicNow: 0,
            hasChoose: false
        }
    },
    methods: {
        choose: function(topic) {
            this.hasChoose = true,
            this.answer = topic.is_standard_answer,
            this.itemId = topic.topic_answer_id
        },
        nextItem: function() {
            if(this.hasChoose) {
                this.score = this.answer==1 ? this.score+25 : this.score,
                this.hasChoose = false,
                this.topicNow++;
            }
            else {
                alert("您还没有选择")
            }
        },
        submit: function() {
            if(this.hasChoose) {
                this.score = this.answer==1 ? this.score+25 : this.score,
	  			this.$router.push({name: 'score', query: { score: this.score }})
            }
            else {
                alert("您还没有选择")
            }
        },
        chooseType: function(type) {
            switch(type) {
                case 0: return 'A';
                case 1: return 'B';
	  			case 2: return 'C';
	  			case 3: return 'D';
            }
        }
    }
}
</script>

<style>
.topic {
    height: 80%;
    width: 80%;
    position: absolute;
    left: 10%;
    background: url(../assets/2-1.png) no-repeat;
    background-size: 100%;
    padding: 30px 50px;
    color: white;
}
.next-item-btn-bg {
    height: 30%;
    width: 30%;
    position: absolute;
    top: 55%;
    left: 35%;
    background: url(../assets/2-2.png) no-repeat;
    background-size: 100%;
}
.submit-btn-bg {
    height: 30%;
    width: 30%;
    position: absolute;
    top: 55%;
    left: 35%;
    background: url(../assets/3-1.png) no-repeat;
    background-size: 100%;
}
.topic-name {
    padding: 20px 0;
}
.option-style {
    width: 15px;
    height: 15px;
    display: inline-block;
    border: 1px solid #fff;
    border-radius: 50%;
    text-align: center;
    font-size: 0.5rem;
    font-family: 'Arial';
}
.choose-item {
	background-color: #ffd400;
	color: #575757;
	border-color: #ffd400;
}
ul {
    list-style: none;
}
</style>
