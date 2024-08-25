<template lang="">
  <app-header></app-header>
  <router-view></router-view>
</template>
<script>
import AppHeader from './AppHeader.vue'
import { RouterView } from 'vue-router'
export default {
  components: {
    'app-header': AppHeader,
    'router-view': RouterView
  }
}
</script>
<style lang=""></style>
