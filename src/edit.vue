<template>

  <div id="demo">
    <p>{{ text | lowercase}}</p>
    <input v-model="userName">
    <input v-model="text">
    <button @click="greet">我是普通的按钮</button>
    <ul>
      <li v-for="todo in todos">{{ todo.text}}</li>
    </ul>

  </div>
</template>

<script>
  export default {
    replace: false,
  	data() {
      return {
        text: 'vue',
        userName:'',
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue.js' },
          { text: 'Build Something Awesome' }
        ]
      }
    },
    methods: {
      greet: function (event) {
        for (var i=0;i<5;i++){
        this.todos.push({text:this.text+i})
        }
        var crypto = require('crypto')
        var abc = crypto.createHash('md5').update(this.text).digest('hex')
        var resource = this.$resource('login');
        resource.save(null,{userName: this.userName,passWord: abc}).then(function (response) {
          // handle success
        }, function (response) {
          // handle error
        });
          alert('HelloBV ' + abc + '!')
      }
    }
  }
</script>
