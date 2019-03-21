<template>
  <div>
    <h1>我是父组件</h1>
    <span>{{ fromSonMsg }}</span>
    <span>我也是全局num {{ getNum }}</span>
    <button @click='add'>改变状态+</button>
    <button @click='minusAction'>改变状态- action</button>
    <hr>
    <son :msg="toSonMsg" @handle='getMsgFromSon'></son>
    
  </div>
</template>

<script>
import son from './son.vue'
export default {
  name: 'parent',
  components: {
    son,
  },
  data: function(){
    return {
      toSonMsg: '来自爸爸的问候',
      fromSonMsg: ''
    }
  },
  methods:{
    getMsgFromSon: function(value){
      this.fromSonMsg = value
    },
    add(){
      this.$store.commit('increase')
    },
    minusAction(){
      this.$store.dispatch('decreaseAction')
    }
  },
  computed: {
    getNum: function(){
      // return this.$store.state.num
      return this.$store.getters.getNum
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
