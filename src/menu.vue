<template>
  <nav class="navbar navbar-default navbar-static-top">
    <div class="navbar-header btn-group">

      <dropdown>
        <span class="glyphicon glyphicon-align-justify navbar-brand collapsed" aria-hidden="true" data-toggle="dropdown"></span>
        <ul class="dropdown-menu" role="menu">
          <li><a v-show="ifshow"  v-link="{ path: '/login' }">登录</a></li>
          <li><a v-link="{ path: '/devicelist' }">设备列表</a></li>
          <li><a href="#">修改密码</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">注销</a></li>
        </ul>
      </dropdown>
    </div>
  </nav>

</template>

<script>
  import { dropdown } from 'vue-strap'
  import { nav } from 'vue-strap'
  import store from "./store.js"
  export default {
    replace: false,
    data() {
      return {
        logined: 'yes'
      }
    },
    computed:{
      ifshow(){return store.state.sid=='abc'?true:false}
    },
    components: {
      'dropdown':dropdown
    }
  }

</script>
