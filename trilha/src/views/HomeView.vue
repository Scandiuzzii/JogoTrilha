<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MenuView msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuView from '@/components/MenuView.vue'

export default {
  name: 'HomeView',
  components: {
    MenuView
  }
}
</script>
