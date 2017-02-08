<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  created:function(){
	  this.$router.replace('/itebook')
  }
}
</script>

