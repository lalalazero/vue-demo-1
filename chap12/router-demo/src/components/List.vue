<template>
  <ul>
    <li>
      <router-link :to="{ name: 'HelloWorld', params: { msg: '世界的参数~~~'} }">Hello World</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'HelloEarth', params: { msg: 'Earth的参数~~~'} }">Hello Earth</router-link>
    </li>

  </ul>
</template>


<script>
export default {
  name: 'List'
};
</script>

<style scoped>
</style>