<template>
  <div id="app">
  <TodosLists v-on:send="sendArray" />
  <TodoList v-bind:todos="todos"  v-on:remove-todo='removeTodo (index)' />
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
      todos: []
    }
  },
  methods: {
    sendArray (todos) {
      this.todos = todos
    }
  }
}
</script>
