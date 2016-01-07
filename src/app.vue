<template>
  <div class="main container">
    <input type="text" v-model="text" />
    <div class="hello">Hello {{ text }}sss!</div>
    <div class="text-right">
      <dropdown>
        <button type="button" class="btn btn-success" data-toggle="dropdown">
          我是按钮
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li><a href="#">猫</a></li>
          <li><a href="#">喵喵</a></li>
          <li><a href="#">狗</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">汪汪</a></li>
        </ul>
      </dropdown>
    </div>
    <login></login>
  </div>
</template>

<script>
  import { dropdown } from 'vue-strap/dist/vue-strap.js'
  import login from './login.vue'
  export default {
    replace: false,
  	data() {
      return {
        text: 'vue'
      }
    },
    components: {
      dropdown,
      'login':login,
    },
  }
</script>
