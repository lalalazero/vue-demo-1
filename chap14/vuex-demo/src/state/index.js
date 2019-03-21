import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建状态仓库

export default new Vuex.Store({
    state: {
      num: 88
    },
    // 同步更新
    mutations: {
      increase: function(state){
        state.num++;
      },
      decrease(state){
        state.num = state.num - 20;
      }
      // es6 的写法
      // increase(state){
  
      // }
    },
    // 异步更新
    actions: {
      increaseAction(context){
        context.commit('increase');
      },
      decreaseAction(context){
        // setTimeout(()=>{
        //   context.commit('decrease')
        // }, 1000)
        context.commit('decrease')
      }
    },
    getters: {
      getNum(state){
        return state.num > 0 ? state.num : 0
      }
    },
  })