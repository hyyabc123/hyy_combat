<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style scoped lang="scss">
@import "../src/uitle/scss/_mixin.scss";
  html,body,#app,.wrap{
      @include fn;       
  }
</style>
