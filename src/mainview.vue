<template>
  <div id="devMainview">
    {{devices | json}}
  </div>
</template>

<script>
  export default {
    replace: false,
  	data() {
      return {
        devices: {},
        devID:this.$route.params.devID
      }
    },
    created:function() {
      var resource = this.$resource('deviceqry');
      resource.save(null,{sessionID : "ce490ce56ee7c92c6ada6ad695be94deffeacfb120180c4d93a9172b93c49daaca",devID:this.devID}).then(function (response) {
        if (response.data.errcode==0){
          //成功
          this.devices=response.data;
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
