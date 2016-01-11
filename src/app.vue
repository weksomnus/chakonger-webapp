<template>
  <top-menu></top-menu>
  <div class="main container">
    <router-view></router-view>
  </div>
</template>

<script>
  import menu from './menu.vue'
  export default {
    replace: false,
  	data() {
      return {
        text: 'vue',
        state: {
          sessionID: ''
        }
      }
    },
    components: {
      'top-menu':menu
    }
  }

</script>
