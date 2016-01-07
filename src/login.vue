<template>
  <div id="loginWin">
    <p>{{ text | lowercase}}</p>
    <span>用户名</span>
    <input v-model="userName">
    <span>密码</span>
    <input v-model="passWord">
    <button @click="login">登录</button>
  </div>
</template>

<script>
  export default {
    replace: false,
  	data() {
      return {
        passWord: '',
        userName:''
      }
    },
    methods: {
      login: function (event) {
        var crypto = require('crypto')
        var hash = crypto.createHash('md5').update(this.passWord).digest('hex')
        var resource = this.$resource('login');
        resource.save(null,{userName: this.userName,passWord: hash}).then(function (response) {
            if (response.data.errcode==0){
              //登录成功
              alert('Session ' + response.data.sessionID + '!')
            }else {
              //登陆失败
              alert('ErrMsg:' + response.data.errmsg + '!')
            }
        }, function (response) {
        });
      }
    }
  }
</script>
