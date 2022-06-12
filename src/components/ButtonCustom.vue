<template>
  <input type="button" :class="classtype" :onclick="activeThisButton" />
</template>

<script>
export default {
  name: 'ButtonCustom',
  props: ['classtype'],
  emits: ['update:player'],
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    activeThisButton () {
      this.$emit('update:player', { nome: 'teste', color: this.classtype })
      this.isActive = true
    }
  },
  computedClasses () {
    return [this.classtype]
  }
}
</script>

<style>
</style>
