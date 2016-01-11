<template>
  <div id="loginWin">
    <br><br>
    <p>用户名</p>
    <input v-model="userName" class="col-xs-12 ">
    <br><br>
    <p>密码</p>
    <input v-model="passWord"  class="col-xs-12">
    <br><br>
    <button @click="login" class="col-xs-3">登录</button>
  </div>
</template>

<script>
  import store from "./store.js"
  const {
    savesessionid
    } = store.actions;
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
        var localstorage = require("putainde-localstorage")
// create instance
        var storage = localstorage.create({namespace: "myComponent"})
// same as
        var LocalStorage = require("putainde-localstorage")
        var storage = new LocalStorage({namespace: "myComponent"})
// set & get
        storage.set("foo", {bar: "baz"})
        storage.get("foo") // => {bar: "baz"}
        resource.save(null,{userName: this.userName,passWord: hash}).then(function (response) {
            if (response.data.errcode==0){
              //登录成功
              alert('Session ' + response.data.sessionID + '!');
              router.go({ path: '/devicelist' });
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
