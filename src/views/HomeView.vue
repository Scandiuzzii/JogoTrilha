<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <MenuTeste/>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuTeste from '@/components/MenuComponent.vue'

export default {
  name: 'HomeView',
  components: {
    MenuTeste
  }
}
</script>
