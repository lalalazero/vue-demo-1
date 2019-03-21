<template>
  <div>
    <h1>Hello World</h1>
    <parent />
    <hr>
    <outter />
  </div>
</template>

<script>
import parent from './parent.vue'
import outter from './outter.vue'
export default {
  name: 'HelloWorld',
  components: {
    parent,
    outter,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
