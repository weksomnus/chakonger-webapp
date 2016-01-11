<template>
  <nav class="navbar navbar-default navbar-static-top">
    <div class="navbar-header btn-group">

      <dropdown>
        <span class="glyphicon glyphicon-align-justify navbar-brand collapsed" aria-hidden="true" data-toggle="dropdown"></span>
        <ul class="dropdown-menu" role="menu">
          <li><a v-link="{ path: '/login' }">LOGIN</a></li>
          <li><a v-link="{ path: '/devicelist' }">DEVICELIST</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </dropdown>
    </div>
  </nav>

</template>

<script>
  import { dropdown } from 'vue-strap'
  import { nav } from 'vue-strap'
  export default {
    replace: false,
    data() {
      return {
        logined: 'yes'
      }
    },
    components: {
      'dropdown':dropdown
    }
  }

</script>
