<template>
  <div class="counter-warp">
    <p>Vuex rootState：{{ counter }}</p>
    <p>Vuex moduleState：{{ count1 }}</p>
    <p>
      <button @click="increment">加全局状态</button>
      <button @click="ADD">加模块状态</button>
      <button @click="addAsync(3)">异步加模块状态</button>
    </p>

    <a href="/pages/index/main" class="home">去往首页</a>
  </div>
</template>

<script>
// Use Vuex
import {
  createNamespacedHelpers,
  mapMutations as mapRootMutations,  // 在一个组件中既要用到全局状态，又要用到模块中的状态时，防止重名
  mapGetters as mapRootGetters
} from 'vuex'
const {
  mapMutations,
  mapState,
  mapActions,
  mapGetters
} = createNamespacedHelpers('vic')

export default {
  computed: {
    ...mapRootGetters(['counter']),
    ...mapGetters(["count1"])
  },
  methods: {
    ...mapRootMutations(["increment"]),
    ...mapMutations(["ADD"]),
    ...mapActions(["addAsync"])
  },
  created() {
    console.log(this.$store)
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
