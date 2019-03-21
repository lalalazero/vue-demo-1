<template>
  <div>
    <h1> {{ msg }} </h1>
    <h3> {{ $route.params.msg }}</h3>
    </div>
</template>

<script>
export default {
  name: "HelloEarth",
  data() {
    return {
      msg: "Welcome to Earth"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
