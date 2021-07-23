<template>
<div class="todos">
  <div v-for="(todo, index) in todos" :key="todo.id" class="todo" :class="{quickly: todo.active, ready: todo.completed}">
    <TodoItem v-bind:todo="todo" v-on:remove-todo='removeTodo(index)'/>
    </div>
  <div class="add-todo">
  <input ref="input" type="text" class="todo-inut" v-model="newTodo" @keyup.enter="addTodo" placeholder="Введите дело">
  <label class="label-check" for="checkbox">
  <input id="checkbox" type="checkbox" v-model="check">
  Срочное
  </label>
  <button class="button-todo" @click="addTodo()">Добавить дело</button>
  </div>
  </div>
</template>
<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'Todolist',
  components: {
    TodoItem
  },
  props: ['todos'],
  data () {
    return {
      newTodo: '',
      check: false,
      idForTodo: 2,
      todoItem: '',
      checkedCategories: false
    }
  },
  methods: {
    addTodo () {
      if (this.newTodo.trim().length === 0) {
        return
      }

      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
        active: this.check,
        date: new Date().toLocaleString()
      })

      this.newTodo = ''
      this.idForTodo++
      this.check = false

      alert(`"${this.$refs.input.value}" добавлено`)
    },
    removeTodo (index) {
      if (confirm(`Удалить дело "${this.todos[index].title}"?`)) {
        this.todos.splice(index, 1)
      }
    }
  }
}
</script>
<style>
.todos {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 50px;
}
.heading {
  margin: 0;
  margin-bottom: 30px;
  padding: 0;
  text-align: center;
  font-size: 30px;
}
.todo-list {
  margin: 0;
  padding: 0;
  height: 500px;
}
.todo{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 20px 15px;
  border: 2px solid rgba(0, 73, 134);
}
.remove-item {
  width: 16px;
  height: 16px;
  border: none;
  background-image: url('../assets/cross.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  cursor: pointer;
}
.add-todo {
  display: flex;
  align-items: center;
  padding-top: 30px;
  border-top: 2px solid rgba(0, 73, 134);
}
.todo-inut {
  margin-right: 20px;
  padding-left: 5px;
  padding-right: 5px;
  width: 350px;
  height: 30px;
}
.button-todo {
  padding: 7px 21px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: rgba(103, 135, 183);
  cursor: pointer;
}
.label-check {
  margin-right: 20px;
}
.quickly {
  border: 2px solid rgb(165, 0, 52);
}
.ready {
    text-decoration: line-through;
    border: 2px solid green;
}
.title {
  margin: 0;
  margin-right: 30px;
  padding: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  color: rgba(103, 135, 183);
}
span {
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 73, 134);
}
.todo-item {
  display: flex;
  align-items: center;
}
</style>
