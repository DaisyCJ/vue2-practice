import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  topics : [{
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
  }],
  answerid: []
}

export default new Vuex.Store({
  state,
  mutations: {
    addScore(state, answer) {
      state.answerid.push(answer)
    },
    initState(state) {
      state.answerid = []
    }
  },
  actions: {
    addScore(context, answer) {
      context.commit('addScore', answer)
    },
    initState(context) {
      context.commit('initState')
    }
  }
})
