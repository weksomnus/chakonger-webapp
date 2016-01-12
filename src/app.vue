<template>
  <top-menu></top-menu>
  <div class="main container">
    <router-view></router-view>
    {{state | json}}
  </div>
</template>

<script>
  import menu from './menu.vue'
  import store from "./store.js"
  export default {
    replace: false,

  	data() {
      return {
        text: 'vue',
        state: {
          sessionID: store.state.sid
        }
      }
    },
    components: {
      'top-menu':menu
    }
  }

</script>
