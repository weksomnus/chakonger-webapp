<template>
  <div id="devMainview">
      <dropdown>
        <span data-toggle="dropdown">DROPDOWN</span>
        <ul class="dropdown-menu" role="menu">
          <li v-for="device in devices.unitedevice">{{device.infraTypeID}}</li>
        </ul>
      </dropdown>
    <div id="deviceList" class="list-group">
      <a v-for="device in devices.unitedevice" class="list-group-item">{{device.devType}} {{device.infraTypeID}}</a>
      </div>
  </div>
</template>

<script>a
  import { dropdown } from 'vue-strap'
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
          console.log(this.devices);
        }else {
          //登陆失败
          alert('ErrMsg:' + response.data.errmsg + '!');
        }
      }, function (response) {
      });
    },
    methods: {
    },
    components: {
      'dropdown':dropdown
    }
  }
</script>
