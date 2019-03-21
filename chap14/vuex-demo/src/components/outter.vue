<template>
    <div>
        <h1>我是 outter 组件</h1>
        <span>我也是全局状态 num {{ getNum }}</span>
        <button @click="add">改变状态+</button>
    </div>
</template>

<script>
export default {
    name: 'outter',
    computed: {
        getNum: function(){
        return this.$store.state.num
        }
    },
    methods: {
        add(){
            this.$store.commit('increase')
        }
    }
}
</script>

<style scoped>

</style>