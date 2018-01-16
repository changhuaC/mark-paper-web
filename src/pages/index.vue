<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="http://www.baidu.com">baidu</a>
  </div>
</template>

<script>
export default {
    name: 'index',
    data () {
        return {
            msg: '欢迎来到新世界'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
