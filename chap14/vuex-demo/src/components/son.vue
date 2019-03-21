<template>
  <div>
    <h1>我是子组件</h1>
    <span>{{ msg }}</span>
    <span>我是全局状态num {{ getNum }}</span>
    <button @click="sendMsg">向爸爸传递数据</button>
    <button @click="add">改变状态+</button>
  </div>
</template>

<script>
export default {
  name: 'son',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data: function(){
    return {
      toFatherMsg: '爸爸hello～～'
    }
  },
  methods: {
    sendMsg: function(){
      this.$emit('handle', this.toFatherMsg)
    },
    add(){
      this.$store.commit('increase')
    }
  },
  computed: {
    getNum: function(){
      return this.$store.state.num
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
