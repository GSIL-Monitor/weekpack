<template>
    <div class="container">
        <div>
            <span :v-model="id"></span>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      'id': 0
    }
  },

  methods: {
    created () {
      this.id = this.$route.query.id
      console.log('id', this.id)
    }
  }

}
</script>

<style scoped>

</style>
