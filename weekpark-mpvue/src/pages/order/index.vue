<template>
  <div class="container">
    <div>
      <button @click="clickMe">测试点击事件</button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      name: '约课'
    }
  },
  methods: {
    clickMe () {
      console.log('是的，进来了')
    },
    test (word) {
      console.log('加密前：')
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style scoped>

</style>
