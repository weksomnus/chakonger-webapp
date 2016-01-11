<template>
  <div id="deviceList">
  <ul>
    <li v-for="device in devices">
      {{ device.devName }}
    </li>
  </ul>
    <span>{{logined}}</span>
  </div>
</template>

<script>
  import store from "./store.js"
  export default {
    replace: false,
  	data() {
      return {
        devices: []
      }
    },
    computed:{
      logined(){
        return store.state.sessionID;
      }
    },
    created:function() {
    var resource = this.$resource('devicelist');
    resource.save(null,{sessionID : "ce490ce56ee7c92c6ada6ad695be94deffeacfb120180c4d93a9172b93c49daaca"}).then(function (response) {
      if (response.data.errcode==0){
        //登录成功
        this.devices=response.data.device;

      }else {
        //登陆失败
        alert('ErrMsg:' + response.data.errmsg + '!');
      }
    }, function (response) {
    });
  },
    methods: {

    }
  }
</script>
