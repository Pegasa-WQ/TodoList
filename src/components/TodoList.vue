/* eslint-disable no-unused-expressions */
<template>
<div class="todos">
  <div>
  <h1 class="heading">Список дел</h1>
  <ul class="todo-list">
    <li v-for="(todo, index) in todos" :key="todo.id" class="todo-item" :class="{quickly: todo.active}" >
    <h2>
        {{ todo.title }}
    </h2>
    <button class="remove-item" @click="removeTodo(index)"></button>
    </li>
  </ul>
  </div>
  <div class="add-todo">
  <input ref="input" type="text" class="todo-inut" v-model="newTodo" @keyup.enter="addTodo" placeholder="Введите дело">
  <label class="label-check" for="checkbox">
  <input id="checkbox" type="checkbox" v-model="check">
  Срочное
  </label>
  <button class="button-todo" @click="addTodo">Добавить дело</button>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      newTodo: '',
      check: false,
      idForTodo: 3,
      todos: [
        {
          id: 1,
          title: 'Finish Vue',
          completed: false
        },
        {
          id: 2,
          title: 'Take',
          completed: false
        }
      ]
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
        active: this.check
      })

      this.newTodo = ''
      this.idForTodo++
      this.check = false

      alert(`${this.$refs.input.value} добавлено`)
    },
    removeTodo (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>
<style scoped>
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
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding-left: 30px;
  padding-right: 15px;
  border: 1px solid #333;
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
  border-top: 1px solid #333;
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
  margin-right: 15px;
}
.quickly {
  border: 3px solid rgb(165, 0, 52);
}
</style>
