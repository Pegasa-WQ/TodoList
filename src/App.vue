<template>
  <div id="app" class="container">
    <TodoList />
  </div>
</template>
<script>
import TodoList from './components/TodoList.vue'
export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>
<style>
* {
  box-sizing: border-box;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

#app {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-family: sans-serif;
}
</style>
