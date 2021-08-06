<template>
<div class="todos">
<addTodoModal v-if="PopupVisibleAdd" v-on:closePopupAdd="closePopupAdd" v-bind:titleTodo="newTodo" v-bind:title="title"/>
<div class="todos_container">
<h2 class="title-list"> {{ title }} </h2>
<deleteTodoModal v-if="PopupVisible" v-on:closePopup="closePopup" v-on:deleteTodo="removeTodo" v-bind:todo="todoDelete"/>
<div v-for="(todo, index) in todos" :key="index">
    <TodoItem v-bind:todo="todo" v-on:remove-todo="openModalDelete(index, todo)" :class="{urgent: todo.urgency, completed: todo.is_completed}"/>
</div>
</div>
  <div class="add">
  <input ref="input" type="text" class="todo-input" v-model="newTodo" @keyup.enter="openPopupAdd" placeholder="Введите дело">
  <label class="label-check" for="checkbox">
  <input class="check-urgent" id="checkbox" type="checkbox" v-model="check">
  Срочное
  </label>
  <button class="button-todo" @click="openPopupAdd">Добавить дело</button>
  </div>
  </div>
</template>
<script>
import TodoItem from './TodoItem.vue'
import deleteTodoModal from './deleteTodoModal.vue'
import addTodoModal from './addTodoModal.vue'
import axios from 'axios'
export default {
  name: 'Todolist',
  components: {
    TodoItem,
    deleteTodoModal,
    addTodoModal
  },
  props: ['todos', 'title', 'id'],
  data () {
    return {
      newTodo: '',
      check: false,
      todoItem: '',
      PopupVisible: false,
      PopupVisibleAdd: false,
      idForTodo: 0,
      todoDelete: '',
      indexTodoDelete: ''
    }
  },
  methods: {
    addTodo () {
      if (this.todos === 0) {
        return
      }
      if (this.newTodo.trim().length === 0) {
        return
      }
      const check = this.check
      axios.post('https://academy2.smw.tom.ru/artem-bereza/api2/task/create', { attributes: { name: this.newTodo, list_id: this.id, urgency: this.check, description: '' } }, { headers: { Authorization: 'Bearer' + this.$cookie.get('accessToken') } })
        .then((response) => {
          this.todos.push({
            id: response.data.data.attributes.id,
            name: this.newTodo,
            is_completed: false,
            urgency: check,
            created_at: new Date().toLocaleString()
          })
        })
        .catch(function (error) {
          console.log(error)
        })
      console.log(this.todos)
      this.check = false
    },
    removeTodo () {
      this.todos.splice(this.indexTodoDelete, 1)
      axios.delete(`https://academy2.smw.tom.ru/artem-bereza/api2/task/delete/${this.todoDelete.id}`, { headers: { Authorization: 'Bearer' + this.$cookie.get('accessToken') } })
        .then((response) => {
          return response
        })
      this.PopupVisible = false
    },
    openModalDelete (index, todo) {
      this.todoDelete = todo
      this.indexTodoDelete = index
      this.PopupVisible = true
    },
    closePopup () {
      this.PopupVisible = false
    },
    openPopupAdd () {
      if (this.newTodo === '') {
        return
      }
      if (this.todos === 0) {
        return
      }
      this.PopupVisibleAdd = true
      this.addTodo()
    },
    closePopupAdd () {
      this.PopupVisibleAdd = false
      this.newTodo = ''
    }
  }
}
</script>
<style>
.todos {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 25px;
  height: 550px;
  width: 480px;
}
.todos_container {
  padding: 0 10px;
  max-height: 450px;
  overflow: auto;
}
.heading {
  margin: 0;
  margin-bottom: 30px;
  padding: 0;
  text-align: center;
  font-size: 30px;
}
.add {
  display: flex;
  align-items: center;
  padding-top: 30px;
  border-top: 2px solid rgba(0, 73, 134);
}
.todo-input {
  margin-right: 10px;
  padding-left: 5px;
  padding-right: 5px;
  width: 200px;
  height: 30px;
  transition: all 0.3s ease 0s;
}
.todo-input:hover {
  background-color: rgba(103, 135, 183, 0.2);
}
.todo-input:focus-visible {
  outline: 1px solid rgba(0, 73, 134, 1);
}

.check-urgent:focus-visible {
  outline: 1px solid rgba(0, 73, 134, 1);
}
.button-todo {
  padding: 7px 21px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: rgba(103, 135, 183);
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
.button-todo:hover {
  background-color: rgba(103, 135, 183, 0.8);
}
.button-todo:focus-visible {
  outline: none;
  background-color: rgba(0, 73, 134, 0.8);
}
.button-todo:active {
  outline: none;
  background-color: rgba(0, 73, 134, 1);
}
.label-check {
  margin-right: 20px;
}
.title-list {
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
  padding-top: 5px;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  color: rgba(92, 136, 218);
  border-bottom: 2px solid rgba(0, 73, 134);
}
</style>
