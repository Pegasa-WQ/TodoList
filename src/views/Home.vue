<template>
  <div class="container" id="app">
  <TodosLists v-on:send="sendArray"/>
  <TodoList v-bind:todos="todos" v-bind:title="title"  v-on:remove-todo='removeTodo (index)' />
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
      todos: undefined,
      title: ''
    }
  },
  methods: {
    sendArray (todos, title) {
      if (todos === undefined) {
        return
      }
      this.todos = todos
      this.title = title
    },
    getTitle (title) {
      console.log(title)
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
