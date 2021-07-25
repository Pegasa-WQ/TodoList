<template>
  <div class="container" id="app">
  <TodosLists v-on:send="sendArray" v-on:remove="sendArray"/>
  <TodoList v-bind:todos="todos" v-bind:title="title"  v-on:remove-todo='removeTodo (index)'/>
  </div>
</template>

<script>
import TodoList from '../components/TodoList.vue'
import TodosLists from '../components/TodosLists.vue'

export default {
  name: 'Home',
  components: {
    TodosLists,
    TodoList
  },
  data () {
    return {
      todos: 0,
      title: '',
      completed: 0
    }
  },
  methods: {
    sendArray (todos, title) {
      if (todos === 0) {
        this.todos = 0
        this.title = ''
      } else {
        this.todos = todos
        this.title = title
      }
    }
  }
}
</script>
<style>
  .container {
    display: flex;
    align-items: stretch;
    margin: 0 auto;
    max-width: 1000px;
    padding-right: 20px;
    padding-left: 20px;
  }
</style>
